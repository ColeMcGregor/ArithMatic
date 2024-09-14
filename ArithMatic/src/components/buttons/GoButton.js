import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BaseBouncyButton from './BaseBouncyButton';
import { useNavigation } from '@react-navigation/native';

/**
 * GoButton is a button that is used to start the game
 * it will use the BaseBouncyButton as a template
 * it will use the navigation to navigate to the game screen
 * @requires BaseBouncyButton
 * @requires useNavigation
 * @returns GoButton
 */
export default function GoButton() {
    const navigation = useNavigation();
  return (
    <BaseBouncyButton style={styles.button} text="GO!" onPress={() => navigation.navigate('Game')} />
  );
}
//button just black text
const styles = StyleSheet.create({
    button: {
        color: 'black',
        fontSize: 60,
    }
});