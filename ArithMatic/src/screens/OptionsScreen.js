import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * OptionsScreen is the screen that allows the player to change the game settings
 * it will access the contexts to get the game settings and the possible settings
 * it will also allow the player to change the settings and update the contexts
 * Changeable stats include: Time, Questions, Significant Figures, Decimals, Mode, Question Types, and Difficulty
 * Changeable Settings include: Sound(FX and Music), and Haptics(Vibration)
 * 
 * @returns {React.ReactNode} - The OptionsScreen component
 */

export default function OptionsScreen() {

  const [gameSettings, setGameSettings] = useContext(GameSettingsContext);
  const [appSettings, setAppSettings] = useContext(AppSettingsContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Options Screen</Text>
      <Text style={styles.title}>Game Settings</Text>
      <Text style={styles.title}>App Settings</Text>
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