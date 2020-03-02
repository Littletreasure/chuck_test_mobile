import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Joke = props => {
  const onPress = () => {
    props.handleHomePress();
  };
  return (
    <View style={styles.joke}>
      <Text style={styles.jokeText}>This is a joke</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.homeButton} onPress={() => onPress()}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  joke: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  jokeText: {
    flex: 1,
    fontSize: 20,
    padding: 10
  },
  buttonContainer: {
    flex: 4
  },
  homeButton: {
    borderColor: "#046ab8",
    borderWidth: 1,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 10
  },
  buttonText: {
    fontSize: 15,
    color: "#046ab8"
  }
});

export default Joke;
