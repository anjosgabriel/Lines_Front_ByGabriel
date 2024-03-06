import React, { useState , Component } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import Seta from './../../img/seta-clara.png';
import Qrcode from './../../img/qrcode.jpg';

import styles from "./../valida/style";

export default function Valida ({navigation}) {
  
  return ( 
    <ScrollView>
    <View style={{flex:1, alignItems:"center"}}>
    
 <View style={styles.containerHeader}>
                    <View style={styles.flexHeader}>
                        <TouchableOpacity style={styles.setaContainer} onPress={ () => navigation.navigate("Passagens")}>
                            <Image source={Seta}  resizeMode="contain"  style={styles.seta}/>
                        </TouchableOpacity>

                        <Text style={styles.title}>Passagens</Text>
                    </View>
                </View>
      
        <View style={styles.subtitulo}>
          <Text style={styles.subtitle}>Suas Passagens válidas</Text>
        </View>

        <View style={styles.validadas}>
          <Text style={styles.data}>Data da compra: 00/00/2222</Text>
          <Image source={Qrcode}  resizeMode="contain"  style={styles.qrcode}/>
        </View>

        <View style={styles.restante}>
          <Text style={styles.resto}>ID QRcode</Text>
          <Text style={styles.resto2}>858485684</Text>
        </View>

        <View style={styles.restantedenovo}>
          <Text style={styles.resto}>Valor</Text>
          <Text style={styles.resto2}>R$ 4,40</Text>
        </View>

        <View style={styles.validadas}>
          <Text style={styles.data}>Data da compra: 00/00/2222</Text>
          <Image source={Qrcode}  resizeMode="contain"  style={styles.qrcode}/>
        </View>

        <View style={styles.restante}>
          <Text style={styles.resto}>ID QRcode</Text>
          <Text style={styles.resto2}>858485684</Text>
        </View>

        <View style={styles.restantedenovo}>
          <Text style={styles.resto}>Valor</Text>
          <Text style={styles.resto2}>R$ 4,40</Text>
        </View>

        <View style={styles.validadas}>
          <Text style={styles.data}>Data da compra: 00/00/2222</Text>
          <Image source={Qrcode}  resizeMode="contain"  style={styles.qrcode}/>
        </View>

        <View style={styles.restante}>
          <Text style={styles.resto}>ID QRcode</Text>
          <Text style={styles.resto2}>858485684</Text>
        </View>

        <View style={styles.restantedenovo}>
          <Text style={styles.resto}>Valor</Text>
          <Text style={styles.resto2}>R$ 4,40</Text>
        </View>

        <View style={styles.validadas}>
          <Text style={styles.data}>Data da compra: 00/00/2222</Text>
          <Image source={Qrcode}  resizeMode="contain"  style={styles.qrcode}/>
        </View>

        <View style={styles.restante}>
          <Text style={styles.resto}>ID QRcode</Text>
          <Text style={styles.resto2}>858485684</Text>
        </View>

        <View style={styles.restantedenovo}>
          <Text style={styles.resto}>Valor</Text>
          <Text style={styles.resto2}>R$ 4,40</Text>
        </View>
    
    </View>
    </ScrollView>
  );
};
