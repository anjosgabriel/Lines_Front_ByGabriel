import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: "#fff", 
  alignItems: 'center'
},

flexHeader:{
  textAlign:"center",
  marginTop:"15%",
},

containerHeader:{
  backgroundColor: "#013EB0",
  width: '100%',
  height: "15%",
  borderBottomLeftRadius: 15,
  borderBottomRightRadius: 15
},

title:{
  fontSize: 30,
  textAlign: "center",
  color: '#fff',
  fontWeight:"400"
},


subtitulo: {
  backgroundColor: "#013EB0",
  marginTop: 35,
  paddingRight: 140,
  paddingLeft: 140,
  padding: 20,
  borderRadius: 10,
  alignItems: "center",
},

tituloPassagens: {
  color: "white",
  fontSize: 18,
},

conteudo: {
  textAlign: 'left',
  backgroundColor: "#F2F2F2", 
  padding: 10,
  borderRadius: 10,
  paddingRight: 170,
  paddingLeft: 18,
},

esquerda: {
  flexDirection: 'column',
  justifyContent: 'flex-start',
  paddingBottom: 50,
},

total: {
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-end', 
  marginRight: 115, 
},

direita: {
  flexDirection: 'collum',
  justifyContent: 'flex-start',
  alignItems: 'flex-end', 
  marginLeft: 115, 
},

tipoTransporte: {
  fontWeight: 'bold',
  display: 'flex',
  fontSize: 16,
  marginBottom: 5,
  textAlign: 'left',
},

valorPassagem: {
  display: 'flex',
  fontSize: 14,
  textAlign: 'left',
  color: "#555", 
  marginBottom: 10,
},

tituloTotal: {
  display: 'flex',
  fontSize: 16,
  marginRight: 24, 
},

valorTotal: {
  display: 'flex',
  fontWeight: 'bold',
  fontSize: 16,
  textAlign: 'right', 
  marginRight: -205,
  marginTop: -18, 
},

botaoFinalizar: {
  backgroundColor: "rgba(255, 165, 0, 0.8)", 
  padding: 30,
  paddingTop: 15,
  paddingBottom: 15,
  paddingLeft: 50,
  paddingRight: 50,
  alignItems: "center",
  marginTop: 45,
  borderRadius: 10
},

textoBotaoFinalizar: {
  color: "black",
  fontWeight: 'bold',
  fontSize: 16,
},

botaoSoma: {
  backgroundColor:"#fff",
  padding: 7,
  borderRadius: 8,
  marginTop: -101,
  marginRight: -100,
},
textoBotaoSoma: {
  color: '#000',
},
botaoSubtracao: {
  backgroundColor:"#fff",
  padding: 7,
  paddinB:10,
  marginTop: -28,
  borderRadius: 8,
  marginRight: -45
},
textoBotaoSubtracao: {
  color: '#000',
},
quantidade: {
  fontSize: 18,
  fontWeight: 'bold',
  marginTop: -25,
  marginRight: -69
},

botaoExtrato: {
  flex: 1,
  flexDirection: 'row', 
  justifyContent: 'center',
  alignItems: 'center',
},
button1: {
  borderWidth: 1,
  borderColor: '#013EB0',
  backgroundColor: 'white',
  padding: 10,
  borderRadius: 5,
  marginRight: 10, 
  marginTop: 90,
},

buttonText1: {
  color: '#013EB0',
  fontSize: 15,
},

button2: {
  borderWidth: 1,
  borderColor: '#013EB0',
  backgroundColor: 'white',
  padding: 10,
  borderRadius: 5,
  marginTop: 90,
  marginLeft: 10, 
},
buttonText2: {
  color: '#013EB0',
  fontSize: 15,
},

});

export default styles;