import {ListItem, ListItemText, Switch} from "@mui/material";
import React, {ChangeEvent} from "react";
import {useTranslation} from "react-i18next";

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
            <ListItemText sx={{color: 'white'}}>
                {t(title)}
            </ListItemText>

            <Switch edge="end" onChange={onChange} checked={checked} name={name}/>
        </ListItem>
    )
}

export default StandardSwitch