import React, { useContext } from 'react';
import { Button, View, Text } from 'react-native';
import AuthContext from '../contexts/AuthContext';
import axios from 'axios';

export default function Signup() {
  async function fetchToken() {
    const res = await axios("http://localhost:8080/user/signup/", {
      method: "POST"
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
      <Button
      title='Signup'
      onPress={() => fetchToken()}
      />
    </View>
  );
}