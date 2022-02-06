import {ListItem, MenuItem, Switch} from "@mui/material";
import React, {ChangeEvent, useState} from "react";
import {useTranslation} from "react-i18next";
import {Selector, Title} from './Switch.styled'
import {ListItemProps, SwitchProps} from "../../../factories/ListItemSwitch.factory";

interface OptionsSelectorSwitchProps extends SwitchProps {
    options: SelectorOptionItem[]
    onSelectorChange(event: ChangeEvent<HTMLInputElement> | (Event & { target: { value: any; name: string } }), child: React.ReactNode): void
    optionValue: string | number
    checked: boolean
}

export interface SelectorOptionItem {
    title: string
    value: string | number
}

export interface SelectorSwitchProps extends ListItemProps {
    switchProps: OptionsSelectorSwitchProps
}

const SelectorSwitch = ({title, switchProps: {onChange, onSelectorChange, checked, name, options, optionValue}}: SelectorSwitchProps) => {
    const [selectorDisabled, setSelectorDisabled] = useState(!checked)
    const {t} = useTranslation()

    const onChangeSwitch = (event: ChangeEvent<HTMLInputElement>, checked: boolean): void => {
        setSelectorDisabled(!checked)
        onChange(event, checked)
    }

    return (
        <ListItem>
            <Title>
                <h6>{t(title)}</h6>
            </Title>
            <Selector value={optionValue} disabled={selectorDisabled} onChange={onSelectorChange} name={name}>
                {options.map( (option: SelectorOptionItem, index) =>
                    <MenuItem key={`option-${index}`} value={option.value}>{option.title}</MenuItem>
                )}
            </Selector>

            <Switch edge="end" onChange={onChangeSwitch} checked={checked} name={name}/>
        </ListItem>
    )
}

export default SelectorSwitch