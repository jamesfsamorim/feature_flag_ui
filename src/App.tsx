import React, {Suspense, useContext, useEffect, useState} from 'react';
import FeatureFlag from "./pages/feature_flag/FeatureFlag";
import {
    FormControl,
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
    FormControlLabelDrawer, IconTitle
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

const HocFeatureFlag = withLoading(FeatureFlag)

function App() {
    const [loading, setLoading] = useState(false)
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [theme, setTheme] = useState('default')
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
        //it's not working yet
        i18n.changeLanguage(language)
    }

    const changeTheme = () => {
        //Code is here
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
                            <Translate/> <h5>Languages</h5>
                        </IconTitle>
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={language}
                                onChange={({target: {value}}) => changeLanguage(value)}
                            >
                                <FormControlLabelDrawer value="en" control={<Radio size={'small'}/>} label="English"/>
                                <FormControlLabelDrawer value="pt" control={<Radio size={'small'}/>} label="Portuguese"/>
                            </RadioGroup>
                        </FormControl>

                        <DrawerDivider/>

                        <IconTitle>
                            <Palette/> <h5>Themes</h5>
                        </IconTitle>
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={theme}
                                onChange={({target: {value}}) => setTheme(value)}
                            >
                                <FormControlLabelDrawer value="default" control={<Radio/>} label="Default"/>
                                <FormControlLabelDrawer value="light" control={<Radio/>} label="Light"/>
                                <FormControlLabelDrawer value="blue" control={<Radio/>} label="Blue"/>
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
