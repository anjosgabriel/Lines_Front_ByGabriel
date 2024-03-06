import React, { useState } from "react";
import { View, Text, TextInput, Image, Alert} from 'react-native';
import styles from '../Login/style';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Componentes/Firebase/Firebase';
import { Button } from "react-native-elements";
import iconeUsuarioLogin from '../../img/iconeUsuarioLogin.png';

export function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function login() {
    
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate('Home');
      console.log('Logado com sucesso! \n' + userCredential.user.email);
      Alert.alert('Sucesso', 'Logado com sucesso, bem-vindo!');

    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Email ou senha incorretos!');

    }
  }

    return (
      <View style={styles.container}>
        
        <View style={styles.imagemLogin} ><Image source={iconeUsuarioLogin} style={{width:200, height:200}}></Image></View>

        <Text style={styles.loginTexto}>Informe seu email e sua senha!</Text>

        <TextInput 
          placeholder="Informe seu e-mail"
          placeholderTextColor='#6d6d6d'
          value={email}
          onChangeText={value => setEmail(value)}
          style={styles.input}
        />

        <TextInput 
          placeholder="Digite sua senha"
          placeholderTextColor='#6d6d6d'
          value={password}
          onChangeText={value => setPassword(value)}
          style={styles.input}
          maxLength={6}
          secureTextEntry={true}
        />

        <Button 
          buttonStyle={styles.button}
          title="Entrar"
          onPress={() => login('')}
        />

        <Text
          style={styles.cadastroTexto}
          onPress={() => navigation.navigate('Cadastro')}>
          Não tem cadastro? Clique aqui e 
        <Text style={styles.cadastro}> Cadastre-se</Text>!
        </Text>

      </View>
  
    )
}