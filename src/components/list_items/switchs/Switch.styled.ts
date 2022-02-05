import styled from "styled-components";
import {Accordion, ListItemText, Select} from "@mui/material";
import {ExpandMore} from "@mui/icons-material";

export const Title = styled(ListItemText)`
  padding-left: ${({theme}) => theme.paddings.default};
`

export const ExpandMoreIcon = styled(ExpandMore)`
  color: ${({theme}) => theme.colors.text};
`

export const AccordionSwitch = styled(Accordion)`
  background-color: ${({theme}) => theme.colors.primary} !important;
  color: ${({theme}) => theme.colors.text} !important;
`

export const Selector = styled(Select)`
  color: ${({theme}) => theme.colors.text} !important;

  .MuiSelect-select {
    padding: 10px 14px;
  }

  .MuiSelect-icon {
    color: ${({theme}) => theme.colors.text};
  }

  .MuiOutlinedInput-notchedOutline {
    border-color: ${({theme}) => theme.colors.text};
  }

  //Arrumar hover no select
  // .MuiOutlinedInput-root:hover {
  //   border-color: ${({theme}) => theme.colors.text};
  // }
`