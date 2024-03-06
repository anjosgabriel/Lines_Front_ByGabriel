import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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

    titulo:{
        fontSize: 22,
        textAlign: "center",
        fontWeight: "bold",
        marginTop: '10%',
        fontWeight: "bold",
    },

    flexAlerta:{
        flexDirection: "row",
        marginTop: '10%',
        gap: 30
    },


    button:{   
        justifyContent: "center",
        alignItems: "center",
        width: '35%',
        height: 135,
        
    },

    fundo_acidente:{
        backgroundColor: "#ff6868",
        padding: 10, 
        borderRadius: 60
    },

    fundo_eletricidade:{
        backgroundColor: "#ffdd70",
        padding:10, 
        borderRadius: 60
    },

    fundo_movimento:{
        backgroundColor: "#6295f1",
        padding:10, 
        borderRadius: 60
    },

    fundo_obras:{
        backgroundColor: "#ff9a61",
        padding:10, 
        borderRadius: 60
    },

    fundo_lentidao:{
        backgroundColor: "#ffdd70",
        padding:10, 
        borderRadius: 60
    },

    fundo_sos:{
        backgroundColor: "#ff003d",
        padding:10, 
        borderRadius: 60
    },

    imageAlerta: {
        width: 80,
        height: 80, 
    },

    txtAlerta:{
        paddingTop: 6,
        fontWeight: "600",
        fontSize: 20
    },

    txtAlertaSOS:{
        paddingTop: 6,
        fontWeight: "600",
        fontSize: 20,
        fontWeight: "bold"
    },

    atualizacoes:{
        width: '70%',
    },

    txtAtualizacoes:{
        marginTop: '10%',
        textAlign: "center",
        fontWeight: "300"
    },
})

export default styles