import GeneralPanel, {GeneralPanelProps} from "./panels/General.panel";
import UserOtherSettingsPanel from "./panels/UserOtherSettings.panel";
import UserSettingsPanel, {UserSettingsPanelProps} from "./panels/UserSettings.panel";
import AlertsPanel, {AlertsPanelProps} from "./panels/Alerts.panel";
import React from "react";
import {FeatureFlagGrid} from "./FeatureFlag.styled";
import {Grid} from "@mui/material";

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

const featureFlagPanels = (
    userOtherSettingsStatus: UserSettingsPanelProps,
    userSettingsStatus: UserSettingsPanelProps,
    alertsStatus: AlertsPanelProps
) => [
    <UserOtherSettingsPanel checked={userOtherSettingsStatus.checked}
                            optionValue={userOtherSettingsStatus.optionValue}/>,
    <UserSettingsPanel checked={userSettingsStatus.checked} optionValue={userSettingsStatus.optionValue}/>,
    <AlertsPanel checked={alertsStatus.checked} optionValue={alertsStatus.optionValue}/>
]

const FeatureFlag = ({generalStatus, userOtherSettingsStatus, userSettingsStatus, alertsStatus}: FeatureFlagProps) =>
    <FeatureFlagGrid container spacing={2}>
        <GeneralPanel checked={generalStatus.checked}/>

        {featureFlagPanels(userOtherSettingsStatus, userSettingsStatus, alertsStatus).map( (panel, index) =>
            <Grid item xs={12} sm={6} md={4} align-items="center" key={`panel-${index}`}>
                {panel}
            </Grid>
        )}
    </FeatureFlagGrid>

export default FeatureFlag