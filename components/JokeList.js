import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList
} from "react-native";
import * as api from "../utils/api";

export default class JokeList extends Component {
  state = {
    jokes: [],
    isLoading: false,
    loadingMore: false
  };
  fetchJokeList = () => {
    api.getJokeList().then(jokes => {
      this.setState({
        jokes: [...this.state.jokes, ...jokes],
        isLoading: false
      });
    });
  };
  componentDidMount() {
    this.fetchJokeList();
  }
  handleLoadMore = () => {
    this.setState({ isLoading: true }, () => {
      this.fetchJokeList();
    });
  };
  renderFooter = () => {
    if (!this.state.isLoading) return null;
    return <Text style={styles.footerText}>Loading...</Text>;
  };
  render() {
    const { handleHomePress } = this.props;
    const { jokes } = this.state;
    const backgroundColors = ["#0494cd", "white"];
    const textColors = ["white", "#046ab8"];
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.homeButton}
            onPress={() => handleHomePress()}
          >
            <Text style={styles.buttonText}>Home</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.jokeListContainer}>
          <FlatList
            data={jokes}
            keyExtractor={(item, index) => index}
            renderItem={({ item, index }) => (
              <View
                style={{
                  backgroundColor:
                    backgroundColors[index % backgroundColors.length],
                  padding: 5,
                  width: "100%"
                }}
              >
                <Text
                  key={item.id + Math.random()}
                  style={{ color: textColors[index % textColors.length] }}
                >
                  {item.joke}
                </Text>
              </View>
            )}
            onEndReached={this.handleLoadMore}
            onEndReachedThreshold={0.1}
            initialNumToRender={10}
            ListFooterComponent={this.renderFooter}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  buttonContainer: {
    flex: 1,
    paddingTop: 30
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
  },
  jokeListContainer: {
    flex: 14,
    padding: 20,
    marginBottom: 10
  },
  footerText: {
    paddingTop: 10,
    color: "red",
    alignSelf: "center"
  }
});
