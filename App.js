import React from "react";
import Expo, {Constants} from "expo";
import {Platform, StyleSheet, View} from "react-native";
import firebase from "firebase";
import App from "./src/App";
import firebase_config from "./src/config/firebase";

export default class AppInit extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  async componentWillMount() {
    // Put your firebase configuration here
    firebase.initializeApp(firebase_config);

    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });

    this.setState({isReady: true});
  }

  renderStatusBar() {
    if (Platform.OS === 'android')
      return <View style={styles.statusBar}/>;
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <App statusBar={this.renderStatusBar()}/>
    );
  }
}

// Setting Android StatusBar color
const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "#332fc2",
    height: Constants.statusBarHeight,
  }
});
