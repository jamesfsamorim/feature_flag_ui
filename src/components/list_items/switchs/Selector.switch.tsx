import {ListItem, ListItemText, MenuItem, Select, Switch} from "@mui/material";
import React from "react";
import {StandardSwitchProps, SwitchProps} from "./Standard.switch";
import {useTranslation} from "react-i18next";

interface OptionsSelectorSwitchProps extends SwitchProps {
    options: SelectorOptionItem[]
}

export interface SelectorOptionItem {
    title: string
    value: string | number
}

export interface SelectorSwitchProps extends StandardSwitchProps{
    switchProps: OptionsSelectorSwitchProps
}

const SelectorSwitch = ({title, switchProps: {onChange, checked, name, options}}: SelectorSwitchProps) => {
    const {t} = useTranslation()

    return (
        <ListItem>
            <ListItemText>{t(title)}</ListItemText>
            <Select value={options[0]} >
                {options.map( (option: SelectorOptionItem) =>
                    <MenuItem value={option.value}>{option.title}</MenuItem>
                )}
            </Select>

            <Switch edge="end" onChange={onChange} checked={checked} name={name}/>
        </ListItem>
    )
}

export default SelectorSwitch