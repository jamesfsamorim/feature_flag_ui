import {Grid} from "@mui/material";
import React, {ChangeEvent, useState} from "react";
import {generalContent} from "./contents/General.content";
import ListItemSwitchFactory, {ListItemSwitchProps} from "../../../factories/ListItemSwitch.factory";
import {useTranslation} from "react-i18next";
import {FeatureFlagListAlternative} from "../FeatureFlag.styled";
import {FeatureFlagRequest} from "../FeatureFlag";

export interface GeneralPanelChecked {
    [index: string]: boolean
    case_management: boolean
    map_timeline: boolean
    views_briefings: boolean
    notifications: boolean
    mass_communications: boolean
    traffic_cameras: boolean
}

export interface GeneralPanelProps {
    checked: GeneralPanelChecked
}

const GeneralPanel: React.FC<GeneralPanelProps> = ({checked}) => {
    const {t} = useTranslation()
    const [generalState, setGeneralState] = useState(checked)

    const send = (request: FeatureFlagRequest): void => {
        const { body, name} = request

        console.log('url sended: ', `/${name}`)
        console.log('body: ', body)
        // api.put(`/${param}`, body)
    }

    const onChange = (event: ChangeEvent<HTMLInputElement>, checked: boolean) => {
        const {name} = event.target
        setGeneralState((prevState) => ({
            ...prevState,
            [name]: checked
        }))

        const request: FeatureFlagRequest = {
            name,
            body: {active: checked}
        }

        send(request)
    }

    return (
        <>
            <h5>{t('feature_flag.panels.general.title')}</h5>
            <Grid container spacing={2} columns={{md: 12}}>
                {generalContent.map((content, index) =>
                    <Grid item md={4} key={`${content.switchProps.name}-${index}`}>
                        <FeatureFlagListAlternative>
                            {ListItemSwitchFactory({
                                ...content as ListItemSwitchProps,
                                switchProps: {
                                    ...content.switchProps,
                                    checked: generalState[content.switchProps.name],
                                    onChange,
                                }
                            })}
                        </FeatureFlagListAlternative>
                    </Grid>
                )}
            </Grid>
        </>
    )
}

export default GeneralPanel