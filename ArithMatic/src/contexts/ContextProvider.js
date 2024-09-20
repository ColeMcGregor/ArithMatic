import { GameSettingsProvider } from './GameSettingsContext';
import { PlayerProvider } from './PlayerSettingsContext';
import { AppSettingsProvider } from './AppSettingsContext';

/**
 * ContextProvider is a wrapper component that provides all the contexts to the app
 * This allows us to use the useContext hook to access the contexts in any component
 * 
 * @param {React.ReactNode} children - The child components that will have access to the contexts
 * @returns {React.ReactNode} - The wrapped child components
 */

export const ContextProvider = ({ children }) => {
    return (
        <GameSettingsProvider>
            <AppSettingsProvider>
            <PlayerStatsProvider>
                {children}
            </PlayerStatsProvider>
            </AppSettingsProvider>
        </GameSettingsProvider>
    );
};

