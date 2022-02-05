import GeneralPanel, {GeneralPanelChecked} from "./panels/General.panel";
import UserOtherSettingsPanel from "./panels/UserOtherSettings.panel";
import UserSettingsPanel from "./panels/UserSettings.panel";
import AlertsPanel from "./panels/Alerts.panel";
import React from "react";
import {FeatureFlagGrid} from "./FeatureFlag.styled";
import api from "../../config/axios/api";

interface FeatureFlagProps {
    generalStatus: GeneralPanelChecked
}

const FeatureFlag = ({generalStatus}: FeatureFlagProps) => {


    return (
        <FeatureFlagGrid container>
            <GeneralPanel checked={generalStatus}/>
            <UserOtherSettingsPanel />
            <UserSettingsPanel />
            <AlertsPanel />
        </FeatureFlagGrid>
    )
}

export default FeatureFlag