import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Joke = props => {
  return (
    <View style={styles.container}>
      <View style={styles.jokeContainer}>
        <Text style={styles.jokeText}>{props.joke}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => props.handleHomePress()}
        >
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  jokeContainer: {
    flex: 1,
    paddingTop: 20
  },
  jokeText: {
    flex: 1,
    fontSize: 20,
    padding: 10
  },
  buttonContainer: {
    flex: 3
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
