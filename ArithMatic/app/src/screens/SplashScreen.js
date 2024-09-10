/**
 * SplashScreen.js
 * 
 * This component is the splash screen that shows when the app first opens.
 * It shows the splash image for 4 seconds, then navigates to the StartScreen.
 * will display an error message if the image fails to load, but not crash the app.
 * 
 * @requires src/assets/images/splash.png
 */
import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const navigation = useNavigation(); // Access navigation to handle screen transition

  // Load the image and navigate to the StartScreen after 4 seconds
  //use one of the lovely hooks JavaScript has to offer, useEffect

  useEffect(() => {
    // Preload the image
    Image.prefetch('../assets/images/SplashScreenAIIteration1.jpg')
      .then(() => {
        setImageLoaded(true);  // Image is successfully loaded
      })
      .catch(() => {
        setImageError(true);  // Handle error if image fails to load
      });

    const timer = setTimeout(() => {
      navigation.replace('StartScreen');  
    }, 4000);  // 4-second delay, then load the StartScreen, look at it nice and long baby

    // Cleanup the timer when the component unmounts(when the screen is changed/user navigates away)
    return () => clearTimeout(timer);
                }, []);
  // Show error message if image fails to load
  if (imageError) {
    return <Text>Splash Image file missing</Text>;  // Show error if image fails to load
  }
  // Show the image if it is loaded
  return (
    <View style={styles.container}>
      {imageLoaded ? (
        <Image source={require('../assets/images/SplashScreenAIIteration1.jpg')} style={styles.image} />
      ) : (
        <Text>Loading...</Text>  // Show loading text while the image is loading
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
},
  image: { 
    width: 200, 
    height: 200 },
});

export default SplashScreen;
