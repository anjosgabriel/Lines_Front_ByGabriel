import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container:{
        alignItems:"center"
    },
    
    imagemCadastro:{
        marginTop:150
    },

    tituCadastro:{
        fontSize:50,
        color: '#013eb0',
        fontWeight:"bold",
        marginTop:122,
        marginBottom:50,
    },

    cadastroTexto:{
        fontSize:18,
        fontWeight:"300",
        marginTop:25,
        marginBottom:40
    },
    
    inputNome:{
        backgroundColor: '#e6e6e6',
        width: '75%',
        textAlign: 'center',
        margin: 10,
        padding: 12,
        borderRadius: 10,
        shadowColor: '#000', 
        shadowOffset: { height: 0 }, 
        shadowOpacity: 0.3
        },

    inputEmail:{
        backgroundColor: '#e6e6e6',
        width: '75%',
        textAlign: 'center',
        margin: 10,
        padding: 12,
        borderRadius: 10,
        shadowColor: '#000', 
        shadowOffset: { height: 0 }, 
        shadowOpacity: 0.3
        },

    inputSenha:{
        backgroundColor: '#e6e6e6',
        width: '75%',
        textAlign: 'center',
        margin: 10,
        padding: 12,
        borderRadius: 10,
        shadowColor: '#000', 
        shadowOffset: { height: 0 }, 
        shadowOpacity: 0.3
        },

    inputConfirmar:{
        backgroundColor: '#e6e6e6',
        width: '75%',
        textAlign: 'center',
        margin: 10,
        padding: 12,
        borderRadius: 10,
        shadowColor: '#000', 
        shadowOffset: { height: 0 }, 
        shadowOpacity: 0.3
        },
    
    button:{
        backgroundColor:'#013eb0',
        width:115,
        padding:10,
        borderRadius:20,
        marginTop:30,
        marginBottom:20
    },

    loginTexto:{
        marginTop: 10,
        color:'#A9A9A9',
        fontSize: 18,
    },

    login:{
        color:'#000000',
        fontWeight:"400",
        textDecorationLine: "underline",
    }

});

export default styles