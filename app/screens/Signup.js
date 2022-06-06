import React, { useContext, useState } from 'react';
import { Button, View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, SafeAreaView, Image, ScrollView, Platform } from 'react-native';
import AuthContext from '../contexts/AuthContext';
import axios from 'axios';
import PrimaryButton from '../components/PrimaryButton';
import Input from '../components/Input.js';
// import styles from '../styles/global';
import { signup } from '../lib/functions';
import InputLabel from '../components/InputLabel';
import Error from '../components/Error';
import Title from '../components/Title';
import logo from '../assets/logo.png';
import PageContainer from '../components/PageContainer';
// import { LinearGradient } from 'expo-linear-gradient';
import LinearGradient from 'react-native-linear-gradient';
import AuthPage from '../components/AuthPage';
import Hero from '../components/Hero';
import HeaderSmall from '../components/HeaderSmall';
import Loading from '../components/Loader'
import { backgroundTertiaryDefault, foregroundTertiaryDefault } from '../lib/colors';


export default function Signup({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error , setError] = useState();
  const [loading, setLoading] = useState(false);

  async function fetchToken() {
    setLoading(true);
    const res = await signup(name, email, password)
    console.log("hiiii", res)
    setLoading(false);
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
          <HeaderSmall>Sign Up</HeaderSmall>
          {/* <InputLabel text={"Name"}/> */}
          <Input placeholder="Full Name" value={name} onChangeText={setName} errorState={error != undefined} error={error}/>
          {/* <InputLabel text={"Email"}/> */}
          <Input placeholder="Email" value={email} onChangeText={setEmail}/>
          {/* <InputLabel text={"Password"}/> */}
          <Input secureTextEntry={true} placeholder="Password" value={password} onChangeText={setPassword}/>
          {/* <Error error={error}/> */}
          <Button title='Login' onPress={() => navigation.navigate("Login")}/>
          {
            loading ? 
              <Loading isVisible={loading}/>
              :
              <PrimaryButton text="Create Account" onPress={()=> fetchToken() }/>
          }
        </View>
      </KeyboardAvoidingView>

    </AuthPage>

      // <Image source={logo} style={{width: 150, height: 150, resizeMode: "contain"}}/>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    padding: 20
  },
});
