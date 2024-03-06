import react from "react";
import { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

import imgUser from "./../../img/iconeUser.png";
import imgEdit from "./../../img/iconeEditar.png";
import imgSeta from "./../../img/setaDireita.png";
import imgLocaisSalvos from "./../../img/LocaisSalvos.png";
import imgConfiguracoes from "./../../img/configuracoes.png";
import styles from "./style.js";

export default function Perfil({navigation}){
    return(
        <View style={styles.conteiner}>

            <View style={styles.header}>

            <View style={styles.imgUserConteiner}>

                <Image source={imgUser} style={styles.imgUser}></Image>

                <View style={styles.txtOlaConteiner}>

                    <Text style={styles.txtOla}>Olá,</Text>

                    <View style={styles.imgEditar}>     

                        <Text style={styles.txtNome}>João Messias</Text>

                    <TouchableOpacity >

                    <Image source={imgEdit} style={styles.imgEdit}></Image>

                    </TouchableOpacity>

                    </View>       
                </View>

            </View>
            </View>

           <View style={styles.botaoConteiner}>
                <TouchableOpacity onPress={() => navigation.navigate('LocaisSalvos')}>
                    <View style={styles.opcoesBotao}>
                        <Image source={imgLocaisSalvos} style={styles.imgBotoes}></Image>
                    </View>
                    <Text style={styles.txtBotao}>Locais salvos</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Configuracoes')}>
                    <View style={styles.opcoesBotao}>
                        <Image source={imgConfiguracoes} style={styles.imgBotoes}></Image>
                    </View>
                    <Text style={styles.txtBotao}>Configurações</Text>
                </TouchableOpacity>

        

           </View>

            <View style={styles.LinhaMaior}></View>

            <TouchableOpacity>
                <View style={styles.opcoes}>
                        <Text style={styles.txtOpcoes}>Instruções    </Text>
                        <View style={styles.imgSetaConteiner}>
                        <Image source={imgSeta} style={styles.imgSeta}></Image>
                        </View>
                </View>
            </TouchableOpacity>
           
            <View style={styles.Linha}></View>

            <TouchableOpacity>
                <View style={styles.opcoes}>
                        <Text style={styles.txtOpcoes}>Notificações</Text>
                        <View style={styles.imgSetaConteiner}>
                        <Image source={imgSeta} style={styles.imgSeta}></Image>
                        </View>
                </View>
            </TouchableOpacity>

            <View style={styles.Linha}></View>

            <TouchableOpacity>
                <View style={styles.opcoes}>
                        <Text style={styles.txtOpcoes}>Minha conta</Text>
                        <View style={styles.imgSetaConteiner}>
                        <Image source={imgSeta} style={styles.imgSeta}></Image>
                        </View>
                </View>
            </TouchableOpacity>

            <View style={styles.Linha}></View>

            <TouchableOpacity>
                <View style={styles.opcoes}>
                        <Text style={styles.txtOpcoes}>Suporte        </Text>
                        <View style={styles.imgSetaConteiner}>
                        <Image source={imgSeta} style={styles.imgSeta}></Image>
                        </View>
                </View>
            </TouchableOpacity>

            <View style={styles.Linha}></View>

            <TouchableOpacity onPress={ () => navigation.navigate("Sair")}>
                <View style={styles.opcoes}>
                        <Text style={styles.txtOpcaoSair}>Sair da conta</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.LinhaMaior}></View>
            
          
        </View>
         )
    }
    
