import React from 'react';
import BaseBouncyButton from './BaseBouncyButton';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';

/**
 * InfoButton is a button that is used to show the user information about the game
 * it will use the BaseBouncyButton as a template
 * it will use the navigation to navigate to the about screen
 * @requires BaseBouncyButton
 * @requires useNavigation
 * @returns InfoButton
 */
export default function InfoButton() {
    const navigation = useNavigation();
    return (
        <BaseBouncyButton onPress={() => navigation.navigate('About')} >
            <AntDesign name="questioncircleo" size={24} color="black" />
        </BaseBouncyButton>
    );
}