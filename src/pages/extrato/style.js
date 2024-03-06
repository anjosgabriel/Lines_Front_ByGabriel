import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

title:{
  display: 'flex',
  fontSize: 20,
  fontWeight: '400',
  gap: 0,
  color: '#fff',
  textAlign:"center"
},

setaContainer:{
  display: 'flex',
  paddingLeft: 10,
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

validadas:{
  marginTop: 35,
},

data:{
  fontSize: 15,
  fontWeight: 'bold',
  textAlign: 'center',
},

qrcode: {
  borderWidth: 12,
  borderColor: "#F2F2F2",
  borderRadius: 10,
  padding: 10,
  marginTop: 15,
},

image: {
  width: 150,
  height: 150,
},

restante: {
  padding: 12,
  width: 295,
  backgroundColor: "#F2F2F2",
  borderRadius: 10,
},

restantedenovo: {
  padding: 12,
  width: 295,
  backgroundColor: "#F2F2F2",
  borderRadius: 10,
},

resto: {
  marginTop: 5,
  fontWeight: 'bold',
},

resto2: {
  marginLeft: 180,  
  marginTop: -17, 
  fontWeight: 'bold',   
},

});

export default styles;