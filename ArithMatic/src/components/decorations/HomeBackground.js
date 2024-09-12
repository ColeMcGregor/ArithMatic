import React from 'react';
import { View, Image,  StyleSheet } from 'react-native';

import WoodBackground from '../../assets/images/backgrounds/WoodBackgroundAI.png';

/**
 * HomeBackground is the background for the home screen.
 * contains wood background image
 * contains a few other decorations
 * not interactive
 */

const HomeBackground = () => {
    return (
        <View style={styles.container}>
            <Image 
            source={WoodBackground} 
            style={styles.image} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: '160%',
        resizeMode: 'cover',
    }
});

