import React, { Component } from "react";
import { Container, Header, Content, Picker, Form } from "native-base";

export default class PickerExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "key1"
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }
  render() {
    return (
          <Form>
            <Picker
              note
              mode="dropdown"
              style={{ width: 120 }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="5Km" value="key0" />
              <Picker.Item label="10Km" value="key1" />
              <Picker.Item label="15Km" value="key2" />
              <Picker.Item label="20Km" value="key3" />
              <Picker.Item label="25Km" value="key4" />
            </Picker>
          </Form>

    );
  }
}