import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GameSettingsContext } from '../contexts/GameSettingsContext';
import { PlayerStatsContext } from '../contexts/PlayerStatsContext';

export default function ResultsScreen() {
  const { gameSettings } = useContext(GameSettingsContext);
  const { playerStats } = useContext(PlayerStatsContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Results Screen</Text>
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