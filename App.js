import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import Joke from "./components/Joke";
import JokeList from "./components/JokeList";
import * as api from "./utils/api";
import chuck from "./chuck-norris.jpg";

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
  handleListPress = () => {
    this.setState({
      singleJoke: false,
      joke: null,
      jokeList: true
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
          {jokeList ? (
            <JokeList handleHomePress={this.handleHomePress} />
          ) : singleJoke ? (
            <View style={styles.container2}>
              <Joke handleHomePress={this.handleHomePress} joke={joke} />
            </View>
          ) : (
            <View style={styles.container2}>
              <Buttons
                handlePress={this.handlePress}
                handleSearchPress={this.handleSearchPress}
                handleHomePress={this.handleHomePress}
                handleListPress={this.handleListPress}
              />
            </View>
          )}

          {jokeList ? null : (
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={chuck} alt="chuck" />
            </View>
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
    alignItems: "stretch",
    marginBottom: 10
  },
  header: {
    flex: 1
  },
  body: {
    flex: 6
  },
  container2: {
    flex: 2
  },

  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    height: 150,
    width: 150
  }
});
