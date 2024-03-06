import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, Alert, TextInput} from "react-native";
import styles from "./styles";
import Seta from "./../../img/seta-clara.png";

import Eletrica from "./../../img/energia.png"
import Acidente from "./../../img/trem.png"
import Lentidao from "./../../img/relogio.png"
import Movimento from "./../../img/movimento.png"
import Obras from "./../../img/cones.png"
import Sos from "./../../img/sirene.png"


class Alertas extends Component {

    Acidente = () => {
        this.props.navigation.navigate('Acidente')
    }

    Movimento = () => {
        this.props.navigation.navigate('Movimento')
    }

    Eletrica = () => {
        this.props.navigation.navigate('Eletrica')
    }
    
    Obras = () => {
        this.props.navigation.navigate('Obras')
    }

    Lentidao = () => {
        this.props.navigation.navigate('Lentidao')
    }

    SOS = () => {
        this.props.navigation.navigate('SOS')
    }

    home = () => {
        this.props.navigation.navigate('home')
    }

    render(){

        return(
            <View style={styles.container}>

                <View style={styles.containerHeader}>
                    <View style={styles.flexHeader}>
                        <TouchableOpacity style={styles.setaContainer} onPress={this.home}>
                            <Image source={Seta}  resizeMode="contain"  style={styles.seta}/>


                        </TouchableOpacity>
                            
                        <Text style={styles.title}>Alertas</Text>

                    </View>
                    
                </View>


                <View>
                    <Text style={styles.titulo}>Atualize o Mapa</Text>
                </View>

                <View style={styles.flexAlerta}>
                    <View  style={styles.button}>
                        <View  style={styles.fundo_acidente}>
                            <TouchableOpacity onPress={this.Acidente}>                         
                                    <Image source={Acidente} style={styles.imageAlerta}/>   
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.txtAlerta}>Acidente</Text>
                    </View>

                    <View  style={styles.button}>
                        <View  style={styles.fundo_eletricidade}>
                            <TouchableOpacity onPress={this.Eletrica}>                         
                                    <Image source={Eletrica} style={styles.imageAlerta}/>   
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.txtAlerta}>Falha elétrica</Text>
                    </View>
                </View>

                <View style={styles.flexAlerta}>
                    <View  style={styles.button}>
                        <View  style={styles.fundo_movimento}>
                            <TouchableOpacity onPress={this.Movimento}>                         
                                    <Image source={Movimento} style={styles.imageAlerta}/>   
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.txtAlerta}>Movimento</Text>
                    </View>

                    <View  style={styles.button}>
                        <View  style={styles.fundo_obras} >
                            <TouchableOpacity onPress={this.Obras}>                         
                                    <Image source={Obras} style={styles.imageAlerta}/>   
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.txtAlerta}>Obras</Text>
                    </View>
                </View>

                <View style={styles.flexAlerta}>
                    <View  style={styles.button}>
                        <View  style={styles.fundo_lentidao}>
                            <TouchableOpacity onPress={this.Lentidao}>                         
                                    <Image source={Lentidao} style={styles.imageAlerta}/>   
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.txtAlerta}>Lentidão</Text>
                    </View>

                    <View  style={styles.button}>
                        <View  style={styles.fundo_sos}>
                            <TouchableOpacity onPress={this.SOS}>                         
                                    <Image source={Sos} style={styles.imageAlerta}/>   
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.txtAlertaSOS}>S.O.S</Text>
                    </View>
                </View>

                <View style={styles.atualizacoes}>
                   <Text style={styles.txtAtualizacoes}> 
                        Todos os Alertas são públicos e podem sofrer atualizações
                    </Text>
                </View>
            </View>
        )
    }
}

export default Alertas
