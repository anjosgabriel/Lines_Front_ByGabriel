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
        width: '50%',
        height: 135, 
        marginBottom: '5%'
    },

    fundo_acidente:{
        backgroundColor: "#ff7373",
        padding: 10, 
        borderRadius: 60
    },

    fundo_opcao:{
        backgroundColor: "#ff7373",
        padding: 2, 
        borderRadius: 20
    },

    imageAlerta: {
        width: 85,
        height: 85, 
    },

    txtAlerta:{
        paddingTop: 6,
        fontWeight: "600",
        fontSize: 24,
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

    detalhes:{
        //borderWidth:1,
        paddingHorizontal:30,
        paddingVertical:15,
    },

    icon:{
        width:35,
        height:35
    },

    addFoto:{
        flexDirection: "row",
        alignItems:"center",
        alignSelf:"center",
        gap: 14,
        //borderWidth:1,
        borderRadius:15,
        paddingVertical:10,
        paddingHorizontal:75,
        margin:10,
        backgroundColor:"#d9d9d9",
    },
    txtAddFoto:{
        color:"#6d6d6d",
        fontWeight:"bold"
    },

    /*addComentario:{
        flexDirection: "row",
        alignItems:"center",
        gap: 10,
        borderWidth:1,
        paddingVertical:15,
        paddingHorizontal:15,
        margin:10,
        borderBottomWidth: 1,
        marginBottom:12,
        fontSize:16,
        minHeight: 40,
        minWidth: 200,
    },*/

    commentInput: {
        borderColor: 'gray',
        //borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 8,
        minHeight: 60, // Altura mínima da caixa de texto
        width:300,
        height:100,
        backgroundColor:"#d9d9d9",
        alignSelf:"center",
        textAlign:"center"
      },

    characterCount: {
        textAlign: 'right',
        color: 'gray',
        marginTop: 5,
        fontSize:12,
        marginRight:10
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
        alignItems: "center",
        backgroundColor:"#013eb0"
    },

    txtEnviar:{
        color: "#fff",
        fontSize: 22, 
        fontWeight: "bold",
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