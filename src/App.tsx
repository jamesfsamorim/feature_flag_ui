import React, {Suspense, useEffect, useState} from 'react';
import FeatureFlag from "./pages/feature_flag/FeatureFlag";
import {CircularProgress} from "@mui/material";
import withLoading from "./hocs/loading/Circular.loading";
import AppComponent from "./App.styled";
import {GeneralPanelChecked} from "./pages/feature_flag/panels/General.panel";
const HocFeatureFlag = withLoading(FeatureFlag)

function App() {
    const [loading, setLoading] = useState(false)
    const [generalStatus, setGeneralStatus] = useState({
        case_management: false,
        map_timeline: false,
        mass_communications: true,
        notifications: false,
        traffic_cameras: true,
        views_briefings: false,
    } as GeneralPanelChecked)

    useEffect(() => {

    }, [])

    const getGeneralStatus = () => {

    }

    return (
        <AppComponent >
            <Suspense fallback={<CircularProgress/>}>
                <HocFeatureFlag loading={loading} generalStatus={generalStatus}/>
            </Suspense>
        </AppComponent>
    );
}

export default App
