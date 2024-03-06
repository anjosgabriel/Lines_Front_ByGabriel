import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather, MaterialCommunityIcons, Ionicons, FontAwesome  } from "@expo/vector-icons"
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { DrawerItemList } from '@react-navigation/drawer';
import TabRoutes from './tabRoutes';
import Perfil from "./../pages/perfil";
import LocaisSalvos from "../pages/locaisSalvos";
import Passagens from "../pages/passagens";
import Sair from "../pages/sair";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){
    return(
       
        <Drawer.Navigator
        drawerContent={
          (props) => {
            return (
              <SafeAreaView>
                <View
                style={{
                  height: 120,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderBottomWidth: 0.5,
                  borderColor:"#fff",
                  marginBottom:60
                }}>


                  <Text style={{color:"#fff", fontSize:20, fontWeight:"600"}}>Menu</Text>
                </View>
                <DrawerItemList {...props}></DrawerItemList>
              </SafeAreaView>
            )
          }
        }


        screenOptions={{
          drawerStyle:{
            backgroundColor:"#013eb0"
          },
          headerStyle:{
           backgroundColor:"#013eb0",
          },
            headerTintColor:"#fff",
            headerTitleStyle:{
            fontWeight:"bold"
          },
          drawerActiveTintColor:"#013eb0",
          drawerLabelStyle:{
            color:"#fff",
            fontSize:18
          },
         
        }}


        >
             
            <Drawer.Screen 
                name="home"
                component={TabRoutes}
                options={{
                    drawerIcon:({size}) => <Feather name="home" color={"#FFF"} size={size}/>,
                    drawerLabel: 'Home',
                    title:""
                }}
            />

            <Drawer.Screen
                name="Perfil"
                component={Perfil}
                options={{
                    drawerLabel:"Perfil",
                    title:"",
                    drawerIcon: () => (
                        <Ionicons name="person" size={25} color="white" />
                    )
                }}
                >
         
      </Drawer.Screen>


            < Drawer.Screen 
                name="Passagens"
                component={Passagens}
                options={{
                    drawerIcon:({size}) => <MaterialCommunityIcons name="ticket-confirmation" size={size} color="#fff" />,
                    drawerLabel: 'Passagens',
                    title:""
                }}
            />

            <Drawer.Screen 
            
                name="Locais Salvos"
                component={LocaisSalvos}
                options={{
                    drawerIcon:({size}) => <FontAwesome name="star" size={size} color="#fff" />,
                    drawerLabel: 'Locais salvos',
                    title:"",
                    headerShown:false
                }}
            />

            <Drawer.Screen
                name="Sair"
                options={{
                  drawerLabel:"Sair da Conta",
                  drawerLabelStyle:{
                    color:"#ff302e",
                    fontSize:15,
                    fontWeight:"normal"

                  },
                  title:"",
                  drawerIcon: ({size}) => (
                    <Ionicons name="exit-outline" size={size} color="#ff302e" />     
                )

                    }}
                    component={Sair}
                    >


            </Drawer.Screen>





        </Drawer.Navigator>
    )
}