import { View, TouchableOpacity, Text } from 'react-native';
import styles from './style';

export default function Sair({navigation}) {
 return (
   <View style={styles.container}>

        <View style={styles.fundo}>

        <Text style={styles.txtInicial}>Você deseja mesmo sair da sua conta?</Text>

        <TouchableOpacity style={styles.btnSair} onPress={ () => navigation.navigate("Inicio")}>

              <Text style={styles.txtSair}>Sair da Conta</Text>

          </TouchableOpacity>

        </View>

   </View>
  );
}