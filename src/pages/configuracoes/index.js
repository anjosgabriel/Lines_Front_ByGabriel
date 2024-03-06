import React, { useState } from 'react';
import { useNavigation} from "@react-navigation/native";
import { View, Text, Switch, TouchableOpacity, Image} from 'react-native';
import styles from "./style";
import seta from "./../../img/setaVoltar.png";

const ConfigScreen = () => {
  const [notificacoes, setNotificacoes] = useState(true);
  const [economia, setEconomia] = useState(false);
  const [lembrete, setLembrete] = useState(false);

  const handleSwitchChange = (configName, value) => {
    switch (configName) {
      case 'Notificacoes':
        setNotificacoes(value);
        // Lógica adicional se necessário
        break;
      case 'Tema':
        setTema(value);
        // Lógica adicional se necessário
        break;
      case 'Geral':
        setGeral(value);
        // Lógica adicional se necessário
        break;
      case 'Economia':
        setEconomia(value);
        // Lógica adicional se necessário
        break;
      case 'Privacidade':
        setPrivacidade(value);
        // Lógica adicional se necessário
        break;
      case 'Sobre':
        setSobre(value);
        // Lógica adicional se necessário
        break;
      case 'Lembrete':
        setLembrete(value);
        // Lógica adicional se necessário
        break;
        case 'Sair':
        setLembrete(value);
        // Lógica adicional se necessário
        break;
      // Adicione mais casos conforme necessário para outras configurações
      default:
        break;
    }
  };
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
                    <View style={styles.flexHeader}>
                        <TouchableOpacity style={styles.setaContainer} onPress={ () => navigation.navigate("Perfil")}>
                            <Image source={seta}  resizeMode="contain"  style={styles.seta}/>
                        </TouchableOpacity>

                        <Text style={styles.title}>Configurações</Text>
                    </View>
                </View>
      <View style={styles.ItemContainer}>

 
      <View style={styles.settingItem}>
        <Text style={styles.txtItem}>Notificações</Text>
        <Switch value={notificacoes} onValueChange={(value) => handleSwitchChange('Notificacoes', value)} />
      </View>

      <View style={styles.linha}></View>

      <View style={styles.settingItem}>
        <Text style={styles.txtItem}>Economia</Text>
        <Switch value={economia} onValueChange={(value) => handleSwitchChange('Economia', value)} />
      </View> 

      <View style={styles.linha}></View>

      <View style={styles.settingItem}>
        <Text style={styles.txtItem}>Lembrete de alerta</Text>
        <Switch value={lembrete} onValueChange={(value) => handleSwitchChange('Lembrete', value)} />
      </View>

      <View style={styles.linha}></View>

      <TouchableOpacity>
      <View style={styles.Item}>
        <Text style={styles.txtItem}>Geral</Text>
      </View>
      </TouchableOpacity>

      <View style={styles.linha}></View>

      <TouchableOpacity>
      <View style={styles.Item}>
        <Text style={styles.txtItem}>Som e Acessibilidade </Text>
      </View>
      </TouchableOpacity>

      <View style={styles.linha}></View>

      <TouchableOpacity>
      <View style={styles.Item}>
        <Text style={styles.txtItem}>Tema</Text>
      </View>
      </TouchableOpacity>

      <View style={styles.linha}></View>

      <TouchableOpacity>
      <View style={styles.Item}>
        <Text style={styles.txtItem}>Privacidade</Text>
      </View>
      </TouchableOpacity>

      <View style={styles.linha}></View>

      <TouchableOpacity>
      <View style={styles.Item}>
        <Text style={styles.txtItem}>Sobre</Text>
      </View>
      </TouchableOpacity>
      <View style={styles.linha}></View>

      <TouchableOpacity>
      <View style={styles.Item}>
        <Text style={{color:"red"}}>Sair</Text>
      </View>
      </TouchableOpacity>
      </View>
    </View>
  );
};


export default ConfigScreen;
