import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Chuck Norris Jokes</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
    borderBottomColor: "#0494cd",
    borderBottomWidth: 3
  },
  text: {
    color: "#002663",
    fontSize: 30,
    fontWeight: "bold"
  }
});

export default Header;
