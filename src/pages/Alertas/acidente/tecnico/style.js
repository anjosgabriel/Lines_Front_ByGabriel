import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        backgroundColor: '#fff'
    },

    flexHeader:{
        flexDirection: "row",
        alignItems:"center",
        gap: 114,
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
        fontSize: 25,
        textAlign: "center",
        color: '#fff',
        fontWeight: "bold"
        
    },

    setaContainer:{
        alignSelf: "flex-start",
       paddingLeft: 20

    },

    seta:{
        width: 30,
        height: 30,
    },

    button:{   
        justifyContent: "center",
        alignItems: "center",
        width: '35%',
        height: 135, 
    },

    buttonPrincipal:{   
        justifyContent: "center",
        alignItems: "center",
        marginTop: '10%',
        width: '35%',
        height: 135, 
    },

    fundo_acidente:{
        backgroundColor: "#ff6868",
        padding: 10, 
        borderRadius: 60
    },

    fundo_opcao:{
        backgroundColor: "#ff6868",
        padding: 5, 
        borderRadius: 20
    },

    imageAlerta: {
        width: 90,
        height: 90, 
    },

    txtAlerta:{
        paddingTop: 6,
        fontWeight: "600",
        fontSize: 30,
        fontWeight: "bold"
    },

    txtOpcao:{
        paddingTop: 6,
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",

    
    },

    flexAlerta:{
        flexDirection: "row",
        marginTop: '10%',
        gap: 20,
    },


    flexButtons:{
        marginTop:"10%",
        flexDirection: "row",
        gap: 18,
        alignItems: "center"
    },

    fundoVoltar:{
        backgroundColor: "grey",
        width: 130,
        height: 45,
        borderRadius: 30,
       justifyContent:"center",
       alignItems: "center"
    },

    txtVoltar:{
        color: "#fff",
        fontSize: 20, 
        fontWeight: "400"
    },

    fundoEnviar:{
        backgroundColor: "blue",
        width: 170,
        height: 55,
        borderRadius: 30,
        justifyContent:"center",
        alignItems: "center"
    },

    
    txtEnviar:{
        color: "#fff",
        fontSize: 22, 
        fontWeight: "bold",
    },

    atualizacoes:{
        width: '70%',
        marginTop: '10%'
    },

    txtAtualizacoes:{
        marginTop: '10%',
        textAlign: "center",
        fontWeight: "300"
    },

})

export default styles