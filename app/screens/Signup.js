import React, { useContext, useState } from 'react';
import { Button, View, Text, TextInput, TouchableOpacity } from 'react-native';
import AuthContext from '../contexts/AuthContext';
import axios from 'axios';
import PrimaryButton from '../components/PrimaryButton';
import Input from '../components/Input.js';
import styles from '../styles/global';
import { signup } from '../lib/functions';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error , setError] = useState('');

  async function fetchToken() {
    const res = await signup(email, password)
    console.log("hiiii", res)

    if (res.success === true) {
      auth.login(res.token);
    }
  }



  const auth = useContext(AuthContext);
  return (
    <View style={styles.page}>
      <Text style={{fontSize: 30, color: "white"}}>Signup</Text>
      {/* <TextInput value={email} onChangeText={setEmail} placeholder='email' style={{width: "100%", padding: 16, borderColor: "red", borderWidth: 2}}/> */}
      {/* <TextInput value={password} onChangeText={setPassword} placeholder='password' style={{width: "100%", padding: 16, borderColor: "red", borderWidth: 2}}/> */}
      {/* <TouchableOpacity
      style={{padding: 16, backgroundColor: "#03dac5", color:"red"}}
      onPress={() => fetchToken()}
      >
        <Text>Signup</Text>
      </TouchableOpacity> */}

      <Input placeholder="Email" value={email} onChangeText={setEmail}/>
      <Input placeholder="Password" value={password} onChangeText={setPassword}/>
      <PrimaryButton text="Sign Up" onPress={()=> fetchToken() }/>
      <Text>{error}</Text>
    </View>
  );
}