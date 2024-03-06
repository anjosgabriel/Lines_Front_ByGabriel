import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native"
import { Component } from "react";
import styles from "./style";
import Seta from "./../../img/setaVoltar.png";
import imgNoticia1 from "./../../img/noticia1.png"
import imgNoticia2 from "./../../img/noticia2.png"
import imgNoticia3 from "./../../img/noticia3.png"
import imgNoticia4 from "./../../img/noticia4.png"
import { SafeAreaView } from "react-native-safe-area-context";


class Noticia extends Component{
    render() {
        return(
            <View style={styles.container}>
            <SafeAreaView>
            <ScrollView>
                    <View style={styles.divider}></View>

                        <View>

                            <TouchableOpacity style={styles.xNoticia1}>

                                <View style={styles.imgContainer}>

                                    <Image source={imgNoticia1} style={styles.imgNoticias}></Image>

                                </View>

                                <View style={styles.titulo}>

                                    <Text style={styles.txtTitulo1}>
                                    Descarrilamento de trem na {'\n'}linha 9.
                                    </Text>

                                    <Text style={styles.txtSubTitulo}>
                                        Esmeralda é o quarto, desde agosto, nas linhas  {'\n'}da viamobilidade.
                                    </Text>

                                    <Text style={styles.txtHorario}>
                                        Hoje 20:20
                                    </Text>

                                </View>

                            </TouchableOpacity>

                            <View style={styles.divider}></View>

                            <TouchableOpacity style={styles.xNoticia1}>

                                <View style={styles.imgContainer}>

                                    <Image source={imgNoticia2} style={styles.imgNoticias}></Image>

                                </View>

                                <View style={styles.titulo}>

                                    <Text style={styles.txtTitulo1}>
                                        Falha na linha do metrô gera {'\n'}caos.
                                    </Text>

                                    <Text style={styles.txtSubTitulo}>
                                    Usuários do metrô de São Paulo relataram uma {'\n'}falha na linha 4-Amarela na manhã de hoje.
                                    </Text>

                                    <Text style={styles.txtHorario}>
                                        Hoje 18:50
                                    </Text>

                                </View>

                            </TouchableOpacity>


                            <View style={styles.divider}></View>


                            <TouchableOpacity style={styles.xNoticia1}>

                                <View style={styles.imgContainer}>

                                    <Image source={imgNoticia1} style={styles.imgNoticias}></Image>

                                </View>

                                <View style={styles.titulo}>

                                    <Text style={styles.txtTitulo1}>
                                    Greve pode afetar  164.539 {'\n'}passageiros na região.
                                    </Text>

                                    <Text style={styles.txtSubTitulo}>
                                    Número de passageiros afetados se refere às {'\n'}dozes estações na região.
                                    </Text>

                                    <Text style={styles.txtHorario2}>
                                        Hoje 9:45
                                    </Text>

                                </View>

                            </TouchableOpacity>


                            <View style={styles.divider}></View>


                            <TouchableOpacity style={styles.xNoticia1}>

                                <View style={styles.imgContainer}>

                                    <Image source={imgNoticia3} style={styles.imgNoticias}></Image>

                                </View>

                                <View style={styles.titulo}>

                                    <Text style={styles.txtTitulo1}>
                                    Greve acaba afetando {'\n'}linhas da CPTM.
                                    </Text>

                                    <Text style={styles.txtSubTitulo}>
                                    Uma greve de trabalhadores afetou ao menos {'\n'}quatro linhas da CPTM.
                                    </Text>

                                    <Text style={styles.txtHorario2}>
                                        Ontem 18:50
                                    </Text>

                                </View>

                            </TouchableOpacity>


                            <View style={styles.divider}></View>


                            <TouchableOpacity style={styles.xNoticia1}>

                                <View style={styles.imgContainer}>

                                    <Image source={imgNoticia4} style={styles.imgNoticias}></Image>

                                </View>

                                <View style={styles.titulo}>

                                    <Text style={styles.txtTitulo1}>
                                        As linhas 8 e 9 de trens {'\n'}completa 1 ano com mais de {'\n'}130 falhas.
                                    </Text>

                                    <Text style={styles.txtSubTitulo}>
                                        Falhas são quase sete vezes maiores do que as {'\n'}registradas no ultimo ano.
                                    </Text>

                                    <Text style={styles.txtHorario3}>
                                            05/02/2023 18:50
                                    </Text>

                                </View>

                            </TouchableOpacity>


                            <View style={styles.divider}></View>


                            <TouchableOpacity style={styles.xNoticia1}>

                                <View style={styles.imgContainer}>

                                    <Image source={imgNoticia1} style={styles.imgNoticias}></Image>

                                </View>

                                <View style={styles.titulo}>

                                    <Text style={styles.txtTitulo1}>
                                    Descarrilamento de trem na {'\n'}linha 9.
                                    </Text>

                                    <Text style={styles.txtSubTitulo}>
                                        Esmeralda é o quarto, desde agosto, nas linhas  {'\n'}da viamobilidade.
                                    </Text>

                                    <Text style={styles.txtHorario}>
                                        Hoje 20:20
                                    </Text>

                                </View>

                            </TouchableOpacity>


                            <View style={styles.divider}></View>
                            <TouchableOpacity style={styles.xNoticia1}>

                                <View style={styles.imgContainer}>

                                    <Image source={imgNoticia2} style={styles.imgNoticias}></Image>

                                </View>

                                <View style={styles.titulo}>

                                    <Text style={styles.txtTitulo1}>
                                        Falha na linha do metrô gera {'\n'}caos.
                                    </Text>

                                    <Text style={styles.txtSubTitulo}>
                                    Usuários do metrô de São Paulo relataram uma {'\n'}falha na linha 4-Amarela na manhã de hoje.
                                    </Text>

                                    <Text style={styles.txtHorario}>
                                        Hoje 18:50
                                    </Text>

                                </View>

                            </TouchableOpacity>


                            <View style={styles.divider}></View>


                            <TouchableOpacity style={styles.xNoticia1}>

                                <View style={styles.imgContainer}>

                                    <Image source={imgNoticia1} style={styles.imgNoticias}></Image>

                                </View>

                                <View style={styles.titulo}>

                                    <Text style={styles.txtTitulo1}>
                                    Greve pode afetar  164.539 {'\n'}passageiros na região.
                                    </Text>

                                    <Text style={styles.txtSubTitulo}>
                                    Número de passageiros afetados se refere às {'\n'}dozes estações na região.
                                    </Text>

                                    <Text style={styles.txtHorario2}>
                                        Hoje 9:45
                                    </Text>

                                </View>

                            </TouchableOpacity>
                            

                            <View style={styles.divider}></View>


                            <TouchableOpacity style={styles.xNoticia1}>

                                <View style={styles.imgContainer}>

                                    <Image source={imgNoticia3} style={styles.imgNoticias}></Image>

                                </View>

                                <View style={styles.titulo}>

                                    <Text style={styles.txtTitulo1}>
                                    Greve acaba afetando {'\n'}linhas da CPTM.
                                    </Text>

                                    <Text style={styles.txtSubTitulo}>
                                    Uma greve de trabalhadores afetou ao menos {'\n'}quatro linhas da CPTM.
                                    </Text>

                                    <Text style={styles.txtHorario2}>
                                        Ontem 18:50
                                    </Text>

                                </View>

                            </TouchableOpacity>


                            <View style={styles.divider}></View>


                            <TouchableOpacity style={styles.xNoticia1}>

                                <View style={styles.imgContainer}>

                                    <Image source={imgNoticia4} style={styles.imgNoticias}></Image>

                                </View>

                                <View style={styles.titulo}>

                                    <Text style={styles.txtTitulo1}>
                                        As linhas 8 e 9 de trens {'\n'}completa 1 ano com mais de {'\n'}130 falhas.
                                    </Text>

                                    <Text style={styles.txtSubTitulo}>
                                        Falhas são quase sete vezes maiores do que as {'\n'}registradas no ultimo ano.
                                    </Text>

                                    <Text style={styles.txtHorario3}>
                                            05/02/2023 18:50
                                    </Text>

                                </View>


                            </TouchableOpacity>
                            <View style={styles.divider}></View>


                            <TouchableOpacity style={styles.xNoticia1}>

                                <View style={styles.imgContainer}>

                                    <Image source={imgNoticia4} style={styles.imgNoticias}></Image>

                                </View>

                                <View style={styles.titulo}>

                                    <Text style={styles.txtTitulo1}>
                                        As linhas 8 e 9 de trens {'\n'}completa 1 ano com mais de {'\n'}130 falhas.
                                    </Text>

                                    <Text style={styles.txtSubTitulo}>
                                        Falhas são quase sete vezes maiores do que as {'\n'}registradas no ultimo ano.
                                    </Text>

                                    <Text style={styles.txtHorario3}>
                                            05/02/2023 18:50
                                    </Text>

                                </View>


                            </TouchableOpacity>

                        </View>

                    <View style={styles.divider}></View>
                
             </ScrollView>
             </SafeAreaView>
            </View>
        )
    }
}

export default Noticia;