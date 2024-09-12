import React, { useRef, useEffect } from 'react';
import { Animated, TouchableOpacity, StyleSheet } from 'react-native';

/**
 * BaseBouncyButton is a reusable component that creates a bouncy button.
 * it is intended to be used as a base for other buttons
 * makes the button bounce when pressed as well as constantly bounce slightly
 * 
 * @param {function} onPress - function to be called when the button is pressed
 * @param {string} backgroundColor - color of the button
 * @param {number} borderRadius - border radius of the button
 * @param {object} style - additional styles for the button
 * @param {object} children - content to be placed inside the button
 * 
 */
const BaseBouncyButton = ({ onPress, backgroundColor, borderRadius, style, children }) => {
  const scaleValue = useRef(new Animated.Value(1)).current;

  // Bounce animation on press in
  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.7, 
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  // Bounce animation on press out
  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  // Constant bouncing animation
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleValue, {
          toValue: 1.1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <TouchableOpacity
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
      style={[style]}
    >
      <Animated.View
        style={[
          styles.button,
          {
            transform: [{ scale: scaleValue }],
            backgroundColor: backgroundColor || '#0D0',
            borderRadius: borderRadius || 90,
          },
        ]}
      >
  {/* "{children}" allows any content (text, icons, etc.) to be placed inside the button */}
        {children} 
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderColor: '#0D0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
    alignItems: 'center',
  },
});

export default BaseBouncyButton;
