import { Grid } from "@mui/material";
import React from "react";
import {useTranslation} from "react-i18next";
import {userOtherSettingsContent} from "./contents/UserOtherSettings.content";
import ListItemSwitchFactory, {ListItemSwitchProps} from "../../../factories/ListItemSwitch.factory";
import {FeatureFlagList, FeatureFlagPaper, FeatureFlagTitle} from "../FeatureFlag.styled";

const UserOtherSettingsPanel = () => {
    const {t} = useTranslation()

    return (
        <Grid item md={3.88} align-items="center">
            <FeatureFlagTitle>
                <h5>{t('feature_flag.panels.user_settings.title')}</h5>
            </FeatureFlagTitle>
            <FeatureFlagList>
                {userOtherSettingsContent.map((content, index) =>
                    <FeatureFlagPaper key={`${content.switchProps.name}-${index}`}>
                        {ListItemSwitchFactory(content as unknown as ListItemSwitchProps)}
                    </FeatureFlagPaper>
                )}
            </FeatureFlagList>
        </Grid>
    )
}

export default UserOtherSettingsPanel