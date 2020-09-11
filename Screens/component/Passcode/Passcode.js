import React from 'react'
import {StyleSheet} from  'react-native'
import OTPInputView from '@twotalltotems/react-native-otp-input'

export default class Passcode extends React.Component{
    render(){
        return(
            <>
<OTPInputView
secureTextEntry={true}
    style={{width: '100%', height: 50, paddingTop: 40,color:"#252b83"}}
    pinCount={6}
    // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
    // onCodeChanged = {code => { this.setState({code})}}
    autoFocusOnLoad
    codeInputFieldStyle={styles.underlineStyleBase}
    codeInputHighlightStyle={styles.underlineStyleHighLighted}
    onCodeFilled = {(code) => {
        console.log(`Code is ${code}, you are good to go!`)
    }}
/>
</>
    )}}

const styles = StyleSheet.create({
  borderStyleBase: {
    width: 50,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: "#252b83",
  },

  underlineStyleBase: {
    width: 50,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 3,
  },

  underlineStyleHighLighted: {
    borderColor: "#252b83",
  },
});