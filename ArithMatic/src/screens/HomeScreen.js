import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { TouchableOpacity } from 'react-native';
import BouncyButton from '../components/bouncybutton';
import { GameContext } from '../contexts/GameContext';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Arith-Matic</Text>
      <BouncyButton 
      buttonText={'GO!'} 
      targetScreen={'Game'}
      textColor={'#fff'}
      backgroundColor={'#0D0'}
      fontSize={50}
      />
      <BouncyButton 
      buttonText={'Options'} 
      targetScreen={'Options'}
      textColor={'#fff'}
      backgroundColor={'#00D'}
      fontSize={20}
      />
      <BouncyButton 
      buttonText={'Scores'} 
      targetScreen={'Stats'}
      textColor={'#fff'}
      backgroundColor={'#0DD'}
      fontSize={20}
      />
      <BouncyButton 
      buttonText={'About'} 
      targetScreen={'About'}
      textColor={'#fff'}
      backgroundColor={'#DDD'}
      fontSize={20}
      />
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