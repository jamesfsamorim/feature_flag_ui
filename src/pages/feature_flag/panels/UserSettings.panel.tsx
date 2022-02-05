import { Grid } from "@mui/material";
import React from "react";
import {FeatureFlagList, FeatureFlagPaper, FeatureFlagTitle} from "../FeatureFlag.styled";
import ListItemSwitchFactory, {ListItemSwitchProps} from "../../../factories/ListItemSwitch.factory";
import {useTranslation} from "react-i18next";
import {userSettingsContent} from "./contents/UserSettings.content";

const UserSettingsPanel = () => {
    const {t} = useTranslation()

    return (
        <Grid item md={3.88} align-items="center">
            <FeatureFlagTitle>
                <h5>{t('feature_flag.panels.user_settings.title')}</h5>
            </FeatureFlagTitle>
            <FeatureFlagList>
                {userSettingsContent.map((content, index) =>
                    <FeatureFlagPaper key={`${content.switchProps.name}-${index}`}>
                        {ListItemSwitchFactory(content as unknown as ListItemSwitchProps)}
                    </FeatureFlagPaper>
                )}
            </FeatureFlagList>
        </Grid>
    )
}

export default UserSettingsPanel