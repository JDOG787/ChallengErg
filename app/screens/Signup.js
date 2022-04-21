import React, { useContext, useState } from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import AuthContext from '../contexts/AuthContext';
import axios from 'axios';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function fetchToken() {
    const res = await axios("http://192.168.132.15:8080/users/signup/", {
      method: "POST",
      data: {
        email: email,
        password: password
      }
    })
    .catch(err => {
      console.log("Signup Failed", err)
    })

    if (res.data.success === true) {
      auth.login(res.data.token);
    }
  }



  const auth = useContext(AuthContext);
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text>Signup</Text>
      <TextInput value={email} onChangeText={setEmail} placeholder='email' style={{width: "100%", padding: 16, borderColor: "red", borderWidth: 2}}/>
      <TextInput value={password} onChangeText={setPassword} placeholder='password' style={{width: "100%", padding: 16, borderColor: "red", borderWidth: 2}}/>
      <Button
      title='Signup'
      onPress={() => fetchToken()}
      />
    </View>
  );
}