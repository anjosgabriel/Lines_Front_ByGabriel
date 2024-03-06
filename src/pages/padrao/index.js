import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from './styles'

import Seta from './../../../img/seta-clara.png'


class Acidente extends Component{

    Alertas = () => {
        this.props.navigation.navigate('Alertas')
    }

    
    render(){
        return(
            <View style={styles.container}>
                
                <View style={styles.containerHeader}>
                    <View style={styles.flexHeader}>
                        <TouchableOpacity style={styles.setaContainer} onPress={this.Alertas}>
                            <Image source={Seta}  resizeMode="contain"  style={styles.seta}/>
                        </TouchableOpacity>
                            
                        <Text style={styles.title}>Acidente</Text>
                    </View>  
                </View>


                
            </View>
        )
    }
}

export default Acidente