import {Grid} from "@mui/material";
import React, {ChangeEvent, useState} from "react";
import {FeatureFlagList, FeatureFlagPaper, FeatureFlagTitle} from "../FeatureFlag.styled";
import ListItemSwitchFactory, {
    ExtraSwitchProps,
    ListItemSwitchProps,
    OptionValues
} from "../../../factories/ListItemSwitch.factory";
import {useTranslation} from "react-i18next";
import {userSettingsContent} from "./contents/UserSettings.content";
import {FeatureFlagRequest} from "../FeatureFlag";

interface UsersGroupChecked {
    [index: string]: boolean
    user_add: boolean
    user_update: boolean
    user_delete: boolean
    user_max_users: boolean
}

interface UsersGroupOptionValue {
    [index: string]: string | number
    user_max_users: string | number
}

export interface UserSettingsPanelChecked {
    [index: string]: boolean | UsersGroupChecked
    audit_log: boolean
    users: UsersGroupChecked,
}

export interface UserSettingsPanelOptionValue {
    [index: string]: string | number | OptionValues

    users: UsersGroupOptionValue
}

export interface UserSettingsPanelProps {
    checked: UserSettingsPanelChecked
    optionValue: UserSettingsPanelOptionValue
}

const UserSettingsPanel: React.FC<UserSettingsPanelProps> = ({checked, optionValue}) => {
    const {t} = useTranslation()
    const [userSettingsState, setUserSettingsState] = useState(checked)
    const [userSettingsOptionValueState, setUserSettingsOptionValueState] = useState(optionValue)

    const send = (request: FeatureFlagRequest): void => {
        const {body, name} = request

        console.log('url sended: ', `/user/settings/${name}`)
        console.log('body: ', body)
        // api.put(`/user/settings/${param}`, body)
    }

    const onChange = (event: ChangeEvent<HTMLInputElement>, checked: boolean): void => {
        const {name} = event.target

        setUserSettingsState((prevState) => ({
            ...prevState,
            [name]: checked
        }))

        dispatchSend(name, checked, userSettingsOptionValueState[name] as any)
    }

    const onSelectorChange = (event: ChangeEvent<HTMLInputElement> | (Event & { target: { value: any; name: string } }), child: React.ReactNode) => {
        const {name, value} = event.target
        setUserSettingsOptionValueState((prevState) => ({
            ...prevState,
            [name]: value
        }))

        dispatchSend(name, userSettingsState[name] as boolean, value)
    }

    const dispatchSend = (name: string, active: boolean, currentValue?: string | number) => {
        const value = typeof currentValue !== "undefined" ? currentValue : null

        const body = active && value ? {active, value} : {active}
        const request: FeatureFlagRequest = {name, body}

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
                                checked: userSettingsState[content.switchProps.name],
                                optionValue: userSettingsOptionValueState[content.switchProps.name],
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

export default UserSettingsPanel