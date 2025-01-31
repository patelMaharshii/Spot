import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';

import SpotLogo from '../assets/SpotLogo.png';

export default function Signin({ navigation }) {
  const handleSignIn = () => {
    console.log('Sign In button pressed');
    navigation.navigate('MainPage');
    // Add your sign-in logic here
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Logo Placeholder */}
      <View style={styles.logoContainer}>
        <View style={styles.logoPlaceholder}>
          <Image style={styles.logo} source={SpotLogo} />
        </View>
      </View>

      {/* Sign In Form */}
      <View style={styles.form}>
        <Text style={styles.title}>Sign In</Text>
        {/* Email Input */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        {/* Password Input */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
        />

        {/* Sign In Button */}
        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        {/* Additional Options */}
        <View style={styles.options}>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.linkText}>Create an Account</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.linkText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
    fontFamily: 'sans-serif',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoPlaceholder: {
    width: 100,
    height: 100,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '90%',
  },
  title: {
    fontSize: '3rem',
    fontWeight: '700',
    color: '#333',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    height: 48,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 16,
    color: '#333',
  },
  button: {
    height: '3rem',
    width: '10rem',
    backgroundColor: '#007aff',
    borderRadius: 8,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  buttonText: {
    fontSize: '2rem',
    fontWeight: '600',
    color: '#fff',
  },
  options: {
    marginTop: 16,
    alignItems: 'center',
  },
  linkText: {
    fontSize: 14,
    color: '#007aff',
    marginTop: 8,
  },
  logo: {
    width: 90,
    height: 90,
    borderRadius: 8,
  },
});
