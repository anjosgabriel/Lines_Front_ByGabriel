import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container:{
        alignItems:"center"
    },

    //Botões
    button: {
        backgroundColor: '#013eb0',
        padding: 13,
        borderRadius: 20,
        width:'75%' 
      },

      //Text dos botões
      buttonText: {
        color: 'white', 
        textAlign: 'center',
        fontSize:18
      },

    //imagem da home
      imagemHome:{
        marginTop:100,
        marginBottom:15
      },

      //Texto de bem vindo
      bemVindo:{
        fontSize:25,
        fontWeight:"500",
        marginBottom:20
        
      //Palavra Liner
      },
      liner:{
        color:'#f29f05'
      }
    });

export default styles