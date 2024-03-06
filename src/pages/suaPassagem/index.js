import React, { useState , Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Seta from './../../img/seta-clara.png';
import Qrcode from './../../img/qrcode.jpg';

import styles from "./../suaPassagem/style";

export default function Suapassagem ({navigation}) {
  
  return ( 
    <View style={styles.container}>
    <View style={styles.containerHeader}>
                  <View style={styles.flexHeader}>
                      <TouchableOpacity style={styles.setaContainer} onPress={ () => navigation.navigate("Passagens")}>
                          <Image source={Seta}  resizeMode="contain"  style={styles.seta}/>
                      </TouchableOpacity>

                      <Text style={styles.title}>Passagens</Text>
                  </View>
              </View>
        <View style={styles.subtitulo}>
          <Text style={styles.subtitle}>Sua passagem</Text>
        </View>

        <View style={styles.validadas}>
          <Text style={styles.data}>Data da compra: 05/12/2023</Text>
          <Image source={Qrcode}  resizeMode="contain"  style={styles.qrcode}/>
        </View>

        <View style={styles.restante}>
          <Text style={styles.resto}>ID QRcode</Text>
          <Text style={styles.resto2}>858485690</Text>
        </View>

        <View style={styles.restantedenovo}>
          <Text style={styles.resto}>Valor</Text>
          <Text style={styles.resto2}>R$ 4,40</Text>
        </View>

        <TouchableOpacity style={styles.botaoDetalhes}>
          <Text style={styles.textoBotaoDetalhes}>Ver detalhes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoVoltar} onPress={ () => navigation.navigate("Passagens")}>
          <Text style={styles.textoBotaoVoltar}>Voltar</Text>
        </TouchableOpacity>

    </View>
  );
};
