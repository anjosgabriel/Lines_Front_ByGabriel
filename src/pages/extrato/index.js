import React, { useState , Component } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import Seta from './../../img/seta-clara.png';
import Qrcode from './../../img/qrcode.jpg';

import styles from "./../valida/style";

export default function Extrato ({navigation}) {

  return ( 
    <ScrollView>
    <View style={{flex:1, alignItems:"center"}}>
    
 <View style={styles.containerHeader}>
                    <View style={styles.flexHeader}>
                        <TouchableOpacity style={styles.setaContainer} onPress={ () => navigation.navigate("Passagens")}>
                            <Image source={Seta}  resizeMode="contain"  style={styles.seta}/>
                        </TouchableOpacity>

                        <Text style={styles.title}>   Extrato</Text>
                    </View>
                </View>
        <View style={styles.subtitulo}>
          <Text style={styles.subtitle}>Extrato de passagens</Text>
        </View>
      
      <View style={{opacity: 0.2}}>
        <View style={styles.validadas}>
          <Text style={styles.data}>Data da compra: 27/11/2023</Text>
          <Image source={Qrcode}  resizeMode="contain"  style={styles.qrcode}/>
        </View>

        <View style={styles.restante}>
          <Text style={styles.resto}>ID QRcode</Text>
          <Text style={styles.resto2}>858485683</Text>
        </View>

        <View style={styles.restantedenovo}>
          <Text style={styles.resto}>Valor</Text>
          <Text style={styles.resto2}>R$ 4,40</Text>
        </View>

        <View style={styles.validadas}>
          <Text style={styles.data}>Data da compra: 24/11/2023</Text>
          <Image source={Qrcode}  resizeMode="contain"  style={styles.qrcode}/>
        </View>

        <View style={styles.restante}>
          <Text style={styles.resto}>ID QRcode</Text>
          <Text style={styles.resto2}>858485682</Text>
        </View>

        <View style={styles.restantedenovo}>
          <Text style={styles.resto}>Valor</Text>
          <Text style={styles.resto2}>R$ 4,40</Text>
        </View>

        <View style={styles.validadas}>
          <Text style={styles.data}>Data da compra: 23/11/2023</Text>
          <Image source={Qrcode}  resizeMode="contain"  style={styles.qrcode}/>
        </View>

        <View style={styles.restante}>
          <Text style={styles.resto}>ID QRcode</Text>
          <Text style={styles.resto2}>858485681</Text>
        </View>

        <View style={styles.restantedenovo}>
          <Text style={styles.resto}>Valor</Text>
          <Text style={styles.resto2}>R$ 4,40</Text>
        </View>

        <View style={styles.validadas}>
          <Text style={styles.data}>Data da compra: 22/11/2023</Text>
          <Image source={Qrcode}  resizeMode="contain"  style={styles.qrcode}/>
        </View>

        <View style={styles.restante}>
          <Text style={styles.resto}>ID QRcode</Text>
          <Text style={styles.resto2}>858485680</Text>
        </View>

        <View style={styles.restantedenovo}>
          <Text style={styles.resto}>Valor</Text>
          <Text style={styles.resto2}>R$ 4,40</Text>
        </View>
      </View>
      </View>
    </ScrollView>
  );
};
