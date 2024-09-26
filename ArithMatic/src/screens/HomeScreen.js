import React from 'react';
import { View, StyleSheet } from 'react-native';
//decorations
//import HomeBackground from '../components/decorations/HomeBackground';
import Title from '../components/decorations/Title';
//buttons
import GoButton from '../components/buttons/GoButton';
import OptionsButton from '../components/buttons/OptionsButton';
import ScoresButton from '../components/buttons/ScoresButton';
import InfoButton from '../components/buttons/InfoButton';
import ChooseButton from '../components/buttons/ChooseButton';

/**
 * HomeScreen
 * 
 * 
 * 
 * @returns HomeScreen
 */


export default function HomeScreen() {

//return
return (
  <View style={styles.container}>    
  <Title />
  {/* HERE GOES THE BACKGROUND */}
  {/* HERE GOES THE DECORATIONS */}
  <GoButton  style={styles.goButton}/>
  <InfoButton style={styles.infoButton}/>
  <ScoresButton style={styles.scoresButton}/>
  <OptionsButton style={styles.optionsButton}/>
  <ChooseButton style={styles.chooseButton}/>
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
//down here we set the position of the buttons, so that we can adjust it later centrally
goButton: {
  position: 'absolute',
  top: 100,
  left: 100,
},
infoButton: {
  position: 'absolute',
  top: 100,
  right: 100,
},
scoresButton: {
  position: 'absolute',
  bottom: 100,
  left: 100,
},
optionsButton: {
  position: 'absolute',
  bottom: 100,
  right: 100,
},
chooseButton: {
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center',
},
}); 