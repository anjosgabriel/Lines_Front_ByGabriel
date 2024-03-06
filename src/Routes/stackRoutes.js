import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Cadastro from '../pages/Cadastro/Cadastro';
import { Login } from "../pages/Login/Login";
import DrawerRoutes from "./drawerRoutes";
import Inicio from "../pages/inicio";
import Configuracoes from "../pages/configuracoes";
import Pagamento from "../pages/pagamento";
import Validas from "../pages/valida";
import Extrato from "../pages/extrato";
import Aprovado from "../pages/aprovado"
import SuaPassagem from "../pages/suaPassagem";
import LocaisSalvos from "../pages/locaisSalvos";

import Alertas  from "../pages/Alertas/alerta"
import Acidente from '../pages/Alertas/acidente/index'
import Descarrilamento from '../pages/Alertas/acidente/descarrilamento/index'
import Colisao from '../pages/Alertas/acidente/colisao/index'
import Tecnico from '../pages/Alertas/acidente/tecnico/index'
import Climatico from '../pages/Alertas/acidente/climatico/index'
import Eletrica from '../pages/Alertas/eletrica/index'
import Obras from '../pages/Alertas/obras/index'
import Lentidao from '../pages/Alertas/lentidao/index'
import Movimento from '../pages/Alertas/movimento/index'
import SOS from '../pages/Alertas/SOS/index'

const Stack = createNativeStackNavigator();

export default function StackRoutes(){
    return(
        <Stack.Navigator screenOptions={{
            
            title:'',
            headerStyle: {
            backgroundColor: '#013eb0',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold',
            },
          }}>
            <Stack.Screen 
                name="Inicio"
                component={Inicio}
            />

        <Stack.Screen 
                name="Cadastro"
                component={Cadastro}
                options={{
                    headerShown:false
                }}
            />

        <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown:false
                }}
        />

        <Stack.Screen 
                name="Home"
                component={DrawerRoutes}
                options={{
                    headerShown:false
                }}
            />

        <Stack.Screen
                name="Configuracoes"
                component={Configuracoes}
                options={{
                    headerShown:false
                }}
        />

        <Stack.Screen 
                name="Pagamento"
                component={Pagamento}
                options={{headerShown:false}}

            />


        <Stack.Screen 
                name="Validas"
                component={Validas}
                options={{headerShown:false}}
            />

        <Stack.Screen 
                name="Extrato"
                component={Extrato}
                options={{headerShown:false}}
            />
            
        <Stack.Screen 
                name="Aprovado"
                component={Aprovado}
                options={{headerShown:false}}
            />

        <Stack.Screen 
                name="Sua Passagem"
                component={SuaPassagem}
                options={{headerShown:false}}
            />

        <Stack.Screen 
                name="LocaisSalvos"
                component={LocaisSalvos}
                options={{headerShown:false}}
            />

            
        <Stack.Screen name="Alertas" component={Alertas} options={{headerShown:false}}/>
        <Stack.Screen name="Movimento" component={Movimento} options={{headerShown:false}}/>
        <Stack.Screen name="Acidente" component={Acidente} options={{headerShown:false}}/>
        <Stack.Screen name="Descarrilamento" component={Descarrilamento} options={{headerShown:false}}/>
        <Stack.Screen name="Colisao" component={Colisao} options={{headerShown:false}}/>
        <Stack.Screen name="Climatico" component={Climatico} options={{headerShown:false}}/>
        <Stack.Screen name="Tecnico" component={Tecnico} options={{headerShown:false}}/>
        <Stack.Screen name="Eletrica" component={Eletrica} options={{headerShown:false}}/>
        <Stack.Screen name="Obras" component={Obras} options={{headerShown:false}}/>
        <Stack.Screen name="Lentidao" component={Lentidao} options={{headerShown:false}}/>
        <Stack.Screen name="SOS" component={SOS} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}