import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');

  const handleForgotPassword = () => {
    // Handle forgot password logic
    alert('Đã gửi yêu cầu khôi phục mật khẩu cho Email: ' + email);
  };

  return (
    <LinearGradient
      colors={['#00FF94', '#0000FE']}
      start={{ x: 0.0, y: 0.0 }}
      end={{ x: 0.0, y: 1.0 }}
      style={styles.background}
    >
      {/* Title outside the white container */}
      <Text style={styles.title}>Forgot Password?</Text>

      {/* White container */}
      <View style={styles.container}>
        <Text style={styles.subtitle}>
          Please enter your registered email address to recover your password
        </Text>

        {/* Input field for Email */}
        <View style={styles.inputContainer}>
          <FontAwesome name="envelope" size={20} color="#00BFFF" style={styles.icon} />
          <TextInput 
            style={styles.input} 
            placeholder="Email" 
            placeholderTextColor="#999"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail} 
          />
        </View>

        {/* Gradient button for "Submit" */}
        <TouchableOpacity style={styles.button} onPress={handleForgotPassword}>
          <LinearGradient
            colors={['#00BFFF', '#00FF94']}
            start={{ x: 0.0, y: 0.0 }}
            end={{ x: 1.0, y: 1.0 }}
            style={styles.buttonGradient}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </LinearGradient>
        </TouchableOpacity>
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
  subtitle: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    marginBottom: 30,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
  },
  button: {
    borderRadius: 10,
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
});
