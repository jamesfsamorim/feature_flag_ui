import React, {ChangeEvent} from "react";
import SelectorSwitch, {
    SelectorOptionItem,
} from "../components/list_items/switchs/Selector.switch";
import GroupSwitch from "../components/list_items/switchs/Group.switch";
import StandardSwitch from "../components/list_items/switchs/Standard.switch";
import {FeatureFlagRequest} from "../pages/feature_flag/FeatureFlag";

export interface ListItemProps {
    title: string
    switchProps: SwitchProps
}

export interface SwitchProps {
    name: string
    onChange(event: ChangeEvent<HTMLInputElement>, checked: boolean): void
    checked: boolean | CheckedGroup
}

export interface CheckedGroup {
    [index: string]: boolean
}

export interface OptionValues {
    [index: string]: string | number
}

export interface ListItemSwitchProps extends ListItemProps{
    type: SwitchTypes
    switchProps: ExtraSwitchProps
}

export interface ExtraSwitchProps extends SwitchProps {
    options?: SelectorOptionItem[],
    children?: ListItemSwitchProps[],
    optionValue?: string | number | OptionValues
    onSelectorChange?(event: ChangeEvent<HTMLInputElement> | (Event & { target: { value: any; name: string } }), child: React.ReactNode): void
    send?(request: FeatureFlagRequest): void
}

export enum SwitchTypes {
    STANDARD = 'standard',
    GROUP = 'group',
    SELECTOR = 'selector',
}

const switchComponents = {
    [SwitchTypes.STANDARD]: StandardSwitch,
    [SwitchTypes.GROUP]: GroupSwitch,
    [SwitchTypes.SELECTOR]: SelectorSwitch,
}

const ListItemSwitchFactory = ({type, title, switchProps}: ListItemSwitchProps) => {
    if (typeof switchComponents[type] === "undefined") {
        throw new Error(`Switch component of type ${type} it does not implemented yet`)
    }
    const SwitchComponent = switchComponents[type]

    const props = switchProps as typeof SwitchComponent.arguments["switchProps"]
    return <SwitchComponent title={title} switchProps={props}/>
}

export default ListItemSwitchFactory