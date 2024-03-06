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
        gap: 98,
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

    
})

export default styles