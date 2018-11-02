import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

class Greeting extends Component {
  render() {
    return (
      <Text>
        Hello, my name is {this.props.name} and I am {this.props.age} years old!
      </Text>
    );
  }
}
class App extends Component {
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
        <Greeting name="Timmy" age="25" />
        <Greeting name="Samuel" age="11" />
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

export default App;
