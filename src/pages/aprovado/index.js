import React, { useState , Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Seta from './../../img/seta-clara.png';
import Ok from './../../img/confirmado.png';

import styles from "./../aprovado/style"

export default function Aprovado ({navigation}) {
  
  return ( 
    <View style={styles.container}>
    <View style={styles.containerHeader}>
        <View style={styles.flexHeader}>
          <Text style={styles.title}>Pagamento</Text>
        </View>

    </View>
      
        <View style={styles.aprovado}>
          <Image source={Ok} resizeMode="contain" style={styles.ok}/>
          <Text style={styles.subtitle}>Pagamento Aprovado!</Text>
        </View>

        <View style={styles.corpo}>
          <Text style={styles.texto}>Utilize sua passagem através do QRCode nas estações de trem e metrô</Text>
        </View>

        <TouchableOpacity style={styles.botaoVerPassagem} onPress={ () => navigation.navigate("Sua Passagem")}>
          <Text style={styles.textoBotaoVerPassagem}>Ver passagem</Text>
        </TouchableOpacity>
    </View>
  );
};
