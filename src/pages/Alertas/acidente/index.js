import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from './styles'

import Seta from './../../../img/seta-clara.png'
import AcidenteImage from "./../../../img/trem.png"
import DescarrilamentoImage from './../../../img/descarrilamentoT.png'
import Clima from './../../../img/chuvaT.png'
import Engrenagem from './../../../img/engrenagemT.png'
import Colisao from './../../../img/trem.png'


class Acidente extends Component{

    Alertas = () => {
        this.props.navigation.navigate('Alertas')
    }

    Descarrilamento = () => {
        this.props.navigation.navigate('Descarrilamento')
    }

    Climatico = () => {
        this.props.navigation.navigate('Climatico')
    }

    Colisao = () => {
        this.props.navigation.navigate('Colisao')
    }

    Tecnico = () => {
        this.props.navigation.navigate('Tecnico')
    }

    
    render(){
        return(
            <View style={styles.container}>
                
                <View style={styles.containerHeader}>
                    <View style={styles.flexHeader}>
                        <TouchableOpacity style={styles.setaContainer} onPress={this.Alertas}>
                            <Image source={Seta}  resizeMode="contain"  style={styles.seta}/>
                        </TouchableOpacity>
                            
                        <Text style={styles.title}>Alertas</Text>
                    </View>  
                </View>



                <View  style={styles.buttonPrincipal}>
                        <View  style={styles.fundo_acidente}>
                            <View onPress={this.Acidente}>                         
                                    <Image source={AcidenteImage} style={styles.imageAlerta}/>   
                            </View>
                        </View>

                        <Text style={styles.txtAlerta}>Acidente</Text>
                    </View>
                
                    
                    <View style={styles.flexAlerta}>
                        <View  style={styles.button}>
                            <View  style={styles.fundo_opcao}>
                                <TouchableOpacity onPress={this.Descarrilamento}>                         
                                        <Image source={DescarrilamentoImage} style={styles.imageAlerta}/>   
                                </TouchableOpacity>
                            </View>

                            <Text style={styles.txtOpcao}>Descarrilamento</Text>
                        </View>

                        <View  style={styles.button}>
                            <View  style={styles.fundo_opcao}>
                                <TouchableOpacity onPress={this.Tecnico}>                         
                                        <Image source={Engrenagem} style={styles.imageAlerta}/>   
                                </TouchableOpacity>
                            </View>

                            <Text style={styles.txtOpcao}>Problema técnicos</Text>
                        </View>                        
                    </View>

                    <View style={styles.flexAlerta}>
                        <View  style={styles.button}>
                            <View  style={styles.fundo_opcao}>
                                <TouchableOpacity onPress={this.Climatico}>                         
                                        <Image source={Clima} style={styles.imageAlerta}/>   
                                </TouchableOpacity>
                            </View>

                            <Text style={styles.txtOpcao}>Condições climáticas</Text>
                        </View>

                        <View  style={styles.button}>
                            <View  style={styles.fundo_opcao}>
                                <TouchableOpacity onPress={this.Colisao}>                         
                                        <Image source={AcidenteImage} style={styles.imageAlerta}/>   
                                </TouchableOpacity>
                            </View>

                            <Text style={styles.txtOpcao}>Colisões com veiculo</Text>
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

export default Acidente