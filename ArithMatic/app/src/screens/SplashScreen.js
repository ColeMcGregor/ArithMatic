import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SplashScreen() {
  const [imageStatus, setImageStatus] = useState('loading');
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 4000);  // 4-second delay before moving to HomeScreen

    return () => clearTimeout(timer);
  }, [navigation]);

  const handleImageLoad = () => {
    setImageStatus('loaded');
  };

  const handleImageError = () => {
    setImageStatus('error');
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/images/SplashScreenAIIteration1.jpg')}
        style={styles.image}
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
      {imageStatus === 'error' && (
        <Text style={styles.errorText}>Image Failed to Load</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  image: { 
    width: '100%', 
    height: '100%',
    resizeMode: 'contain',
  },
  errorText: {
    position: 'absolute',
    fontSize: 18,
    color: 'red',
  },
});