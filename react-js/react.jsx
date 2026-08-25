import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TextInput } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    state = {
        String, username: "",
        String, org: "",
        String, contact: "",
        String, access: ""
    };

    _handleUsername = username => {
        this.setState({ username });
    }
    _handleDepartment = org => {
        this.setState({ org });
    }
    _handleContact = contact => {
        this.setState({ contact });
    }
    _handleAccess = access => {
        this.setState({ access });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Full Name: </Text>
                <TextInput
                    value={this.state.username}
                    onChangeText={this._handleUsername}
                    style={styles.input}
                />
                
                <Text>Department: </Text>
                <TextInput
                    value={this.state.org}
                    onChangeText={this._handleDepartment}
                    style={styles.input}
                />

                <Text>Contact: </Text>
                <TextInput
                    value={this.state.contact}
                    onChangeText={this._handleContact}
                    style={styles.input}
                />

                <Text>Access: </Text>
                <TextInput
                    value={this.state.access}
                    onChangeText={this._handleAccess}
                    style={styles.input}
                />
                
                <View style={styles.box}>
                    <Text style={[styles.outputTxt, styles.header]}>
                        Apex Entertainment Pass
                    </Text>
                    <View style={styles.line}/>
                    <Text style={styles.outputTxt}>
                        Attendee: {this.state.username}
                    </Text>
                    <Text style={styles.outputTxt}>
                        Org: {this.state.org}
                    </Text>
                    <Text style={styles.outputTxt}>
                        Contact: {this.state.contact}
                    </Text>
                    <Text style={styles.outputTxt}>
                        Access: {this.state.access}
                    </Text>
                    <Text style={styles.outputTxt}>
                        Issuer: BCH Software Terminal System
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
    },
    input: {
        width: 225,
        height: 44,
        padding: 8,
        borderWidth: 2,
        bordorColor: 'black'
    },
    box: {
        justifyContent: 'center',
        width: 275,
        height: 225,
        backgroundColor: "lightblue",
        margin: 25,
        borderCurve: 'continuous',
        borderRadius: 20
    },
    outputTxt: {
        margin: 5,
        fontSize: 15,
        fontFamily: 'Times New Roman',
        textAlign: 'left',
        display: '-webkit-box',
        WebkitLineClamp: 1,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden'
    },
    header: {
        fontSize: 20,
        textAlign: 'center'
    },
    line: {
        borderBottomColor: '#050505',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginVertical: 7,
        width: '100%',
    },
});