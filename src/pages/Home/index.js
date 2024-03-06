import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Component } from "react";
import styles from "./style";
import MapView from "react-native-maps";
import { StatusBar } from "expo-status-bar";
import iconeAlerta from "./../../img/iconeAlerta.png"
import menu from "./../../img/menu.png"

class Home extends Component {
  Alertas = () => {
    this.props.navigation.navigate('Alertas')
}

  constructor(props) {
    super(props);
    this.state = {
      region: null,
    };
  }

  async componentDidMount() {
    await navigator.geolocation.getCurrentPosition(
      async ({ coords: { latitude, longitude } }) => {
        this.setState({
          region: {
            latitude,
            longitude,
            latitudeDelta: 0.0922, 
            longitudeDelta: 0.0421, 
          },
        });
        this.map.animateToRegion(this.state.region, 1000);
      },
      () => {},
      {
        timeout: 2000,
        maximumAge: 1000,
      }
    );
  }

  render() {
    const { region } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <MapView
          ref={(map) => {
            this.map = map;
          }}
          style={{ flex: 1}}
          region={region}
          showsUserLocation={true}
          loadingEnabled
          
        />

        <TouchableOpacity onPress={this.Alertas}>
        <Image source={iconeAlerta} style={styles.iconeAlerta}></Image>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;
