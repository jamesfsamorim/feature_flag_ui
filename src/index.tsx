import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {I18nextProvider} from "react-i18next";
import i18n from './config/i18n/I18n'
import {ThemeProvider} from "styled-components";
import defaultTheme from "./themes/Default.theme";
import GlobalStyle from "./themes/global"

ReactDOM.render(
    <React.StrictMode>
        <I18nextProvider i18n={i18n}>
            <ThemeProvider theme={defaultTheme}>
                <App/>
                <GlobalStyle />
            </ThemeProvider>
        </I18nextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
