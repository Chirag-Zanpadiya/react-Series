/**
 * Theme Context for managing light and dark themes in a React application.
 *
 * This file defines:
 * 1. **ThemeContext**: A React context for managing the theme state.
 * 2. **ThemeProvider**: A context provider that allows child components to access the theme state.
 * 3. **useTheme()**: A custom hook to easily access the theme values in components.
 *
 * Usage:
 * ------
 * 1. Wrap your application with `<ThemeProvider>` in `App.js`:
 * 
 *    ```js
 *    import React, { useState } from "react";
 *    import { ThemeProvider } from "./ThemeContext";
 *    import MyComponent from "./MyComponent";
 *
 *    function App() {
 *        const [themeMode, setThemeMode] = useState("light");
 *
 *        const lightTheme = () => setThemeMode("light");
 *        const darkTheme = () => setThemeMode("dark");
 *
 *        return (
 *            <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
 *                <MyComponent />
 *            </ThemeProvider>
 *        );
 *    }
 *
 *    export default App;
 *    ```
 *
 * 2. Use the `useTheme()` hook in any component to access theme-related values:
 *
 *    ```js
 *    import React from "react";
 *    import useTheme from "./ThemeContext";
 *
 *    function MyComponent() {
 *        const { themeMode, lightTheme, darkTheme } = useTheme();
 *
 *        return (
 *            <div>
 *                <h1>Current Theme: {themeMode}</h1>
 *                <button onClick={lightTheme}>Light Theme</button>
 *                <button onClick={darkTheme}>Dark Theme</button>
 *            </div>
 *        );
 *    }
 *
 *    export default MyComponent;
 *    ```
 *
 * Benefits:
 * ---------
 * - Centralized theme management.
 * - Cleaner and more maintainable code using `useTheme()`.
 * - Easy to toggle between light and dark themes across the entire app.
 */

import React, { useContext, createContext } from "react";

// Creating Theme Context with default values
export const ThemeContext = createContext({
    themeMode: "light",
    lightTheme: () => {},
    darkTheme: () => {},
});

// Exporting the Theme Provider
export const ThemeProvider = ThemeContext.Provider;

// Custom hook to use Theme Context in components
export default function useTheme() {
    return useContext(ThemeContext);
}
