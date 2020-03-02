import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import Joke from "./components/Joke";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  state = {
    singleJoke: false,
    joke: null,
    jokeList: false
  };
  handlePress = () => {
    this.setState({ singleJoke: true });
  };
  handleHomePress = () => {
    this.setState({ singleJoke: false, joke: null, jokeList: false });
  };
  render() {
    const { singleJoke, joke, jokeList } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header />
        </View>
        <View style={styles.body}>
          {singleJoke ? (
            <Joke handleHomePress={this.handleHomePress} />
          ) : (
            <Buttons handlePress={this.handlePress} />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch"
  },
  header: {
    flex: 1
  },
  body: {
    flex: 5
  }
});
