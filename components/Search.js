import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard
} from "react-native";

export default class Search extends Component {
  state = {
    firstName: "",
    lastName: "",
    error: false
  };
  handleChange1 = text => {
    this.setState({ firstName: text, error: false });
  };
  handleChange2 = text => {
    this.setState({ lastName: text, error: false });
  };
  onSearchPress = () => {
    const { firstName, lastName } = this.state;
    const regex = /^[A-Za-z]+$/;
    if (
      firstName.length === 0 ||
      lastName.length === 0 ||
      !regex.test(firstName) ||
      !regex.test(lastName)
    ) {
      this.setState({ error: true });
      Keyboard.dismiss();
    } else {
      this.setState({ error: false });
      this.props.handleSearchPress(firstName, lastName);
    }
  };
  render() {
    const { firstName, lastName, error } = this.state;
    const { onPressHome } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder="First name"
            placeholderTextColor="grey"
            autoCapitalize="none"
            onChangeText={this.handleChange1}
            value={firstName}
          />
          <TextInput
            style={styles.input}
            placeholder="Last name"
            placeholderTextColor="grey"
            autoCapitalize="none"
            onChangeText={this.handleChange2}
            value={lastName}
          />
          <TouchableOpacity
            style={styles.searchButton}
            onPress={this.onSearchPress}
          >
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={onPressHome}>
            <Text style={styles.buttonText}>Home</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.errorContainer}>
          {error ? (
            <Text style={styles.errorText}>
              Both fields must be completed, with letters only
            </Text>
          ) : null}
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
    justifyContent: "flex-start"
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start"
  },
  searchButton: {
    borderColor: "#046ab8",
    borderWidth: 1,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 10
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    height: 25,
    width: 100,
    paddingLeft: 10,
    color: "black",
    marginRight: 10
  },
  buttonContainer: {
    flex: 1
  },
  button: {
    borderColor: "#046ab8",
    borderWidth: 1,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 10,
    marginTop: 30
  },
  buttonText: {
    fontSize: 15,
    color: "#046ab8"
  },
  errorContainer: {
    flex: 3
  },
  errorText: {
    fontSize: 20,
    color: "red",
    paddingRight: 20,
    paddingLeft: 20,
    textAlign: "center"
  }
});
