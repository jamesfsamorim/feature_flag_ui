import React, {createContext, useState} from "react";
import {ThemeProps} from "../../themes/Types.theme";
import defaultTheme from "../../themes/Default.theme";
import lightTheme from "../../themes/Light.theme";
import blueTheme from "../../themes/Blue.theme";
import GlobalStyle from "../../themes/global";
import {ThemeProvider} from "styled-components";

export enum ThemeTypes {
    DEFAULT = 'default',
    LIGHT = 'light',
    BLUE = 'blue',
}

const themeArchives = {
    [ThemeTypes.DEFAULT]: defaultTheme,
    [ThemeTypes.LIGHT]: lightTheme,
    [ThemeTypes.BLUE]: blueTheme,
}

interface ThemeContextProps {
    theme: ThemeProps
    themeType: ThemeTypes
    switchTheme(theme: ThemeTypes): void
}

interface Props {
    children: React.ReactNode
}

const ThemeContext = createContext({} as ThemeContextProps);

const ThemeStoreProvider = ({children}: Props) => {
    const [theme, setTheme] = useState(themeArchives[ThemeTypes.DEFAULT]);
    const [themeType, setThemeType] = useState(ThemeTypes.DEFAULT)

    const switchTheme = (theme: ThemeTypes) => {
        if (typeof themeArchives[theme] === "undefined") {
            throw new Error(`The selected theme of type ${theme} it does not implemented yet`)
        }

        setThemeType(theme)
        setTheme(themeArchives[theme]);
    }

    return (
        <ThemeContext.Provider value={{theme, themeType, switchTheme}}>
            <ThemeProvider theme={theme}>
                {children}
                <GlobalStyle/>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export {ThemeStoreProvider, ThemeContext};