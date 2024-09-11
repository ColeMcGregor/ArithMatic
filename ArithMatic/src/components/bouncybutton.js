import React, { useRef } from 'react';
import { Animated, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BouncyButton = ({ buttonText, targetScreen, textColor, backgroundColor, fontSize }) => {
  const scaleValue = useRef(new Animated.Value(1)).current;
  const navigation = useNavigation();

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.7, // Shrinks slightly
      friction: 3, // Control the "bounciness"
      tension: 40, // Speed of the bounce
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1, // Back to normal size
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  const handlePress = () => {
    navigation.navigate(targetScreen); // Navigate to the target screen
  };

  return (
    <TouchableOpacity
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={handlePress} // Navigate on press
    >
      <Animated.View
        style={[
          styles.button,
          { transform: [{ scale: scaleValue }], backgroundColor: backgroundColor || '#0D0' }, // Dynamic background color
        ]}
      >
        <Text style={[styles.buttonText, { color: textColor || '#fff', fontSize: fontSize || 40 }]}>
          {buttonText}
        </Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 2, // Border around the button
    borderColor: '#0D0', // Color of the border (can be dynamic too)
    borderRadius: 90, // Rounded corners
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginVertical: 5,
    alignItems: 'center', // Center the text inside the button
  },
  buttonText: {
    fontWeight: 'bold',
  },
});

export default BouncyButton;
