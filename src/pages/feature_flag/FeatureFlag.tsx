import GeneralPanel, {GeneralPanelProps} from "./panels/General.panel";
import UserOtherSettingsPanel from "./panels/UserOtherSettings.panel";
import UserSettingsPanel, {UserSettingsPanelProps} from "./panels/UserSettings.panel";
import AlertsPanel, {AlertsPanelProps} from "./panels/Alerts.panel";
import React from "react";
import {FeatureFlagGrid} from "./FeatureFlag.styled";
import api from "../../config/axios/api";

interface FeatureFlagProps {
    generalStatus: GeneralPanelProps
    userSettingsStatus: UserSettingsPanelProps
    userOtherSettingsStatus: UserSettingsPanelProps
    alertsStatus: AlertsPanelProps
}

interface RequestBody {
    active: boolean
}

interface RequestBodyWithValue extends RequestBody {
    value?: string | number
}

export interface FeatureFlagRequest {
    name: string
    body: RequestBody | RequestBodyWithValue
}

const FeatureFlag = ({generalStatus, userOtherSettingsStatus, userSettingsStatus, alertsStatus}: FeatureFlagProps) =>
    <FeatureFlagGrid container>
        <GeneralPanel checked={generalStatus.checked}/>
        <UserOtherSettingsPanel checked={userOtherSettingsStatus.checked}
                                optionValue={userOtherSettingsStatus.optionValue}/>
        <UserSettingsPanel checked={userSettingsStatus.checked} optionValue={userSettingsStatus.optionValue}/>
        <AlertsPanel checked={alertsStatus.checked} optionValue={alertsStatus.optionValue}/>
    </FeatureFlagGrid>

export default FeatureFlag