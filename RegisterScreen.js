import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function RegisterScreen() {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = () => {
    if (isChecked) {
      alert('Đăng ký thành công!');
    } else {
      alert('Vui lòng chấp nhận điều khoản và điều kiện.');
    }
  };

  return (
    <LinearGradient
      colors={['#00FF94', '#0000FE']}
      start={{ x: 0.0, y: 0.0 }}
      end={{ x: 0.0, y: 1.0 }}
      style={styles.background}
    >
      {/* Tiêu đề nằm ngoài container */}
      <Text style={styles.title}>Sign Up</Text>

      <View style={styles.container}>
        {/* Input fields for registration */}
        <View style={styles.inputContainer}>
          <FontAwesome name="user" size={20} color="#0090FF" style={styles.icon} />
          <TextInput style={styles.input} placeholder="Full Name" />
        </View>

        <View style={styles.inputContainer}>
          <FontAwesome name="envelope" size={20} color="#0090FF" style={styles.icon} />
          <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
        </View>

        <View style={styles.inputContainer}>
          <FontAwesome name="phone" size={20} color="#0090FF" style={styles.icon} />
          <TextInput style={styles.input} placeholder="Mobile Number" keyboardType="phone-pad" />
        </View>

        <View style={styles.inputContainer}>
          <FontAwesome name="lock" size={20} color="#0090FF" style={styles.icon} />
          <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
        </View>

        {/* Gradient button for "Đăng Ký" */}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <LinearGradient
            colors={['#0090FF','#00FF94' ]}
            start={{ x: 0.0, y: 0.0 }}
            end={{ x: 1.0, y: 1.0 }}
            style={styles.buttonGradient}
          >
            <Text style={styles.buttonText}>Create Account</Text>
          </LinearGradient>
        </TouchableOpacity>

        <Text style={styles.orText}>or sign In using</Text>

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

        {/* Custom Checkbox */}
        <View style={styles.termsContainer}>
          <TouchableOpacity
            style={[styles.checkbox, isChecked && styles.checkboxChecked]}
            onPress={toggleCheckbox}
          >
            {isChecked && <FontAwesome name="check" size={18} color="white" />}
          </TouchableOpacity>
          <Text style={styles.termsText}>By creating an account, you are agree to our</Text>
        </View>

        {/* Thông báo đăng nhập */}
        <Text style={styles.loginText}>
          Already have an account?
          <Text style={styles.linkText}>
            Sing In
          </Text>
        </Text>
      </View>
    </LinearGradient>
  );
}

// Styles remain the same
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
    height: '85%', // Đặt chiều cao thành 60% để tăng kích thước
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
    marginBottom: 20,
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
    marginBottom: 20,
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
    marginBottom: 20,
  },
  facebookButton: {
    backgroundColor: '#266AD1',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  googleButton: {
    backgroundColor: '#D14426',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  socialButtonText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#00BFFF',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: '#00BFFF',
  },
  termsText: {
    color: '#999',
    marginLeft: 5,
  },
  loginText: {
    textAlign: 'center',
    color: '#999',
  },
  linkText: {
    color: '#00BD6B',
    fontWeight: 'bold',
  },
});
