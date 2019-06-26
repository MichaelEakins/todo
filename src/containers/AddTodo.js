import React, { Component } from 'react';
import { View, Platform, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { connect } from 'react-redux';

import addTodo from '../actions'

class AddTodo extends Component {
 state = {
     text: ''
 }

 addTodo = (text) => {
     //Redux Store
     console.warn(text);
    this.props.dispatch(addTodo(text));
    this.setState({text: ''});
 }
ß
  render() {
    return (
      <View style={{ flexDirection: 'row', marginHorizontal: 20}}>
        <TextInput
            onChangeText = {(text) => this.setState({ text })}
            value = {this.state.text}
            placeholder='Add New Todo'
            style={styles.input}
        />
        <TouchableOpacity onPress={() => this.addTodo(this.state.text)}>
            <View style={styles.iconContainer}>
            <Icon
                name={Platform.OS === "ios" ? "ios-add" : "md-add"}
                color="#F5F5F5"
                size={25}
            />
            </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect()(AddTodo);

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    iconContainer: {
        height: 50, 
        backgroundColor: '#989898',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    input: {
        backgroundColor: '#989898',
        height: 50, 
        flex: 1,
        padding: 5
    },
})
