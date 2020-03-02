import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class Buttons extends Component {
  state = {
    clicked: false
  };
  render() {
    const { handlePress } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.container2}>
          <Text style={styles.text}>Click here for a random joke</Text>
          <TouchableOpacity style={styles.button} onPress={() => handlePress()}>
            <Text style={styles.buttonText}>Random</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container2}>
          <Text style={styles.text}>Click here to customize the name</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container2}>
          <Text style={styles.text}>Never-ending joke list</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>List</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 30
  },
  container2: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 30
  },
  text: {
    paddingRight: 10,
    fontSize: 20
  },
  button: {
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
