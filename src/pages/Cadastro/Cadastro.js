import React, { useState } from "react";
import { View, Text, TextInput, Alert, TouchableOpacity } from 'react-native';
import styles from "../Cadastro/style";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../Componentes/Firebase/Firebase';
import { Button } from "react-native-elements";
import { Ionicons } from '@expo/vector-icons';

export default function Cadastro({ navigation }) {
    const [nomeCompleto, setNomeCompleto] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    function validarNomeCompleto(nomeCompleto) {
        if (nomeCompleto.trim() === '') {
            return false; 
        }

        const regexNome = /^[A-Z][a-z]*( [A-Z][a-z]*)+$/;
        if (!regexNome.test(nomeCompleto)) {
            return false; 
        }

        return true;
    }

    function validarSenha(senha) {
        const regexMaiuscula = /[A-Z]/;
        if (!regexMaiuscula.test(senha)) {
            return false;
        }

        const regexLetrasENumeros = /^(?=.*[a-zA-Z])(?=.*\d).+$/;
        if (!regexLetrasENumeros.test(senha)) {
            return false;
        }

        const regexCaractereEspecial = /[\W_]/;
        if (!regexCaractereEspecial.test(senha)) {
            return false;
        }

        if (senha.length < 8 || senha.length > 12) {
            return false;
        }

        return true;
    }

    async function createUser() {
        if (!validarNomeCompleto(nomeCompleto)) {
            Alert.alert('Nome inválido!', 'Por favor, insira um nome válido.');
            return;
        }

        if (!validarSenha(password)) {
            Alert.alert('Senha inválida!', 'A senha deve conter pelo menos uma letra maiúscula, letras e números, pelo menos um caractere especial, e ter de 8 a 12 caracteres.');
            return;
        }

        if (password !== confirmarSenha) {
            Alert.alert('Senhas não coincidem!', 'As senhas digitadas não são iguais. Por favor, tente novamente.');
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email.toLowerCase(), password);
            const user = userCredential.user;

            if (user) {
                await db.collection('users').doc(user.uid).set({
                    nomeCompleto: nomeCompleto,
                    email: email.toLowerCase()
                });
                Alert.alert('Senha de segurança forte!');
                Alert.alert('Cadastro criado com sucesso!');
                setNomeCompleto('');
                setEmail('');
                setPassword('');
                setConfirmarSenha('');
            } else {
                Alert.alert('Erro ao criar usuário!', 'Usuário não encontrado.');
            }
        } catch (error) {
            console.error('Erro ao criar usuário:', error);
            Alert.alert('Erro ao criar usuário:', error.message);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.tituCadastro}>Cadastro</Text>

            <TextInput 
                placeholder="Nome Completo"
                placeholderTextColor='#6d6d6d'
                value={nomeCompleto}
                onChangeText={value => setNomeCompleto(value)}
                style={styles.inputNome}
            />

            <TextInput 
                placeholder="E-mail"
                placeholderTextColor='#6d6d6d'
                value={email}
                onChangeText={value => setEmail(value)}
                style={styles.inputEmail}
                autoCapitalize='none'
                autoCorrect={false}
            />

            <TextInput 
                placeholder="Senha"
                placeholderTextColor='#6d6d6d'
                value={password}
                onChangeText={value => setPassword(value)}
                style={styles.inputSenha}
                maxLength={12}
                secureTextEntry={!showPassword}
            />

            <TouchableOpacity
                style={styles.olho}
                onPress={() => setShowPassword(!showPassword)}>
                <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={24} color="#6d6d6d" />
            </TouchableOpacity>

            <TextInput 
                placeholder="Confirmar Senha"
                placeholderTextColor='#6d6d6d'
                value={confirmarSenha}
                onChangeText={value => setConfirmarSenha(value)}
                style={styles.inputConfirmar}
                maxLength={12} 
                secureTextEntry={!showPassword}
            />

            <TouchableOpacity
                style={styles.olho}
                onPress={() => setShowPassword(!showPassword)}>
                <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={24} color="#6d6d6d" />
            </TouchableOpacity>

            <Button
                buttonStyle={styles.button} 
                title="Cadastrar"
                onPress={() => createUser()}
            />

            <Text
                style={styles.loginTexto}
                onPress={() => navigation.navigate('Login')}>
                Já possui conta?
                <Text style={styles.login}> Login</Text>
            </Text> 
        </View>
    )
}
