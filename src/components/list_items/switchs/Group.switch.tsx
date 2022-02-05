import React from "react";
import {
    AccordionDetails,
    AccordionSummary,
    List,
    Switch
} from "@mui/material";
import {StandardSwitchProps, SwitchProps} from "./Standard.switch";
import {useTranslation} from "react-i18next";
import ListItemSwitchFactory, {ListItemSwitchProps} from "../../../factories/ListItemSwitch.factory";
import {AccordionSwitch, ExpandMoreIcon, Title} from './Switch.styled'

export interface ChildrenGroupSwitchProps extends SwitchProps {
    children: ListItemSwitchProps[]
}

export interface GroupSwitchProps extends StandardSwitchProps{
    switchProps: ChildrenGroupSwitchProps
}

const GroupSwitch = ({title, switchProps: {name, checked, onChange, children}}: GroupSwitchProps) => {
    const {t} = useTranslation()

    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <AccordionSwitch expanded={expanded === 'panel1'} onChange={handleChange('panel1')} square>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
            >
                <Title>
                    <h6>{t(title)}</h6>
                </Title>
                <Switch edge="end" onChange={onChange} checked={checked} name={name}/>
            </AccordionSummary>
            <AccordionDetails>
                <List>
                    {children.map( (item: ListItemSwitchProps, index) =>
                        <React.Fragment key={`${item.switchProps.name}-${index}`}>
                            {ListItemSwitchFactory(item)}
                        </React.Fragment>
                    )}
                </List>
            </AccordionDetails>
        </AccordionSwitch>
    )
}
export default GroupSwitch