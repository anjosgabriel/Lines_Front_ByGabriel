import React, {Component} from "react";
import { StyleSheet } from "react-native";

const style = StyleSheet.create({

   conteiner:{
    flex:1,
    backgroundColor:"#fff"
   },

   header:{
    backgroundColor:"#013eb0",
    height:"20%",
    marginBottom:50
   },

   headerConteiner:{
    flexDirection:"row"
   },


   imgUserConteiner:{
    marginTop:40,
    marginLeft:30,
    flexDirection:"row"
   },

   imgUser:{
    height:80,
    width:80
   },

   txtOlaConteiner:{
    marginLeft:15,
    marginTop:15
   },

   txtOla:{
    fontSize:20,
    color:"#fff",
    fontWeight:"200"
   },

   txtNome:{
    fontSize:20,
    fontWeight:"400",
    color:"#fff"
   },

   imgEditar:{
    flexDirection:"row",
   },

   imgEdit:{
    width:20,
    height:20,
    marginTop:3,
    marginLeft:7
   },

   Linha:{
    borderColor:"#ebebeb",
    borderWidth:0.5,
    width:"100%"
   },

   LinhaMaior:{
    borderColor:"#ebebeb",
    borderWidth:1.5,
    width:"100%"
   },

   botaoConteiner:{
    flexDirection:"row", 
    justifyContent:"space-around",
    marginBottom:50
   },

   opcoesBotao:{
    width:115, 
    height:115, 
    backgroundColor:"#013eb0",
    borderRadius:10,
    alignItems:"center",
    justifyContent:"center"
   },

   txtBotao:{
    textAlign:"center",
    fontSize:13,
    marginTop:5,
    fontWeight:"300"
   },

   imgBotoes:{
    width:85,
    height:85
   },

   opcoes:{ 
    height:60,
    flexDirection:"row"
   },

   txtOpcoes:{
    marginLeft:25,
    fontSize:15,
    marginTop:20
   },

   imgSetaConteiner:{
    justifyContent:"center",
    marginLeft:265,
   },

   imgSeta:{
    height:15,
    width:15
   },

   txtOpcaoSair:{
    color:"red",
    marginLeft:25,
    marginTop:20,
    fontWeight:"300"
   }

})

export default style