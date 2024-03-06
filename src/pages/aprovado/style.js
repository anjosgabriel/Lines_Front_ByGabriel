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

setaContainer:{
  display: 'flex',
  paddingLeft: 86,
},

seta:{
  width: 30,
  height: 30,
},

ok: {
    marginTop: 140,
    marginLeft: 80,
    height: 60,
},

subtitle:{
  marginTop: 15,
  fontSize: 25,
  fontWeight: 'bold',
},

corpo: {
  marginTop: 25,
  marginLeft: 30,
  marginRight: 30,
},

texto: {
  fontSize: 20,
  textAlign:"center"
},

botaoVerPassagem: {
  backgroundColor: "#013EB0",
  paddingTop: 15,
  paddingBottom: 15,
  paddingLeft: 30,
  paddingRight: 30,
  alignItems: "center",
  marginTop: 35,
  borderRadius: 10
},

textoBotaoVerPassagem: {
  color: "#fff",
  fontWeight: 'bold',
  fontSize: 16,
},

});

export default styles;