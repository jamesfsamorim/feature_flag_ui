import {
    Grid,
    List,
    ListItem,
    ListItemText,
    Switch,
    Typography
} from "@mui/material";
import React from "react";
import {useTranslation} from "react-i18next";
import {userOtherSettingsContent} from "./contents/UserOtherSettings.content";
import ListItemSwitchFactory from "../../../factories/ListItemSwitch.factory";

const UserOtherSettingsPanel = () => {
    const {t} = useTranslation()

    return (
        <Grid container md={4} direction="column" align-items="center">
            <Typography component='h5' style={{color: 'white'}}>{t('feature_flag.panels.user_settings.title')}</Typography>
            <List>
                {userOtherSettingsContent.map( content =>
                    ListItemSwitchFactory(content)
                )}
            </List>
        </Grid>
    )
}

export default UserOtherSettingsPanel