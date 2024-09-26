/**
 * Title component
 * 
 * will display the title of the game "Arith-Matic"
 * uses custom font "PixieFont" in otf format
 * 
 * 
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PixieFont from '../../assets/fonts/PixieFont.otf';
import * as Font from 'expo-font';



export default function Title() {

    const [fontsLoaded] = Font.useFonts({
        PixieFont: PixieFont,
      }); 
      if (!fontsLoaded) {
        console.log('fonts not loaded');  
      }

  return (
    <View>
      <Text style={styles.title}>Arith-Matic</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    title: {
        fontFamily: 'PixieFont',
        fontSize: 40,
        color: '#000',
    }
});


