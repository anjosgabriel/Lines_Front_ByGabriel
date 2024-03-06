import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import styles from './styles'

import Seta from './../../../img/seta-clara.png'
import AcidenteImage from './../../../img/relogio.png'
import Clima from './../../../img/chuvaT.png'
import Engrenagem from './../../../img/engrenagemT.png'
import Colisao from './../../../img/trem.png'
import Comentario from './../../../img/comentario.png'
import Foto from './../../../img/foto.png'

class Lentidao extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: '',
            maxLength: 150,
        };
    }

    handleChangeText = (text) => {
        if (text.length <= this.state.maxLength) {
            this.setState({ comment: text });
        }
    };

    Alertas = () => {
        this.props.navigation.navigate('Alertas');
    }

    home = () => {
        this.props.navigation.navigate('home');
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

                <View style={styles.buttonPrincipal}>
                        <View  style={styles.fundo_acidente}>
                            <View>                         
                                <Image source={AcidenteImage} style={styles.imageAlerta}/>   
                            </View>
                        </View>
                        <Text style={styles.txtAlerta}>Lentidão</Text>
                </View>

                <View style={styles.detalhes}>
                    <TextInput
                        multiline
                        numberOfLines={4}
                        placeholder="Adicione um comentário"
                        value={this.state.comment}
                        onChangeText={this.handleChangeText}
                        style={styles.commentInput}
                        maxLength={this.state.maxLength}
                    />
                    <Text style={styles.characterCount}>{this.state.comment.length}/{this.state.maxLength}</Text>

                    <TouchableOpacity style={styles.addFoto}>
                        <Image source={Foto} style={styles.icon}/>
                        <Text style={styles.txtAddFoto}>Adicionar foto</Text>
                    </TouchableOpacity>
                </View>

                    <View style={styles.flexButtons}>

                        <TouchableOpacity  style={styles.fundoEnviar} onPress={this.home}>
                            <Text style={styles.txtEnviar}>
                                Enviar
                            </Text>
                        </TouchableOpacity>
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

export default Lentidao