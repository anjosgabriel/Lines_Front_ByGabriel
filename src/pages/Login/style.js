import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container:{
        alignItems:"center"
    },
    imagemLogin:{
        marginTop:150
    },

    loginTexto:{
        fontSize:18,
        fontWeight:"300",
        marginTop:25,
        marginBottom:40
    },
    input:{
        backgroundColor: '#e6e6e6',
        width: '75%',
        textAlign: 'center',
        margin: 10,
        padding: 12,
        borderRadius: 10,
        shadowColor: '#000', 
        shadowOffset: { height: 0 }, 
        shadowOpacity: 0.2
        },
    button:{
        backgroundColor:'#013eb0',
        width:250,
        padding:10,
        borderRadius:20,
        marginTop:30,
        marginBottom:20
    },
    cadastroTexto:{
        color:'#678BBA'
    },
    cadastro:{
        color:'#013eb0',
        fontWeight:"400"
    }
    });

export default styles