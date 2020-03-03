import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Search from "./Search";

export default class Buttons extends Component {
  state = {
    clicked: false
  };
  onPressSearch = () => {
    this.setState({ clicked: true });
  };
  onPressHome = () => {
    this.setState({ clicked: false });
    this.props.handleHomePress();
  };
  onPressList = () => {
    this.setState({ clicked: false });
    this.props.handleListPress();
  };
  render() {
    const { handlePress, handleSearchPress } = this.props;
    return (
      <View style={styles.container}>
        {!this.state.clicked ? (
          <View>
            <View style={styles.container2}>
              <Text style={styles.text}>Click here for a random joke</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handlePress()}
              >
                <Text style={styles.buttonText}>Random</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.container2}>
              <Text style={styles.text}>Click here to customize the name</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.onPressSearch()}
              >
                <Text style={styles.buttonText}>Search</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.container2}>
              <Text style={styles.text}>Never-ending joke list</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.onPressList()}
              >
                <Text style={styles.buttonText}>List</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View>
            <Search
              onPressHome={this.onPressHome}
              handleSearchPress={handleSearchPress}
            />
          </View>
        )}
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
