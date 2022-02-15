import { Grid } from "@mui/material";
import React, {ChangeEvent, useState} from "react";
import {useTranslation} from "react-i18next";
import ListItemSwitchFactory, {ExtraSwitchProps, ListItemSwitchProps} from "../../../factories/ListItemSwitch.factory";
import {FeatureFlagList, FeatureFlagPaper, FeatureFlagTitle} from "../FeatureFlag.styled";
import {userSettingsContent} from "./contents/UserSettings.content";
import {UserSettingsPanelProps} from "./UserSettings.panel";
import {FeatureFlagRequest} from "../FeatureFlag";

const UserOtherSettingsPanel: React.FC<UserSettingsPanelProps> = ({checked, optionValue}) => {
    const {t} = useTranslation()
    const [userOtherSettingsState, setUserOtherSettingsState] = useState(checked)
    const [userOtherSettingsOptionValueState, setUserOtherSettingsOptionValueState] = useState(optionValue)

    const send = (request: FeatureFlagRequest): void => {
        const { body, name} = request

        console.log('url sended: ', `/user/other/settings/${name}`)
        console.log('body: ', body)
        // api.put(`/user/other/settings/${param}`, body)
    }

    const onChange = (event: ChangeEvent<HTMLInputElement>, checked: boolean) => {
        const {name} = event.target
        setUserOtherSettingsState((prevState) => ({
            ...prevState,
            [name]: checked
        }))

        dispatchSend(name, checked, userOtherSettingsOptionValueState[name] as any)
    }

    const onSelectorChange = (event: ChangeEvent<HTMLInputElement> | (Event & { target: { value: any; name: string } }), child: React.ReactNode) => {
        const {name, value} = event.target
        setUserOtherSettingsOptionValueState((prevState) => ({
            ...prevState,
            [name]: value
        }))

        dispatchSend(name, userOtherSettingsState[name] as boolean, value)
    }

    const dispatchSend = (name: string, active: boolean, currentValue?: string | number) => {
        const value = typeof currentValue !== "undefined" ? currentValue : null

        const body = active && value ? {active, value} : {active}
        const request: FeatureFlagRequest = { name, body }

        send(request)
    }

    return (
        <>
            <FeatureFlagTitle>
                <h5>{t('feature_flag.panels.user_settings.title')}</h5>
            </FeatureFlagTitle>
            <FeatureFlagList>
                {userSettingsContent.map((content, index) =>
                    <FeatureFlagPaper key={`${content.switchProps.name}-${index}`}>
                        {ListItemSwitchFactory({
                            ...content as ListItemSwitchProps,
                            switchProps: {
                                ...content.switchProps as ExtraSwitchProps,
                                checked: userOtherSettingsState[content.switchProps.name],
                                optionValue: userOtherSettingsOptionValueState[content.switchProps.name],
                                onChange,
                                onSelectorChange,
                                send
                            }
                        })}
                    </FeatureFlagPaper>
                )}
            </FeatureFlagList>
        </>
    )
}

export default UserOtherSettingsPanel