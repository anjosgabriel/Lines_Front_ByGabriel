import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  flexHeader:{
    flexDirection: "row",
    alignItems:"center",
    gap: 90,
    marginTop: 10
},

containerHeader:{
    backgroundColor: "#013EB0",
    width: '100%',
    height: "7%",
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