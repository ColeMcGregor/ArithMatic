//Basic imports
import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Switch } from 'react-native';
//import libraries
import Slider from '@react-native-community/slider'; 
//import contexts
import { GameSettingsContext } from '../contexts/GameSettingsContext';
import { AppSettingsContext } from '../contexts/AppSettingsContext';

/**
 * OptionsScreen
 * 
 * This screen allows the user to change the game settings and app settings
 * 
 * @returns {React.ReactNode} - The OptionsScreen component
 */

export default function OptionsScreen() {
  const [gameSettings, setGameSettings] = useContext(GameSettingsContext);
  const [appSettings, setAppSettings] = useContext(AppSettingsContext);

  // Local state for game settings and app settings, to be fed into the contexts
    // Game Settings
  const [time, setTime] = useState(gameSettings.time);
  const [questions, setQuestions] = useState(gameSettings.questions);
  const [significantFigures, setSignificantFigures] = useState(gameSettings.significantFigures);
  const [decimal, setDecimal] = useState(gameSettings.decimal);
  const [mode, setMode] = useState(gameSettings.mode);
  const [selectTypes, setSelectTypes] = useState(gameSettings.selectTypes);
  const [difficulty, setDifficulty] = useState(gameSettings.difficulty);

    // App Settings
  const [musicOn, setMusicOn] = useState(appSettings.MusicOn);
  const [musicVolume, setMusicVolume] = useState(appSettings.MusicVolume);
  const [fxOn, setFxOn] = useState(appSettings.FXOn);
  const [fxVolume, setFxVolume] = useState(appSettings.FXVolume);
  const [vibration, setVibration] = useState(appSettings.Haptics);

  // Function to update the game settings in the GameSettingsContext/
  const updateGameSettings = () => {
    setGameSettings({ ...gameSettings, time, questions, significantFigures });
  };

  // Function to update the app settings in the AppSettingsContext
  const updateAppSettings = () => {
    setAppSettings({ ...appSettings, musicVolume, fxVolume, vibration });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Options Screen</Text>

      <Text style={styles.subtitle}>Game Settings</Text>

      {/* Select Types */}
      <Text>Select Types:</Text>
      {gameSettings.possibleTypes.map((type) => (
        <TouchableOpacity key={type}> </TouchableOpacity>
      ))}

      {/* Time */}
      <Text>Time: </Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={String(time)}
        onChangeText={(value) => setTime(parseInt(value, 10) || 10)} // Default to 10 seconds if empty
        onEndEditing={updateGameSettings}
      />
      <Text> Seconds</Text>

      {/* Questions */}
      <Text>Number of Questions: </Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={String(questions)}
        onChangeText={(value) => setQuestions(parseInt(value, 10) || 3)} // Default to 3 questions if empty
        onEndEditing={updateGameSettings}
      />

      {/* Significant Figures */}
      <Text>Significant Figures:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={String(significantFigures)}
        onChangeText={(value) => setSignificantFigures(parseInt(value, 10) || 1)} // Default to 1 significant figure if empty
        onEndEditing={updateGameSettings}
      />
      <Text>Decimal:</Text>
      <Switch
        value={decimal}
        onValueChange={(value) => {
          setDecimal(value);
          updateGameSettings();
        }}
      />
      <Text>Mode:</Text>
      {/*put decorated radio buttons here*/}

      <Text>Difficulty:</Text>
      {/*put decorated radio buttons here*/}

      <Text style={styles.subtitle}>App Settings</Text>
      {/* Music on or off */}
      <Text>Music On:</Text>
      <Switch
        value={musicOn}
        onValueChange={(value) => {
          setMusicOn(value);
          updateAppSettings();
        }}
      />
      {/* Music Volume Slider */}
      <Text>Music Volume:</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={1}
        step={0.1}
        value={musicVolume}
        onValueChange={(value) => setMusicVolume(value)}
        onSlidingComplete={updateAppSettings}
      />

      {/* FX on or off */}
      <Text>FX On:</Text>
      <Switch
        value={fxOn}
        onValueChange={(value) => {
          setFxOn(value);
          updateAppSettings();
        }}
      />

      {/* FX Volume Slider */}
      <Text>FX Volume:</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={1}
        step={0.1}
        value={fxVolume}
        onValueChange={(value) => setFxVolume(value)}
        onSlidingComplete={updateAppSettings}
      />

      {/* Vibration Toggle */}
      <Text>Vibration:</Text>
      <Switch
        value={vibration}
        onValueChange={(value) => {
          setVibration(value);
          updateAppSettings();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    width: '100%',
    borderRadius: 5,
    textAlign: 'center',
  },
  slider: {
    width: '100%',
    height: 40,
    marginVertical: 10,
  },
});
