import React, {Suspense, useEffect, useState} from 'react';
import FeatureFlag from "./pages/feature_flag/FeatureFlag";
import {Skeleton} from "@mui/material";
import withLoading from "./hocs/loading/Circular.loading";
import AppComponent from "./App.styled";
import {emptyGeneralStatus} from "./pages/feature_flag/panels/contents/General.content";
import {emptyUserSettingsStatus} from "./pages/feature_flag/panels/contents/UserSettings.content";
import {emptyAlertsStatus} from "./pages/feature_flag/panels/contents/Alerts.content";
import api from "./config/axios/api";
import {getMockGeneralContent} from "./tests/mocks/pages/feature_flag/GeneralContent.mock";
import {getMockUserSettingsContent} from "./tests/mocks/pages/feature_flag/UserSettingsContent.mock";
import {getMockUserOtherSettingsContent} from "./tests/mocks/pages/feature_flag/UserOtherSettingsContent.mock";
import {getMockAlertsContent} from "./tests/mocks/pages/feature_flag/AlertsContent.mock";

const HocFeatureFlag = withLoading(FeatureFlag)

function App() {
    const [loading, setLoading] = useState(false)
    const [generalStatus, setGeneralStatus] = useState(emptyGeneralStatus)
    const [userSettingsStatus, setUserSettingsStatus] = useState(emptyUserSettingsStatus)
    const [userOtherSettingsStatus, setUserOtherSettingsStatus] = useState(emptyUserSettingsStatus)
    const [alertsStatus, setAlertsStatus] = useState(emptyAlertsStatus)

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

    return (
        <AppComponent>
            <Suspense fallback={<Skeleton/>}>
                <HocFeatureFlag loading={loading} generalStatus={generalStatus}
                                userOtherSettingsStatus={userOtherSettingsStatus}
                                userSettingsStatus={userSettingsStatus}
                                alertsStatus={alertsStatus}/>
            </Suspense>
        </AppComponent>
    );
}

export default App
