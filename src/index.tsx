import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {I18nextProvider} from "react-i18next";
import i18n from './config/i18n/I18n'
import {ThemeStoreProvider} from "./contexts/theme/Theme.context";

ReactDOM.render(
    <React.StrictMode>
        <I18nextProvider i18n={i18n}>
            <ThemeStoreProvider>
                <App/>
            </ThemeStoreProvider>
        </I18nextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
