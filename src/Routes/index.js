import { NavigationContainer } from "@react-navigation/native";
import StackRoutes from "./stackRoutes";
import { StatusBar } from "react-native";


export default function App(){
    return(
        <NavigationContainer>
        <StackRoutes></StackRoutes>
        </NavigationContainer>
    )
}