import {ListItem, Switch} from "@mui/material";
import React, {ChangeEvent} from "react";
import {useTranslation} from "react-i18next";
import {Title} from './Switch.styled'

export interface SwitchProps {
    name: string
    onChange(event: ChangeEvent<HTMLInputElement>, checked: boolean): void
    checked: boolean
}

export interface StandardSwitchProps {
    title: string
    switchProps: SwitchProps
}

const StandardSwitch = ({title, switchProps: {onChange, checked, name}}: StandardSwitchProps) => {
    const {t} = useTranslation()

    return (
        <ListItem>
            <Title>
                <h6>{t(title)}</h6>
            </Title>

            <Switch edge="end" onChange={onChange} checked={checked} name={name}/>
        </ListItem>
    )
}

export default StandardSwitch