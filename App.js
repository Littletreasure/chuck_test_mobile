import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import Joke from "./components/Joke";
import * as api from "./utils/api";

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
    api.getJoke().then(joke => {
      this.setState({ joke, singleJoke: true });
    });
  };
  handleHomePress = () => {
    this.setState({
      singleJoke: false,
      joke: null,
      jokeList: false
    });
  };
  handleSearchPress = (firstName, lastName) => {
    api.getJoke(firstName, lastName).then(joke => {
      this.setState({ joke, singleJoke: true, jokeList: false });
    });
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
            <Joke handleHomePress={this.handleHomePress} joke={joke} />
          ) : (
            <Buttons
              handlePress={this.handlePress}
              handleSearchPress={this.handleSearchPress}
              handleHomePress={this.handleHomePress}
            />
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
