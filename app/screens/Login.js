import React, { useContext, useState } from 'react';
import { Button, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, SafeAreaView, Image, ScrollView, Platform } from 'react-native';
import AuthContext from '../contexts/AuthContext';
import axios from 'axios';
import PrimaryButton from '../components/PrimaryButton';
import Input from '../components/Input.js';
import styles from '../styles/global';
import { login } from '../lib/functions';
import InputLabel from '../components/InputLabel';
import Error from '../components/Error';
import Title from '../components/Title';
import logo from '../assets/logo.png';
import PageContainer from '../components/PageContainer';
import AuthPage from '../components/AuthPage';
import Hero from '../components/Hero';
import HeaderSmall from '../components/HeaderSmall';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error , setError] = useState();

  async function fetchToken() {
    const res = await login(email, password)

    if (res.success === true) {
      auth.login(res.token);
    } else {
      setError(res.error);
    }
  }



  const auth = useContext(AuthContext);
  return (
    <AuthPage>
      <KeyboardAvoidingView style={{width: "100%"}} 
        behavior="position">
        <Hero/>
        <View>
          <HeaderSmall>Log in</HeaderSmall>
          <Input placeholder="Email" value={email} onChangeText={setEmail}/>
          <Input secureTextEntry={true} placeholder="Password" value={password} onChangeText={setPassword}/>
          <Error error={error}/>
          <Button title='Signup' onPress={() => navigation.navigate("Signup")}/>
          <PrimaryButton text="Login" onPress={()=> fetchToken() }/>
        </View>
      </KeyboardAvoidingView>
    </AuthPage>

      // <Image source={logo} style={{width: 150, height: 150, resizeMode: "contain"}}/>
  );
}