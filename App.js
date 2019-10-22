import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

export default function UselessTextInput(){
  const [value, onChangeText] = React.useState('Useless Placeholder');
      return (
        <View style = {{padding: 10}}>
          <Text style={{padding:10, fontSize:42}}>
            Login Page
          </Text>

          <Text style={{padding:20,fontSize:24}}>
            Email:
          </Text>

          <TextInput 
          style={{borderColor: 'gray', borderWidth: 1}}
          onChangeText={text => onChangeText(text)}
          />

          <Text style={{padding:20,fontSize:24}}>
            Password:
          </Text>

          <TextInput 
          style={{borderColor: 'gray', borderWidth: 1}} 
          secureTextEntry={true} 
          onChangeText={text => onChangeText(text)}
          />

        </View>
    );
  }
