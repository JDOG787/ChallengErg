import React, { useContext } from 'react';
import { Button, View, Text } from 'react-native';
import AuthContext from '../contexts/AuthContext';

export default function Signup() {
  const auth = useContext(AuthContext);
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text>Signup</Text>
      <Button
      title='Signup'
      onPress={() => auth.login("AUTH_TOKEN")}
      />
    </View>
  );
}