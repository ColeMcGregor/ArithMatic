import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import BaseBouncyButton from './BaseBouncyButton';
import AntDesign from '@expo/vector-icons/AntDesign';

/**
 * HomeButton is a button used sort of like a back button, but really just takes the user back to the home screen
 * it will use the BaseBouncyButton as a template
 * it will use the navigation to navigate to the home screen
 * @requires BaseBouncyButton
 * @requires useNavigation
 * @returns HomeButton
 */
export default function HomeButton() {
    const navigation = useNavigation();
    return (
        <BaseBouncyButton onPress={() => navigation.navigate('Home')} >
            <AntDesign name="home" size={24} color="black" />
        </BaseBouncyButton>
    );
}