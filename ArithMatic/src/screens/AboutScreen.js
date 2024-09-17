import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * The about screen holds the credits and instructions for the game
 * first the player will read the instructions
 * then will have credits for the game
 * @returns AboutScreen component
 */

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text>About Screen</Text>
      <Text>Instructions</Text>
      <Text>Credits: Garrett Cole McGregor: Lead Developer, Hawk MichaelLindner: Assistant Developer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});