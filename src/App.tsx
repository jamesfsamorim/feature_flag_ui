import React, {Suspense, useEffect, useState} from 'react';
import FeatureFlag from "./pages/feature_flag/FeatureFlag";
import {
    Skeleton
} from "@mui/material";
import withLoading from "./hocs/loading/Circular.loading";
import {
    AppComponent,
    FloatingButton,
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
import AppDrawer from "./components/drawers/App.drawer";

const HocFeatureFlag = withLoading(FeatureFlag)

function App() {
    const [loading, setLoading] = useState(false)
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [generalStatus, setGeneralStatus] = useState(emptyGeneralStatus)
    const [userSettingsStatus, setUserSettingsStatus] = useState(emptyUserSettingsStatus)
    const [userOtherSettingsStatus, setUserOtherSettingsStatus] = useState(emptyUserSettingsStatus)
    const [alertsStatus, setAlertsStatus] = useState(emptyAlertsStatus)

    const getGeneralStatus = async () => {
        setGeneralStatus(await getMockGeneralContent())
        // return await api.get('/featureFlag/general')
    }

    const getUserSettingsStatus = async () => {
        setUserSettingsStatus(await getMockUserSettingsContent())
        // return await api.get('/featureFlag/user/settings')
    }

    const getUserOtherSettingsStatus = async () => {
        setUserOtherSettingsStatus(await getMockUserOtherSettingsContent())
        // return await api.get('/featureFlag/user/other/settings')
    }

    const getAlertsStatus = async () => {
        setAlertsStatus(await getMockAlertsContent())
        // return await api.get('/featureFlag/alerts')
    }

    const getFeatureFlagStatus = async (): Promise<void> => {
        await getGeneralStatus()
        await getAlertsStatus()
        await getUserSettingsStatus()
        await getUserOtherSettingsStatus()
    }

    useEffect(() => {
        setLoading(true)
        getFeatureFlagStatus().finally(() => setLoading(false))
    }, [])

    return (
        <AppComponent>
            <Suspense fallback={<Skeleton/>}>
                <FloatingButton onClick={() => setIsDrawerOpen(true)} size={'small'}>
                    <Settings/>
                </FloatingButton>

                <AppDrawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen}/>

                <HocFeatureFlag loading={loading} generalStatus={generalStatus}
                                userOtherSettingsStatus={userOtherSettingsStatus}
                                userSettingsStatus={userSettingsStatus}
                                alertsStatus={alertsStatus}/>
            </Suspense>
        </AppComponent>
    );
}

export default App
