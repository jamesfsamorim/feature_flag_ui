import styled from "styled-components";
import {Drawer, Fab, FormControlLabel} from "@mui/material";

export const AppComponent = styled.div`
  witdh: 100%;
  height: 100%;
`

export const FloatingButton = styled(Fab)`
  position: absolute !important;
  right: ${({theme}) => theme.paddings.default};
  top: ${({theme}) => theme.paddings.default};
  z-index: 2;
`

export const AppDrawer = styled(Drawer)`
  .MuiPaper-root-MuiDrawer-paper {
    background-color: ${({theme}) => theme.colors.secondary};
  }
`

export const DrawerPaper = styled.div`
  width: 200px;
  height: 100%;
  padding: ${({theme}) => theme.paddings.default};
  background-color: ${({theme}) => theme.colors.secondary};
  color: ${({theme}) => theme.colors.text};
  font-size: ${({theme}) => theme.fonts.sizes.small};
`

export const DrawerDivider = styled.hr`
  margin-top: ${({theme}) => theme.paddings.default};
  margin-bottom: ${({theme}) => theme.paddings.default};
`

export const IconTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`