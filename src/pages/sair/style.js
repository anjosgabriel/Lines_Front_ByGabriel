import { StyleSheet } from "react-native";

const style = StyleSheet.create( {
    container: {
        backgroundColor: "#fff",
        flex: 1,
        justifyContent: "center",
    },

    txtInicial: {
        textAlign: "center",
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
 
    },

    fundo: {
        backgroundColor: "#013eb0",
        margin: 60,
        padding: 50,
        borderRadius: 30
    },

    btnSair: {
        textAlign: "center", 
        marginTop: 50, 
        backgroundColor: "#aa1335",
        width: "100%", 
        borderRadius: 100, 
        paddingVertical: 15,
    },

    txtSair: {
        textAlign: 'center', 
        color: '#fff', 
        fontSize: 18, 
        fontWeight: 'bold'

    }


})

export default style;
