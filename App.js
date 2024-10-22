import React from 'react';
import { StyleSheet, View } from 'react-native';
import SplashScreen from './SplashScreen';
import RegisterScreen from './RegisterScreen';
import OtpVerificationScreen from './OtpVerificationScreen';
import LoginScreen from './LoginScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import HomeScreen from './HomeScreen';
import BookingHistoryScreen from './BookingHistoryScreen';
import BookingDetailsScreen from './BookingDetailsScreen'

const App = () => {
  return (
    <View style={styles.container}>
      <ForgotPasswordScreen/>
    </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;