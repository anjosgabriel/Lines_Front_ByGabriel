import React, { useState } from "react";
import { View, Text, TextInput, Alert } from 'react-native';
import styles from "../Cadastro/style";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Componentes/Firebase/Firebase';
import { Button } from "react-native-elements";


export default function Cadastro({ navigation }) {
    const [nomeCompleto, setNomeCompleto] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    function validarSenha(senha) {
      // Verificar se a senha tem pelo menos uma letra maiúscula
      const regexMaiuscula = /[A-Z]/;
      if (!regexMaiuscula.test(senha)) {
          return false;
      }

      // Verificar se a senha tem letras e números
      const regexLetrasENumeros = /^(?=.*[a-zA-Z])(?=.*\d).+$/;
      if (!regexLetrasENumeros.test(senha)) {
          return false;
      }

      // Verificar se a senha tem pelo menos um caractere especial
      const regexCaractereEspecial = /[\W_]/;
      if (!regexCaractereEspecial.test(senha)) {
          return false;
      }

      return true;
  }

  async function createUser() {
    if (!validarSenha(password)) {
        Alert.alert('Senha muito fraca!', 'A senha deve conter pelo menos uma letra maiúscula, letras e números, e pelo menos um caractere especial.');
        return;
    }

    if (password !== confirmarSenha) {
        Alert.alert('Senhas não coincidem!', 'As senhas digitadas não são iguais. Por favor, tente novamente.');
        return;
    }

    try {
        await createUserWithEmailAndPassword(auth, email, password);
        Alert.alert('Senha de segurança forte!');
        Alert.alert('Cadastro criado com sucesso!');

        // Limpar os campos após o cadastro ser criado com sucesso
        setNomeCompleto('');
        setEmail('');
        setPassword('');
        setConfirmarSenha('');
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
            />

            <TextInput 
              placeholder="Senha"
              placeholderTextColor='#6d6d6d'
              value={password}
              onChangeText={value => setPassword(value)}
              style={styles.inputSenha}
              maxLength={6}
              secureTextEntry={true}
            />

            <TextInput 
              placeholder="Confirmar Senha"
              placeholderTextColor='#6d6d6d'
              value={confirmarSenha}
              onChangeText={value => setConfirmarSenha(value)}
              style={styles.inputConfirmar}
              maxLength={6}
              secureTextEntry={true}
            />

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