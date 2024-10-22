import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Check email and password
    if (email === 'abc@gmail.com' && password === '123456') {
      alert('Đăng nhập thành công!');
    } else {
      alert('Sai email hoặc mật khẩu!');
    }
  };

  return (
    <LinearGradient
      colors={['#00FF94', '#0000FE']}
      start={{ x: 0.0, y: 0.0 }}
      end={{ x: 0.0, y: 1.0 }}
      style={styles.background}
    >
      {/* Title outside the white container */}
      <Text style={styles.title}>Sign In</Text>

      <View style={styles.container}>
        {/* Input field for Email */}
        <View style={styles.inputContainer}>
          <FontAwesome name="envelope" size={20} color="#00BFFF" style={styles.icon} />
          <TextInput 
            style={styles.input} 
            placeholder="Email" 
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail} 
          />
        </View>

        {/* Input field for Password */}
        <View style={styles.inputContainer}>
          <FontAwesome name="lock" size={20} color="#00BFFF" style={styles.icon} />
          <TextInput 
            style={styles.input} 
            placeholder="Password" 
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword} 
          />
        </View>

        {/* Link for forgot password */}
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* Gradient button for "Sign In" */}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <LinearGradient
            colors={['#00BFFF', '#00FF94']}
            start={{ x: 0.0, y: 0.0 }}
            end={{ x: 1.0, y: 1.0 }}
            style={styles.buttonGradient}
          >
            <Text style={styles.buttonText}>Sign In</Text>
          </LinearGradient>
        </TouchableOpacity>

        <Text style={styles.orText}>or sign in using</Text>

        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.facebookButton}>
            <FontAwesome name="facebook" size={20} color="white" />
            <Text style={styles.socialButtonText}> Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.googleButton}>
            <FontAwesome name="google" size={20} color="white" />
            <Text style={styles.socialButtonText}> Google</Text>
          </TouchableOpacity>
        </View>
        
        <Text style={styles.registerText}>
          By creating an account, you agree to our
          <Text style={styles.linkText}> Terms</Text>
        </Text>

        {/* Link to register */}
        <Text style={styles.registerText}>
          Don't have an account? 
          <Text style={styles.linkText}> Sign Up</Text>
        </Text>
      </View>
    </LinearGradient>
  );
}

// Styles for the components
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 30,
    width: '90%', // Đặt chiều rộng thành 90% để mở rộng hơn
    height: '82%', // Đặt chiều cao thành 60% để tăng kích thước
    elevation: 10,
    overflow: 'hidden',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white', // Đặt màu chữ thành trắng
    marginBottom: 20, // Điều chỉnh khoảng cách
    alignSelf: 'flex-start', // Căn trái
    width: '80%', // Đặt chiều rộng phù hợp
    paddingLeft: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    marginBottom: 25,  // Adjusted spacing
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
  },
  forgotPassword: {
    textAlign: 'center',
    color: '#FF4500',  // Changed color to orange
    marginBottom: 30,  // Adjusted spacing
  },
  button: {
    borderRadius: 10,
    marginBottom: 30,  // Adjusted spacing
    overflow: 'hidden',
  },
  buttonGradient: {
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    color: '#999',
    marginBottom: 20,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,  // Adjusted spacing
  },
  facebookButton: {
    backgroundColor: '#266AD1',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: '45%',
  },
  googleButton: {
    backgroundColor: '#DD4B39',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: '45%',
  },
  socialButtonText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  registerText: {
    textAlign: 'center',
    color: '#999',
    marginBottom: 10,  // Adjusted spacing
  },
  linkText: {
    color: '#00BD6B',
    fontWeight: 'bold',
  },
});
