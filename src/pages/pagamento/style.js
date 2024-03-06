import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center"
  },

  flexHeader:{
    flexDirection: "row",
    alignItems:"center",
    gap: 80,
    marginTop: 10
},

containerHeader:{
    backgroundColor: "#013EB0",
    width: '100%',
    height: "15%",
    paddingTop: '15%',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15

},

title:{
    fontSize: 30,
    textAlign: "center",
    color: '#fff'

},


setaContainer:{
    alignSelf: "flex-start",
   paddingLeft: 20

},

seta:{
    width: 30,
    height: 30,
},
subtitulo:{
  marginTop: 30,
},

subtitle:{
  fontSize: 25,
  fontWeight: 'bold',
},

pagamentos:{
  marginTop: 40,
},

botao1:{
  borderWidth: 0.1,
  backgroundColor: "#e7e7e7",
  borderRadius: 10,
  height: 50,
},

cartao: {
  marginTop: 5,
  height: 35,
  marginRight: 25,
},

textoBotao1:{
  marginTop: -32,
  marginLeft: 75,
  marginRight: 25,
  fontWeight: 'bold',
},

subtextoBotao1:{
  fontSize: 12,
  marginTop: 1,
  marginLeft: 75,
  marginRight: 45,
},

botao2:{
  marginTop: 15,
  borderWidth: 0.1,
  backgroundColor: "#e7e7e7",
  borderRadius: 10,
  height: 50,
},

pix: {
  marginTop: 5,
  height: 35,
  marginRight: 25,
},

textoBotao2:{
  marginTop: -24,
  textAlign: 'left',
  marginLeft: 76,
  fontWeight: 'bold',
},

botao3:{
  marginTop: 15,
  borderWidth: 0.1,
  backgroundColor: "#e7e7e7",
  borderRadius: 10,
  height: 50,
  
},

google: {
  marginTop: 5,
  height: 35,
  marginRight: 25,
},

textoBotao3:{
  marginTop: -25,
  textAlign: 'center',
  marginRight: 40,
  fontWeight: 'bold',
},

botao4:{
  marginTop: 25,
  borderWidth: 0.1,
  backgroundColor: "#013EB0",
  borderRadius: 10,
  width: 260,
  height: 50,
  alignSelf:"center"
},

textoBotao4:{
  marginTop: 15,
  textAlign: 'center',
  fontWeight: 'bold',
  color: "#fff",
},

buttonHovered: {
  backgroundColor: "#013EB0",
  color: "fff",
},

txtbuttonHovered: {
  color: "#fff",
},

botaoFinalizar: {
  backgroundColor: "rgba(255, 165, 0, 0.8)", 
  padding: 40,
  paddingTop: 15,
  paddingBottom: 15,
  width: 220,
  alignItems:"center",
  marginTop: 124,
  borderRadius: 10,
  alignSelf:"center"
},

textoBotaoFinalizar: {
  color: "black",
  fontWeight: 'bold',
  fontSize: 16,
},

});

export default styles;