import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#fff"
        

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

    divider: {
        height: 1, 
        backgroundColor: "#e2e2e2",
        width: "100%",
        marginVertical: 10,
        marginTop: 20,
    },

    xNoticia1: {
        flexDirection: "row",
        
    },

    imgContainer: {
        marginLeft: 15,     
        marginTop: 10,     

    },

    imgNoticias: {
        width: 100,
        height: 100,
        alignSelf: "flex-start",
    },

    titulo: {
        marginLeft: 15,
        marginTop: 5,
    },

    txtTitulo1: {
        fontSize: 18,
        fontWeight: "bold"

    },

    txtSubTitulo: {
        fontSize: 12,
    },

    txtHorario: {
        fontSize: 12,
        color: "gray",
        alignSelf: "flex-end",
        marginRight: 6,
        marginTop: 10,
    },

    txtHorario2 : {
        fontSize: 12,
        color: "gray",
        alignSelf: "flex-end",
        marginRight: 0,
        marginTop: 10,
    },

    txtHorario3 : {
        fontSize: 12,
        color: "gray",
        alignSelf: "flex-end",
        marginRight: 6
    }
  
})

export default style;