import React from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Platform,
  Text,
  View
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./HomeScreen"



const Login = () => {
  return (
      <View style={styles.container}>
          <Text style={styles.text}>
              you in !!!
          </Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'stretch'
  },
  text: {
      fontSize: 24,
      marginBottom: 18
  }
});

const SimpleApp = createAppContainer(
  createStackNavigator({
    Home: {
      screen: HomeScreen,
      path: 'home',
    },
    Login: {
      screen: Login,
      path: 'login',
    },
  })
);
const prefix = 'nicapp://';

function App() {
    return (
      <SimpleApp uriPrefix={prefix} />
    );
}


export default App;