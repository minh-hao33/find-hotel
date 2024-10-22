import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function SplashScreen() {
  // Hàm xử lý sự kiện khi nhấn vào màn hình, có thể thêm logic khác ở đây
  const handlePress = () => {
    console.log('Splash screen pressed');
    // Bạn có thể thêm logic xử lý sự kiện tại đây nếu cần
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress} activeOpacity={1}>
      <LinearGradient
        colors={['#00FF94', '#0000FE']}
        style={styles.background}
      >
        <View style={styles.content}>
          <Image 
            source={require('./location.png')} 
            style={styles.icon} 
          />
          <Text style={styles.title}>Find Hotel</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Chiếm toàn bộ màn hình
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  icon: {
    width: 260,
    height: 260,
    marginBottom: 20,
  },
  title: {
    fontSize: 59,
    color: 'white',
    fontWeight: 'bold',
  },
});
