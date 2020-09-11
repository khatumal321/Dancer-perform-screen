import React from 'react';
import { View, Text, Button, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Textarea, Form } from "native-base";
import Dropdown from './../../component/Dropdown/dropdown';
import Logo from './../../contaniner/Home/logo.png';
import Passcode from './../../component/Passcode/Passcode';
import ToogleBtn from './../../component/toggleButton/toggleButton'

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            buttonDetails: [
                {
                    firstValue: "free",
                    secondValue: "0-12"
                },
                {
                    firstValue: "free",
                    secondValue: "0-12"
                },
                {
                    firstValue: "",
                    secondValue: "0-12"
                }
            ],
            btn2Details: [
                {
                    value:"Mechanic"
                },
                {
                    value:"servent"
                },
                {
                    value:"Businsmen"
                }
            ],
            indexNumber: 0,
            indexNumber2:0,
            text:"Hey There! How are you... I need a dancer to perform at my doughter's birthday party and if you like to wear t shirts its alright but make sure you don't smoke pot"
        }
    }

    backGroundFunction = (i) => {
        this.setState({ indexNumber: i })
    }

    selectedViewFunc=(i)=>{
        this.setState({ indexNumber2: i })
    }

    render() {
        console.log("============>>>>", this.state.indexNumber2)
        return (
            <View>
                <Header style={styles.Header}>
                    <View style={styles.Dropdown}>
                <ToogleBtn />
                        <Dropdown />
                    </View>
                </Header>
                   
                {/* <ToggleButton/> */}
                <View style={styles.Mainview} >
                    <Text style={styles.Setpassword}>Set Password</Text>
                    <Text style={styles.Passcode}>Enter your 6 digit passcode</Text>
                    <Passcode />
                </View>
                <Content padder>
                    <Form>
                        <Textarea rowSpan={4} bordered style={styles.TextArea}
                            value={this.state.text}
                            onChangeText={(e)=>this.setState({text:e})}
                        />
                    </Form>
                </Content>

                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.btnNow}>
                        <TouchableOpacity>
                            <Text style={styles.btnText}>Now</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.btnView}>
                        <TouchableOpacity>
                            <Text style={styles.btnText} >View All</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: -40, padding: 30, }}>
                    {
                        this.state.buttonDetails.map((val, i) => {
                            return (
                                <View style={this.state.indexNumber === i ? styles.btn12 : styles.btn1}>
                                    <TouchableOpacity onPress={() => this.backGroundFunction(i)} >
                                        <Text style={this.state.indexNumber === i ? styles.price1 : styles.price}>{val.firstValue}</Text>
                                        <Text style={this.state.indexNumber === i ? styles.btnText12 : styles.btnText1}>{val.secondValue}</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                    }
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: -40 }}>
                    <View style={styles.icon}>
                        <Image source={require('./../Home/logo.png')}
                            style={{ width: 30, height: 30 }}
                        />
                    </View>
                    {
                        this.state.btn2Details.map((val, i) => {
                            return(
                            <View style={this.state.indexNumber2===i?styles.mechanicBtn2:styles.mechanicBtn}>
                                <TouchableOpacity onPress={() => this.selectedViewFunc(i)} >
                                   <Text style={this.state.indexNumber2===i?styles.btnText22:styles.btnText2}>{val.value}</Text>
                                </TouchableOpacity>
                            </View>
                            )
                        })
                    }

                </View>

                {/* -------post----- */}
                <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                    <Text style={styles.note}>Note: All contacted buddies may not respond to your post</Text>
                    <View style={styles.post}>
                        <TouchableOpacity>
                            <Text style={styles.postText}>Post</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Header: {
        backgroundColor: '#fafafa'
    },
    Dropdown: {
        // marginLeft: '75%',
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        // borderWidth:2,
        alignItems:"center"
    },
    Mainview: {
        padding: 35,
    },
    Setpassword: {
        color: '#252b83',
        fontSize: 25,
        fontWeight: 'bold'
    },
    Passcode: {
        color: '#252b83',
        fontSize: 15,
        fontWeight: 'bold',
        paddingTop: 30
    },
    TextArea: {
        elevation: 1,
        fontSize: 17,
        color: '#252b83',
        fontWeight: 'bold',
        width: '100%',
        borderRadius: 10,
        backgroundColor: 'white'
    },
    btnNow: {
        width: '30%',
        height: 50,
        elevation: 5,
        borderRadius: 5,
        margin: 35,
        marginLeft: 60,
        backgroundColor: 'white'
    },
    btnText: {
        color: 'black',
        alignContent: 'center',
        textAlign: 'center',
        marginTop: 10,
        fontSize: 20,
    },
    btnView: {
        width: '30%',
        height: 50,
        elevation: 5,
        borderRadius: 5,
        margin: 35,
        marginLeft: 20,
        backgroundColor: 'white'
    },
    btnText1: {
        color: '#252b83',
        alignContent: 'center',
        textAlign: 'center',
        marginTop: -8,
        fontSize: 20,
        justifyContent: "center",
        // marginTop:0.19 
    },
    btnText12: {
        color: "white",
        alignContent: 'center',
        textAlign: 'center',
        marginTop: -8,
        fontSize: 20,
        justifyContent: "center",
        // marginTop:0.19 
    },
    btn1: {
        width: '32%',
        height: 50,
        elevation: 5,
        borderRadius: 7,
        margin: 25,
        borderColor: '#252b83',
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: 'white',
        padding: "1%",
        color: '#252b83',
    },
    btn12: {
        width: '32%',
        height: 50,
        elevation: 5,
        borderRadius: 7,
        margin: 25,
        borderColor: '#252b83',
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: '#252b83',
        padding: "1%",
        color: "white"
    },
    btn2: {
        width: '32%',
        height: 50,
        elevation: 5,
        borderRadius: 7,
        margin: 25,
        borderColor: '#252b83',
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: 'white',
        padding: "1%"
    },
    btn3: {
        width: '32%',
        height: 50,
        elevation: 5,
        borderRadius: 7,
        // marginLeft: -15,
        margin: 25,
        borderColor: '#252b83',
        borderStyle: 'solid',
        borderWidth: 1,
        // paddingTop: 20,
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: "1%"
    },
    price: {
        color: '#252b83',
        // marginLeft: 80
        alignSelf: "flex-end",
        fontSize: 10,
        marginRight: "2%"
    },
    price1: {
        color: 'white',
        // marginLeft: 80
        alignSelf: "flex-end",
        fontSize: 10,
        marginRight: "2%"
    },
    btnText2: {
        color: '#252b83',
        alignContent: 'center',
        textAlign: 'center',
        fontSize: 13,
    },
    btnText22: {
        color: 'white',
        alignContent: 'center',
        textAlign: 'center',
        fontSize: 13,
    },
    mechanicBtn: {
        width: '25%',
        height: 35,
        elevation: 5,
        borderRadius: 7,
        margin: 25,
        borderColor: '#252b83',
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    mechanicBtn2: {
        width: '25%',
        height: 35,
        elevation: 5,
        borderRadius: 7,
        margin: 25,
        borderColor: '#252b83',
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: '#252b83',
        justifyContent: 'center'
    },
    serventBtn: {
        width: '25%',
        height: 35,
        elevation: 5,
        borderRadius: 7,
        margin: 25,
        borderColor: '#252b83',
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    businessmanBtn: {
        width: '25%',
        height: 35,
        elevation: 5,
        borderRadius: 4,
        padding: 4,
        margin: 25,
        borderColor: '#252b83',
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    icon: {
        padding: 4,
        margin: 25,
        justifyContent: 'space-around'
    },

    post: {
        width: '95%',
        height: 42,
        elevation: 5,
        borderRadius: 7,
        padding: 4,
        margin: 12,
        backgroundColor: '#252b83',
        justifyContent: 'center'
    },

    postText: {
        color: 'white',
        alignContent: 'center',
        textAlign: 'center',
        marginTop: -8,
        fontSize: 20,
    },
    note: {
        color: 'gray',
        fontWeight: 'bold',
        alignContent: 'center',
        textAlign: 'center',
        // marginTop: 10,
    }
});
