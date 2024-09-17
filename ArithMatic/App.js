/**
 * @file App.js is the main file for the app. It holds the navigation and context for the app.
 * It also holds the screens that are navigated to.
 * @name App.js
 * 
 * This app is a math game that helps users practice their math skills.
 * The app will open with a splash screen, which will show my(Cole and Hawk's) company name.
 * The app will then navigate to the home screen, which will have a start button to start the game,
 * a stats button to see the user's stats, and an about button
 * when the user presses the start button, the app will navigate to the options screen, 
 * where the user can set the game options for the round.
 ***** (types included by difficulty level[1-addition, 1-subtraction, 2-multiplication, 2-division, 3-Modulus, 3-Exponents, 4-Roots, 4-Logarithms], 
 ***** length of time[10 seconds - 120 seconds], number of questions[3-100], will be able to pick any combination of the types,
 ***** choices[3/4], range(1, 10, 100, 1000, etc), parentheses[x]/[ ])
 * The user will then press the confirm button, and the app will navigate to the game screen.
 * The game screen will show the math problem and the user will choose from one of 3 or 4 options.(settings based)
 * at the end of the game, or if the user quits, the results screen will show the user's results.
 * The user can then press the play again button, which will navigate back to the options screen.
 * or the home button, which will navigate back to the home screen.
 * the stats screen will show the user's stats(all games played, correct and incorrect, as well as aggregates of type)
 * the about screen will show the credits and instructions.
 */
 import React from 'react';
 //app will hold context and navigation
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 //lets get the context, or all the data
 import { ContextProvider } from './src/contexts/ContextProvider';
 //now the screens wrapped by the context and navigation
 //app opens with splash screen
 import SplashScreen from './src/screens/SplashScreen';
 //home screen is the main screen, loads from splash
 import HomeScreen from './src/screens/HomeScreen';
 //game screen is where the math happens
 import GameScreen from './src/screens/GameScreen';
 //options screen is where the user sets the game options
 import OptionsScreen from './src/screens/OptionsScreen';
 //results screen is where the user sees the results of the game
 import ResultsScreen from './src/screens/ResultsScreen';
 //stats screen is where the user sees their stats for their games
 import StatsScreen from './src/screens/StatsScreen';
 //about screen has credits and instructions
 import AboutScreen from './src/screens/AboutScreen';
 
 //create the stack navigator    
 const Stack = createStackNavigator();
 
 //create the app
 export default function App() {
   return (
     <ContextProvider>
       <NavigationContainer>
         <Stack.Navigator initialRouteName="Splash">
           <Stack.Screen 
             name="Splash" 
             component={SplashScreen} 
             options={{ headerShown: false }} 
           />
           <Stack.Screen 
             name="Home" 
             component={HomeScreen} 
             options={{ headerShown: false }} 
           />
           <Stack.Screen 
             name="Game" 
             component={GameScreen} 
             options={{ headerShown: false }} 
           />
           <Stack.Screen 
             name="Options" 
             component={OptionsScreen} 
             options={{ headerShown: false }} 
           />
           <Stack.Screen 
             name="Results" 
             component={ResultsScreen} 
             options={{ headerShown: false }} 
           />
           <Stack.Screen 
             name="Stats" 
             component={StatsScreen} 
             options={{ headerShown: false }} 
           />
           <Stack.Screen 
             name="About" 
             component={AboutScreen} 
             options={{ headerShown: false }} 
           />
         </Stack.Navigator>
       </NavigationContainer>
     </ContextProvider>
   );
 }