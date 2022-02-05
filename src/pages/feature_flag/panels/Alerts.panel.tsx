import { Grid } from "@mui/material";
import React from "react";
import {useTranslation} from "react-i18next";
import {FeatureFlagList, FeatureFlagPaper, FeatureFlagTitle} from "../FeatureFlag.styled";
import ListItemSwitchFactory, {ListItemSwitchProps} from "../../../factories/ListItemSwitch.factory";
import {alertsContent} from "./contents/Alerts.content";

const AlertsPanel = () => {
    const {t} = useTranslation()

    return (
        <Grid item md={3.88} align-items="center">
            <FeatureFlagTitle>
                <h5>{t('feature_flag.panels.alerts.title')}</h5>
            </FeatureFlagTitle>
            <FeatureFlagList>
                {alertsContent.map((content, index) =>
                    <FeatureFlagPaper key={`${content.switchProps.name}-${index}`}>
                        {ListItemSwitchFactory(content as unknown as ListItemSwitchProps)}
                    </FeatureFlagPaper>
                )}
            </FeatureFlagList>
        </Grid>
    )
}


export default AlertsPanel