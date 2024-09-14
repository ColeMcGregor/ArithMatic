import React from "react";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BaseBouncyButton from "./BaseBouncyButton";
import Entypo from '@expo/vector-icons/Entypo';

/**
 * ScoreButton is a button that is used to navigate to the stats screen
 * it will use the BaseBouncyButton as a template
 * it will use the navigation to navigate to the stats screen
 * @requires BaseBouncyButton
 * @requires useNavigation
 * @returns ScoreButton
 */
export default function ScoreButton() {
    const navigation = useNavigation();
    return (
        <BaseBouncyButton style={styles.button} onPress={() => navigation.navigate('Stats')}> 
            <Entypo name="trophy" size={24} color="black" />
        </BaseBouncyButton>
    );
}

const styles = StyleSheet.create({
    button: {
        color: 'yellow',
    }
});