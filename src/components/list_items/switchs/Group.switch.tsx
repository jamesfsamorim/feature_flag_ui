import React from "react";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    List,
    ListItemText,
    Switch
} from "@mui/material";
import {ExpandMore} from "@mui/icons-material";
import {StandardSwitchProps, SwitchProps} from "./Standard.switch";
import {useTranslation} from "react-i18next";
import ListItemSwitchFactory, {ListItemSwitchProps} from "../../../factories/ListItemSwitch.factory";

interface ChildrenGroupSwitchProps extends SwitchProps {
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
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
            <AccordionSummary
                expandIcon={<ExpandMore sx={{color: 'white'}}/>}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
            >
                <ListItemText>{t(title)}</ListItemText>
                <Switch edge="end" onChange={onChange} checked={checked} name={name}/>
            </AccordionSummary>
            <AccordionDetails>
                <List>
                    {children.map( (switchProps) =>
                        ListItemSwitchFactory(switchProps)
                    )}
                </List>
            </AccordionDetails>
        </Accordion>
    )
}
export default GroupSwitch