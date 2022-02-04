import React from "react";
import SelectorSwitch, {
    SelectorOptionItem,
} from "../components/list_items/switchs/Selector.switch";
import GroupSwitch, {GroupSwitchProps} from "../components/list_items/switchs/Group.switch";
import StandardSwitch, {StandardSwitchProps, SwitchProps} from "../components/list_items/switchs/Standard.switch";

export enum SwitchTypes {
    STANDARD = 'standard',
    GROUP = 'group',
    SELECTOR = 'selector',
}

interface OptionsAndChildrenSwitchProps extends SwitchProps {
    options: SelectorOptionItem[],
    children: ListItemSwitchProps[]
}

export interface ListItemSwitchProps extends StandardSwitchProps {
    type: SwitchTypes
    switchProps: OptionsAndChildrenSwitchProps
}

const ListItemSwitchFactory = ({type, title, switchProps}: ListItemSwitchProps) => {
    const switchComponents = {
        [SwitchTypes.STANDARD]: StandardSwitch,
        [SwitchTypes.GROUP]: GroupSwitch,
        [SwitchTypes.SELECTOR]: SelectorSwitch,
    }

    if (typeof switchComponents[type] !== "undefined") {
        throw new Error(`Switch component of type ${type} it does not implemented yet`)
    }

    const SwitchComponent = switchComponents[type]

    return <SwitchComponent title={title} switchProps={switchProps}/>
}

export default ListItemSwitchFactory