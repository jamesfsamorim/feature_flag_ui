import {MenuItem} from "@mui/material";
import React, {ChangeEvent} from "react";
import {Selector} from './Switch.styled'
import {ListItemProps, SwitchProps} from "../../../factories/ListItemSwitch.factory";
import StandardSwitch from "./Standard.switch";

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

const SelectorSwitch = ({
                            title,
                            switchProps: {onChange, onSelectorChange, checked, name, options, optionValue}
                        }: SelectorSwitchProps) =>
    <StandardSwitch title={title} switchProps={{name, checked, onChange}}>
        <Selector value={optionValue} disabled={!checked} onChange={onSelectorChange} name={name}>
            {options.map((option: SelectorOptionItem, index) =>
                <MenuItem key={`option-${index}`} value={option.value}>{option.title}</MenuItem>
            )}
        </Selector>
    </StandardSwitch>

export default SelectorSwitch