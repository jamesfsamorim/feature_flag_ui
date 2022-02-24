import React, {ChangeEvent, useContext, useState} from "react";
import {useTranslation} from "react-i18next";
import {FeatureFlagList, FeatureFlagPaper, FeatureFlagTitle} from "../FeatureFlag.styled";
import ListItemSwitchFactory, {ExtraSwitchProps, ListItemSwitchProps} from "../../../factories/ListItemSwitch.factory";
import {alertsContent} from "./contents/Alerts.content";
import {FeatureFlagRequest} from "../FeatureFlag";
import {ResponseHandlerContext} from "../../../contexts/response_handler/ResponseHandler.context";

export interface AlertsPanelChecked {
    [index: string]: boolean
    alert_manager: boolean
    alert_rules: boolean
}

export interface AlertsPanelOptionValue {
    [index: string]: string | number
    alert_rules: string | number
}

export interface AlertsPanelProps {
    checked: AlertsPanelChecked
    optionValue: AlertsPanelOptionValue
}

const AlertsPanel: React.FC<AlertsPanelProps> = ({checked, optionValue}) => {
    const {t} = useTranslation()
    const [alertsState, setAlertsState] = useState(checked)
    const [alertsOptionValueState, setAlertsOptionValueState] = useState(optionValue)
    const {setSuccessMessage} = useContext(ResponseHandlerContext)

    const send = (request: FeatureFlagRequest): void => {
        const { body, name} = request

        console.log('url sended: ', `/${name}`)
        console.log('body: ', body)
        // api.put(`/${param}`, body)

        const status = body.active ? "common.flag.activate" : "common.flag.deactivate"
        setSuccessMessage(
            t(`feature_flag.panels.alerts.${name}`),
            t('common.messages.success'),
            `${t('common.status')} ${t(status)}`
        )
    }

    const onChange = (event: ChangeEvent<HTMLInputElement>, checked: boolean) => {
        const {name} = event.target
        setAlertsState((prevState) => ({
            ...prevState,
            [name]: checked
        }))

        dispatchSend(name, checked, alertsOptionValueState[name] as any)
    }

    const onSelectorChange = (event: ChangeEvent<HTMLInputElement> | (Event & { target: { value: any; name: string } }), child: React.ReactNode) => {
        const {name, value} = event.target
        setAlertsOptionValueState((prevState) => ({
            ...prevState,
            [name]: value
        }))

        dispatchSend(name, alertsState[name] as boolean, value)
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
                <h5>{t('feature_flag.panels.alerts.title')}</h5>
            </FeatureFlagTitle>
            <FeatureFlagList>
                {alertsContent.map((content, index) =>
                    <FeatureFlagPaper key={`${content.switchProps.name}-${index}`}>
                        {ListItemSwitchFactory({
                            ...content as ListItemSwitchProps,
                            switchProps: {
                                ...content.switchProps as ExtraSwitchProps,
                                checked: alertsState[content.switchProps.name],
                                optionValue: alertsOptionValueState[content.switchProps.name],
                                onChange,
                                onSelectorChange
                            }
                        })}
                    </FeatureFlagPaper>
                )}
            </FeatureFlagList>
        </>
    )
}


export default AlertsPanel