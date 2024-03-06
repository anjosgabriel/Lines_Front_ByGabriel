import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Seta from './../../img/seta-clara.png'

import styles from "./../passagens/style";

const Passagens = ({navigation}) => {
  const [quantidade, setQuantidade] = useState(1); 
  const handleIncrement = () => {
    setQuantidade(quantidade + 1);
  };

  const handleDecrement = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  };
  
  return (
    <View style={styles.container}>
     
      <View style={styles.subtitulo}>
        <Text style={styles.tituloPassagens}>Passagens</Text>
      </View>


      <View style={styles.conteudo}>
        <View style={styles.esquerda}>
          <Text style={styles.tipoTransporte}>Metrô/CPTM</Text>
          <Text style={styles.valorPassagem}>R$ 4,40</Text>
        </View>

        <View style={styles.direita}>
          <TouchableOpacity style={styles.botaoSoma} onPress={handleIncrement}>
            <Text style={styles.textoBotaoSoma}>+</Text>
          </TouchableOpacity>

          <Text style={styles.quantidade}>{quantidade}</Text>

          <TouchableOpacity style={styles.botaoSubtracao} onPress={handleDecrement}>
            <Text style={styles.textoBotaoSubtracao}>-</Text>
          </TouchableOpacity>
        </View>
      

      <View style={styles.total}>
        <Text style={styles.tituloTotal}>Total: </Text>
        <Text style={styles.valorTotal}>R$ {(quantidade * 4.40).toFixed(2)}</Text>
      </View>
    </View>
      
      <TouchableOpacity style={styles.botaoFinalizar} onPress={() => navigation.navigate('Pagamento')}>
        <Text style={styles.textoBotaoFinalizar}>Continuar</Text>
      </TouchableOpacity>

      <View style={styles.botaoExtrato}>
      <TouchableOpacity style={styles.button1}  onPress={() => navigation.navigate('Validas')}>
        <Text style={styles.buttonText1}>Suas passagens válidas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('Extrato')}>
        <Text style={styles.buttonText1}>Extrato de uso</Text>
      </TouchableOpacity>
    </View>
    </View>

   
  );
};

export default Passagens;
