import React, {ChangeEvent, useEffect, useState} from "react";
import {
    AccordionDetails,
    AccordionSummary,
    List,
    Switch
} from "@mui/material";
import {useTranslation} from "react-i18next";
import ListItemSwitchFactory, {
    CheckedGroup,
    ExtraSwitchProps, ListItemProps,
    ListItemSwitchProps, OptionValues,
    SwitchProps
} from "../../../factories/ListItemSwitch.factory";
import {AccordionSwitch, ExpandMoreIcon, Title} from './Switch.styled'
import {FeatureFlagRequest} from "../../../pages/feature_flag/FeatureFlag";

export interface ChildrenGroupSwitchProps extends SwitchProps {
    children: ListItemSwitchProps[]
    checked: CheckedGroup
    optionValue?: OptionValues
    onSelectorChange?(event: ChangeEvent<HTMLInputElement> | (Event & { target: { value: any; name: string } }), child: React.ReactNode): void
    send(request: FeatureFlagRequest): void
}

export interface GroupSwitchProps extends ListItemProps {
    switchProps: ChildrenGroupSwitchProps
}

const GroupSwitch = ({title, switchProps: {name, checked, send, children, optionValue}}: GroupSwitchProps) => {
    const {t} = useTranslation()
    const [expanded, setExpanded] = useState<string | boolean>(false);
    const [isCheck, setIsCheck] = useState(false)
    const [childrenCheckedState, setChildrenCheckedState] = useState(checked)
    const [childrenOptionValueState, setChildrenOptionValueState] = useState(optionValue)

    useEffect(() => {
        const hasOnFlag = Object.values(checked).filter(isChecked => isChecked)
        setIsCheck(!!hasOnFlag.length)
    },[])

    useEffect(() => {
        isCheck && setExpanded("panel")
    }, [isCheck])

    const onChangeAccordion = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        isCheck && setExpanded(isExpanded ? panel : false);
    }

    const onSwitchChange = (event: ChangeEvent<HTMLInputElement>, checked: boolean): void => {
        setExpanded(checked)
        setIsCheck(checked)

        !checked && children.forEach( item =>  {
            setChildrenCheckedState((prevState) => ({
                ...prevState,
                [item.switchProps.name]: false
            }))
            send({name: item.switchProps.name, body: {active: true}})
        })
    }

    const onChildrenChange = (event: ChangeEvent<HTMLInputElement>, checked: boolean): void => {
        const {name} = event.target
        setChildrenCheckedState((prevState) => ({
            ...prevState,
            [name]: checked
        }))

        childrenOptionValueState
            ? dispatchSend(name, checked, childrenOptionValueState[name]) : dispatchSend(name, checked)
    }

    const onChildrenSelectorChange = (event: ChangeEvent<HTMLInputElement> | (Event & { target: { value: any; name: string } }), child: React.ReactNode): void => {
        const {name, value} = event.target
        setChildrenOptionValueState((prevState) => ({
            ...prevState,
            [name]: value
        }))

        dispatchSend(name, childrenCheckedState[name], value)
    }

    const dispatchSend = (name: string, active: boolean, currentValue?: string | number) => {
        const value = typeof currentValue !== "undefined" ? currentValue : null

        const body = active && value ? {active, value} : {active}
        const request: FeatureFlagRequest = {name, body}

        send(request)
    }

    return (
        <AccordionSwitch expanded={expanded === "panel"} onChange={onChangeAccordion("panel")} square>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panelbh-content"
                id="panelbh-header"
            >
                <Title>
                    <h6>{t(title)}</h6>
                </Title>
                <Switch edge="end" onChange={onSwitchChange} checked={isCheck} name={name}/>
            </AccordionSummary>
            <AccordionDetails>
                <List>
                    {children.map((item: ListItemSwitchProps, index) =>
                        <React.Fragment key={`${item.switchProps.name}-${index}`}>
                            {ListItemSwitchFactory({
                                ...item as ListItemSwitchProps,
                                switchProps: {
                                    ...item.switchProps as ExtraSwitchProps,
                                    checked: childrenCheckedState[item.switchProps.name],
                                    optionValue: childrenOptionValueState ? childrenOptionValueState[item.switchProps.name] : undefined,
                                    onChange: onChildrenChange,
                                    onSelectorChange: onChildrenSelectorChange
                                }
                            })}
                        </React.Fragment>
                    )}
                </List>
            </AccordionDetails>
        </AccordionSwitch>
    )
}
export default GroupSwitch