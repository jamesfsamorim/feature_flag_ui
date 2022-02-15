import React, {Suspense, useContext, useEffect, useState} from 'react';
import FeatureFlag from "./pages/feature_flag/FeatureFlag";
import {
    FormControl, FormControlLabel,
    Radio,
    RadioGroup,
    Skeleton
} from "@mui/material";
import withLoading from "./hocs/loading/Circular.loading";
import {
    AppComponent,
    AppDrawer,
    DrawerDivider,
    DrawerPaper,
    FloatingButton,
    IconTitle
} from "./App.styled";
import {emptyGeneralStatus} from "./pages/feature_flag/panels/contents/General.content";
import {emptyUserSettingsStatus} from "./pages/feature_flag/panels/contents/UserSettings.content";
import {emptyAlertsStatus} from "./pages/feature_flag/panels/contents/Alerts.content";
import api from "./config/axios/api";
import {getMockGeneralContent} from "./tests/mocks/pages/feature_flag/GeneralContent.mock";
import {getMockUserSettingsContent} from "./tests/mocks/pages/feature_flag/UserSettingsContent.mock";
import {getMockUserOtherSettingsContent} from "./tests/mocks/pages/feature_flag/UserOtherSettingsContent.mock";
import {getMockAlertsContent} from "./tests/mocks/pages/feature_flag/AlertsContent.mock";
import Settings from '@mui/icons-material/Settings'
import Translate from '@mui/icons-material/Translate'
import Palette from '@mui/icons-material/Palette'
import {useTranslation} from "react-i18next";
import {ThemeContext, ThemeTypes} from "./contexts/theme/Theme.context";

const HocFeatureFlag = withLoading(FeatureFlag)

function App() {
    const [loading, setLoading] = useState(false)
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const {switchTheme, themeType} = useContext(ThemeContext)
    const [language, setLanguage] = useState('en')
    const [generalStatus, setGeneralStatus] = useState(emptyGeneralStatus)
    const [userSettingsStatus, setUserSettingsStatus] = useState(emptyUserSettingsStatus)
    const [userOtherSettingsStatus, setUserOtherSettingsStatus] = useState(emptyUserSettingsStatus)
    const [alertsStatus, setAlertsStatus] = useState(emptyAlertsStatus)
    const {t, i18n} = useTranslation()

    console.log({generalStatus})
    console.log({userSettingsStatus})
    console.log({userOtherSettingsStatus})
    console.log({alertsStatus})
    useEffect(() => {
        const getGeneralStatus = async () => {
            const response = await getMockGeneralContent()
            setGeneralStatus(response)
            // return await api.get('/featureFlag/general')
        }

        const getFeatureFlagStatus = async (): Promise<void> => {
            getGeneralStatus()
            setAlertsStatus(await getAlertsStatus())
            setUserSettingsStatus(await getUserSettingsStatus())
            setUserOtherSettingsStatus(await getUserOtherSettingsStatus())
        }

        getGeneralStatus()
        // getFeatureFlagStatus()
    }, [])

    const getUserSettingsStatus = async () => {
        return await getMockUserSettingsContent()
        // return await api.get('/featureFlag/user/settings')
    }

    const getUserOtherSettingsStatus = async () => {
        return await getMockUserOtherSettingsContent()
        // return await api.get('/featureFlag/user/other/settings')
    }

    const getAlertsStatus = async () => {
        return await getMockAlertsContent()
        // return await api.get('/featureFlag/alerts')
    }

    const changeLanguage = (language: string) => {
        setLanguage(language)
        i18n.changeLanguage(language)
    }

    return (
        <AppComponent>
            <Suspense fallback={<Skeleton/>}>
                <FloatingButton onClick={() => setIsDrawerOpen(true)} size={'small'}>
                    <Settings/>
                </FloatingButton>
                <AppDrawer
                    anchor='right'
                    open={isDrawerOpen}
                    onClose={() => setIsDrawerOpen(false)}
                >
                    <DrawerPaper>
                        <IconTitle>
                            <Translate/> <h5>{t('drawer.languages.title')}</h5>
                        </IconTitle>
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={language}
                                onChange={({target: {value}}) => changeLanguage(value)}
                            >
                                <FormControlLabel value="en" control={<Radio size={'small'}/>}
                                                  label={t('drawer.languages.english') as string}/>
                                <FormControlLabel value="pt" control={<Radio size={'small'}/>}
                                                  label={t('drawer.languages.portuguese') as string}/>
                            </RadioGroup>
                        </FormControl>

                        <DrawerDivider/>

                        <IconTitle>
                            <Palette/> <h5>{t('drawer.themes.title')}</h5>
                        </IconTitle>
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={themeType}
                                onChange={({target: {value}}) => switchTheme(value as ThemeTypes)}
                            >
                                <FormControlLabel value="default" control={<Radio/>}
                                                  label={t('drawer.themes.default') as string}/>
                                <FormControlLabel value="light" control={<Radio/>}
                                                  label={t('drawer.themes.light') as string}/>
                                <FormControlLabel value="blue" control={<Radio/>}
                                                  label={t('drawer.themes.blue') as string}/>
                            </RadioGroup>
                        </FormControl>
                    </DrawerPaper>
                </AppDrawer>
                <HocFeatureFlag loading={loading} generalStatus={generalStatus}
                                userOtherSettingsStatus={userOtherSettingsStatus}
                                userSettingsStatus={userSettingsStatus}
                                alertsStatus={alertsStatus}/>
            </Suspense>
        </AppComponent>
    );
}

export default App
