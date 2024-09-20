import React, { createContext, useState } from 'react';

/**
 * AppSettingsContext is a context that stores the app settings
 * It is used to store the app settings and the functions to update them
 * The app settings include the sound and vibration settings for the app
 * 
 * @returns {React.ReactNode} - The AppSettingsContext component
 */

export const AppSettingsContext = createContext();

export const AppSettingsProvider = ({ children }) => {
    const [appSettings, setAppSettings] = useState({
        FXSound: true, // Sound effects on or off
        FXVolume: 100, // Sound effects volume
        MusicSound: true, // Music on or off
        MusicVolume: 100, // Music volume
        Haptics: true, // Vibration on or off
    });

    return (
        <AppSettingsContext.Provider value={{ appSettings, setAppSettings }}>
            {children}
        </AppSettingsContext.Provider>
    );
};