import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//splash screen image
import splashImage from '../assets/images/SplashScreenAIIteration1.jpg';

/**
 * Splash Screen
 * contains the image of our(my) company "Hooting Monkeys Studio"
 * and displays it for 4 seconds before moving to the Home Screen
 * 
 * @returns SplashScreen
 */

export default function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }], // Resets the stack and puts home screen on top, no return until app reload
      });
    }, 4000);  // 4-second delay before moving to HomeScreen

    return () => clearTimeout(timer);  // Clear the timer after first run
  }, []);

  return (
    <View style={styles.container}>
      <Image 
        source={splashImage}  // Use the imported image
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#4863A0',
  },
  image: { 
    width: '100%', 
    height: '65%',
  },
});
