import React, { useContext, useState } from 'react';
import { Button, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import AuthContext from '../contexts/AuthContext';
import axios from 'axios';
import PrimaryButton from '../components/PrimaryButton';
import Input from '../components/Input.js';
import styles from '../styles/global';
import { signup } from '../lib/functions';
import InputLabel from '../components/InputLabel';
import Error from '../components/Error';
import Title from '../components/Title';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error , setError] = useState('Please enter a valid email');

  async function fetchToken() {
    const res = await signup(email, password)
    console.log("hiiii", res)

    if (res.success === true) {
      auth.login(res.token);
    }
  }



  const auth = useContext(AuthContext);
  return (
    <View 
      style={styles.centerPage}
    >
      <Text style={styles.title}>Challengerg</Text>

      {/* <Text style={styles.title}>Sign Up</Text> */}
      <Title text={"Sign Up"}/>
      {/* <TextInput value={email} onChangeText={setEmail} placeholder='email' style={{width: "100%", padding: 16, borderColor: "red", borderWidth: 2}}/> */}
      {/* <TextInput value={password} onChangeText={setPassword} placeholder='password' style={{width: "100%", padding: 16, borderColor: "red", borderWidth: 2}}/> */}
      {/* <TouchableOpacity
      style={{padding: 16, backgroundColor: "#03dac5", color:"red"}}
      onPress={() => fetchToken()}
      >
        <Text>Signup</Text>
      </TouchableOpacity> */}
      <KeyboardAvoidingView style={{width: "100%"}} 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <InputLabel text={"Name"}/>
        <Input placeholder="Full Name" value={name} onChangeText={setName}/>
        <InputLabel text={"Email"}/>
        <Input placeholder="Email" value={email} onChangeText={setEmail}/>
        <InputLabel text={"Password"}/>
        <Input secureTextEntry={true} placeholder="Password" value={password} onChangeText={setPassword}/>
        <Error error={error}/>
        <PrimaryButton text="Create Account" onPress={()=> fetchToken() }/>
      </KeyboardAvoidingView>
    </View>
  );
}