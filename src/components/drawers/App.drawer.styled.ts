import styled from "styled-components";
import {Drawer} from "@mui/material";

export const AppDrawerComponent = styled(Drawer)`
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