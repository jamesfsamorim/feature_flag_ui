import {ListItem, Switch} from "@mui/material";
import React from "react";
import {useTranslation} from "react-i18next";
import {Title} from './Switch.styled'
import {ListItemProps, SwitchProps} from "../../../factories/ListItemSwitch.factory";

interface StandardProps extends SwitchProps{
    checked: boolean
}

export interface StandardSwitchProps extends ListItemProps{
    switchProps: StandardProps
    children?: React.ReactNode
}

const StandardSwitch = ({children, title, switchProps: {onChange, checked, name}}: StandardSwitchProps) => {
    const {t} = useTranslation()

    return (
        <ListItem>
            <Title>
                <h6>{t(title)}</h6>
            </Title>
            {children}

            <Switch edge="end" onChange={onChange} checked={checked} name={name}/>
        </ListItem>
    )
}

export default StandardSwitch