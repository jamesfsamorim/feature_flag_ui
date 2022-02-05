import {ListItem, MenuItem, Switch} from "@mui/material";
import React from "react";
import {StandardSwitchProps, SwitchProps} from "./Standard.switch";
import {useTranslation} from "react-i18next";
import {Selector, Title} from './Switch.styled'

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
            <Title>
                <h6>{t(title)}</h6>
            </Title>
            <Selector value={options[0].value} >
                {options.map( (option: SelectorOptionItem, index) =>
                    <MenuItem key={`option-${index}`} value={option.value}>{option.title}</MenuItem>
                )}
            </Selector>

            <Switch edge="end" onChange={onChange} checked={checked} name={name}/>
        </ListItem>
    )
}

export default SelectorSwitch