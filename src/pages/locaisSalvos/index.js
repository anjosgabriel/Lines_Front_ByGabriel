import { View, Text, TouchableOpacity } from 'react-native';

export default function LocaisSalvos({navigation}) {
 return (
   <View style={{flex:1, justifyContent:"center",
   alignItems:"center"}}>
    <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
    <Text>Voltar</Text>
    </TouchableOpacity>
   </View>
  );
}