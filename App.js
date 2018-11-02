import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class App extends React.Component {
  render() {
    let pic = {
      uri:
        "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12193133/German-Shepherd-Puppy-Fetch.jpg"
    };

    return (
      <View style={styles.container}>
        <Text>Hello World!</Text>
        <Text>Another Test</Text>
        <Image source={pic} style={{ width: 193, height: 110 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
