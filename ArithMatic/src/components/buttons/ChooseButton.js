import React from "react";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons';
import BaseBouncyButton from "./BaseBouncyButton";

/**
 * ChooseButton is a button that will take you to the options screen
 * it will set some of the game settings on the Game context, 
 * and can be used to navigate home or to start the game
 * 
 * @requires BaseBouncyButton
 * @requires useNavigation
 * @returns ChooseButton
 */
export default function ChooseButton() {
    const navigation = useNavigation();
    return (
        <BaseBouncyButton onPress={() => navigation.navigate('Options')}>
            <Ionicons name="settings" size={24} color="black" />
        </BaseBouncyButton>
    );
}