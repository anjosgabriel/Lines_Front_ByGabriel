import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
      flex: 1,
    },
    ItemContainer: {
     marginTop:50,
    },

    flexHeader:{
      flexDirection: "row",
      alignItems:"center",
      gap: 60,
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

    settingItem:  {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
      marginLeft:15,
      marginRight:15,
      marginVertical:18
    }, 

    Item:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 16,
      marginLeft:15,
      marginVertical:25,
      marginRight:15

    },
     
    txtItem:{
        fontSize: 15,
        fontWeight: "300"
    },

    linha:{borderRadius: 1,
      borderWidth: 0.5,
      borderColor: "#d8d8d8",
      width: "100%"
    }
    
  });

  export default style