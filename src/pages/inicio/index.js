import React from 'react-native';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import imagemBemVindo from '../../img/iconeBemVindo.png';
import styles from '../inicio/style';


const Home = ({ navigation }) => (
  
    <View style={styles.container}>

     <View style={styles.imagemHome}><Image source={imagemBemVindo} style={{width:200, height:200}}></Image></View>
     

    <Text style={styles.bemVindo}>
      Bem-vindo, <Text style={styles.liner}>L!ner</Text>!
    </Text>

    <Text style={{color:'#678BBA', fontSize:15, marginBottom:20}}> Faça login ou crie uma conta.</Text>

    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('Login')}
    >
      <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>

    <Text style={{color:'#678BBA', fontSize:15, margin:10}}>ou</Text>

    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('Cadastro')}
    >
      <Text style={styles.buttonText}>Criar conta</Text>
    </TouchableOpacity>
  </View>
  
);

Home.navigationOptions = {
    title: 'Home',
  }
  
export default Home;