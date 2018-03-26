import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  Text,
  TextInput,
  View
} from 'react-native';

export default class AppWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      forecast: {
        main: '_',
        description: '_',
        temp: 0
      }
    };
  }

  getWeather= () => {
      let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + this.state.city + '&appid=f2e294abc15c9b736cbda67d6b743483&&units=metric';
      fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          forecast: {
            main: responseJson.weather[0].main,
            description: responseJson.weather[0].description,
            temp: responseJson.main.temp
          }
        });
      }
    );
  }

  render() {
    return (
      <View style={styles.containerMain}>
        <View style={styles.statusbar} />
          <View style={styles.bar}>
            <Text style={styles.center}>Prakiraan Cuaca</Text>
          </View>
          <View style={styles.box1}>
            <Text style={styles.texthead}>Masukkan Nama Kota</Text>
            <TextInput style={styles.input}
            onChangeText={(city) => this.setState({ city })} />
            <Button
              onPress={() => this.getWeather()}
              title="Find"
              color="#673AB7"
              accessibilityLabel="Klik Untuk Melihat"
            />
          </View>
          <View style={styles.box3}>
            <Text style={styles.text}>
              City= {this.state.city}{'\n'}
              Main= {this.state.forecast.main}{'\n'}
              Temp= {this.state.forecast.temp}{'\n'}
              Description= {this.state.forecast.description}
            </Text>
          </View>

          <View style={styles.bar}>
            <Text style={styles.textfoot}>Copyright@kusuma wardana</Text>
          </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#EEEEEE',
    flex: 1
  },
  statusbar: {
    backgroundColor: '#512DA8',
    height: 24
  },
  bar: {
    padding: 16,
    backgroundColor: '#673AB7',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box1: {
    flex: 2,
    margin: 20,
    padding: 10,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  box3: {
    flex: 3,
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 10
  },
  text: {
    color: 'black',
    fontSize: 20,
    textAlign: 'left',
    justifyContent: 'space-around',
    marginTop: 15,
    marginLeft: 15
  },
  input: {
    height: 40,
    width: 200,
    textAlign: 'center'
  },
  center: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
    justifyContent: 'center',
  },
  texthead: {
    color: 'purple',
    fontSize: 18,
    textAlign: 'center',
    justifyContent: 'center'
  },
  textfoot:{
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    justifyContent: 'center',
  }

});
