import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
/**
 * GameScreen
 * 
 * will be the main screen for navigation
 * will have a button to start the game with current settings
 * will have a button to 
 * 
 * @returns GameScreen
 */

export default function GameScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Screen</Text>
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