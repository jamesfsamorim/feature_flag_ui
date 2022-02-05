import React from "react";
import SelectorSwitch, {
    SelectorOptionItem,
} from "../components/list_items/switchs/Selector.switch";
import GroupSwitch from "../components/list_items/switchs/Group.switch";
import StandardSwitch, {StandardSwitchProps, SwitchProps} from "../components/list_items/switchs/Standard.switch";

export enum SwitchTypes {
    STANDARD = 'standard',
    GROUP = 'group',
    SELECTOR = 'selector',
}

interface OptionsAndChildrenSwitchProps extends SwitchProps {
    options?: SelectorOptionItem[],
    children?: ListItemSwitchProps[]
}

export interface ListItemSwitchProps extends StandardSwitchProps {
    type: SwitchTypes
    switchProps: OptionsAndChildrenSwitchProps
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