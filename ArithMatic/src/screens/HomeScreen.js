import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
//context
import { GameContext } from '../contexts/GameContext';
//fonts
import PixieFont from '../assets/fonts/PixieFont.otf';
//decorations
import HomeBackground from '../components/decorations/HomeBackground';
import Title from '../components/decorations/Title';
//buttons
import GoButton from '../components/buttons/GoButton';
import OptionsButton from '../components/buttons/OptionsButton';
import ScoresButton from '../components/buttons/ScoresButton';
import AboutButton from '../components/buttons/AboutButton';


export default function HomeScreen() {
  //stuff
  const [fontsLoaded] = Font.useFonts({
    PixieFont: PixieFont,
  }); 
  if (!fontsLoaded) {
    console.log('fonts not loaded');  
  }

  //return
  return (
    <View style={styles.container}>
      <HomeBackground />
      <Text style={styles.title}>Arith-Matic</Text>
      <GoButton />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#009900',
  },
  title: {
    flex: .3,
    fontSize: 50,
    fontWeight: 'bold',
  },
});