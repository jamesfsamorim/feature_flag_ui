import styled from "styled-components";
import {Fab} from "@mui/material";

export const AppComponent = styled.div`
  width: 100%;
  height: 100%;
`

export const FloatingButton = styled(Fab)`
  position: absolute !important;
  right: ${({theme}) => theme.paddings.default};
  top: ${({theme}) => theme.paddings.default};
  z-index: 2;
`