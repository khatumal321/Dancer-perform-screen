import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
 
import SwitchToggle from "react-native-switch-toggle";
 
export default class ToogleBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchOn1: false,
      switchOn2: false,
      switchOn4: false
    };
  }
 
  getButtonText() {
    return this.state.switchOn4 ? "ON" : "OFF";
  }
 
  getRightText() {
    return this.state.switchOn4 ? "" : "OFF";
  }
 
  getLeftText() {
    return this.state.switchOn4 ? "ON" : "";
  }
 
  render() {
    return (
      <View style={styles.container}>
        <SwitchToggle
          buttonText={this.getButtonText()}
          backTextRight={this.getRightText()}
          backTextLeft={this.getLeftText()}
          type={1}
          buttonStyle={{
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            color:"white"
          }}
          rightContainerStyle={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
          leftContainerStyle={{
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-start"
          }}
          buttonTextStyle={{ fontSize: 10,color:"#252b83" }}
          textRightStyle={{ fontSize: 15 }}
          textLeftStyle={{ fontSize: 15 }}
          containerStyle={{
            // marginTop: 16,
            width: 60,
            height: 25,
            borderRadius: 30,
            padding: 0,
            borderWidth:2
          }}
          backgroundColorOn="#fff"
          backgroundColorOff="#fff"
          circleStyle={{
            width: 20,
            height: 20,
            borderRadius: 27.5,
            backgroundColor: "blue", // rgb(102,134,205),
            color:"#252b83"
          }}
          switchOn={this.state.switchOn4}
          onPress={this.onPress4}
          circleColorOff="#252b83"
          circleColorOn="#252b83"
          duration={500}
        />
      </View>
    );
  }
  onPress1 = () => {
    this.setState({ switchOn1: !this.state.switchOn1 });
  };
  onPress2 = () => {
    this.setState({ switchOn2: !this.state.switchOn2 });
  };
  onPress3 = () => {
    this.setState({ switchOn3: !this.state.switchOn3 });
  };
  onPress4 = () => {
    this.setState({ switchOn4: !this.state.switchOn4 });
  };
}
 
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "#F5FCFF",
    // borderWidth:1,
  }
});