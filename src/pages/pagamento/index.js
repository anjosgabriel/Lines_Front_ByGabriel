import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Seta from './../../img/seta-clara.png';
import Cartao from './../../img/cartaocredito.png';
import Pix from './../../img/pix.png';
import Google from './../../img/google.png';


import styles from "./../pagamento/style";

const Pagamento = ({navigation}) => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  const handlePressIn = (buttonNumber) => {
    switch (buttonNumber) {
      case 1:
        setIsHovered1(!isHovered1);  
        break;
      case 2:
        setIsHovered2(!isHovered2);  
        break;
      case 3:
        setIsHovered3(!isHovered3);  
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
                    <View style={styles.flexHeader}>
                        <TouchableOpacity style={styles.setaContainer} onPress={ () => navigation.navigate("Passagens")}>
                            <Image source={Seta}  resizeMode="contain"  style={styles.seta}/>
                        </TouchableOpacity>

                        <Text style={styles.title}>Pagamento</Text>
                    </View>
                </View>

      <View style={styles.subtitulo}>
        <Text style={styles.subtitle}>Formas de pagamento</Text>
      </View>

      <View style={styles.pagamentos}>
        <TouchableOpacity
          onPressIn={() => handlePressIn(1)}
          activeOpacity={0.9}
          style={[styles.botao1, isHovered1 && styles.buttonHovered]}>
        
          <Image source={Cartao} resizeMode="contain" style={styles.cartao}/>
          <Text style={[styles.textoBotao1, isHovered1 && styles.txtbuttonHovered]}>Cartão de crédito cadastrado</Text>
          <Text style={[styles.subtextoBotao1, isHovered1 && styles.txtbuttonHovered]}>Final: 6098</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPressIn={() => handlePressIn(2)}
          activeOpacity={0.9}
          style={[styles.botao2, isHovered2 && styles.buttonHovered]}>
        
          <Image source={Pix} resizeMode="contain" style={styles.pix}/>
          <Text style={[styles.textoBotao2, isHovered2 && styles.txtbuttonHovered]}>PIX</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPressIn={() => handlePressIn(3)}
          activeOpacity={0.9}
          style={[styles.botao3, isHovered3 && styles.buttonHovered]} >
       
          <Image source={Google} resizeMode="contain" style={styles.google}/>
          <Text style={[styles.textoBotao3, isHovered3 && styles.txtbuttonHovered]}>Carteira Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao4}>
          <Text style={styles.textoBotao4}>Adicionar forma de pagamento</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.botaoFinalizar} onPress={ () => navigation.navigate("Aprovado")}>
        <Text style={styles.textoBotaoFinalizar}>Finalizar pedido</Text>
      </TouchableOpacity>

    </View>
  );
};

export default Pagamento;