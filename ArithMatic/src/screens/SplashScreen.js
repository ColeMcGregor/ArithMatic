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

  /**
   * We are gonna use a hook (useEffect) to load the font and then
   * reset the navigation to the Home Screen after 4 seconds. 
   * a promise is used to wait for the font to load before resetting the navigation.
   * promise.all will wait for all the promises to resolve before resetting the navigation.
   * the promise arguments both have to equal true before the navigation is reset, and
   * when loadAsync and a timeout is used, the return value is true or false
   */
  useEffect(() => {
    //will make sure at least 4 seconds have passed before moving to the Home Screen
    async function prepare() { 
      //load the font
      const fontPromise = Font.loadAsync({
        'BubbleFont': require('../assets/fonts/BubbleFont.otf'),
      });
      //create a promise that will resolve after 4 seconds
      const timeoutPromise = new Promise((resolve) => setTimeout(resolve, 4000));
      //wait for both the font and the timeout to resolve before resetting the navigation
      await Promise.all([fontPromise, timeoutPromise]);
      //reset the navigation to the Home Screen, and take the splash off the stack
      navigation.reset({
        index: 0, //reset the stack to the first screen
        routes: [{ name: 'Home' }], //reset the stack to the Home Screen
      });
    }
    //call the prepare function
    prepare();
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
