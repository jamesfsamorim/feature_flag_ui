import {Grid, List} from "@mui/material";
import styled from "styled-components";

export const FeatureFlagList = styled(List)`
  background-color: ${({theme}) => theme.colors.secondary};
`

export const FeatureFlagListAlternative = styled(List)`
  background-color: ${({theme}) => theme.colors.primary};
`

export const FeatureFlagTitle = styled.div`
  padding-bottom: ${({theme}) => theme.paddings.default};
`

export const FeatureFlagGrid = styled(Grid)`
  padding: ${({theme}) => theme.paddings.default};
  padding-top: 50px;
`

export const FeatureFlagPaper = styled.div`
  background-color: ${({theme}) => theme.colors.primary};
  margin-left: ${({theme}) => theme.paddings.small};
  margin-right: ${({theme}) => theme.paddings.small};
  margin-bottom: ${({theme}) => theme.paddings.small};
`

export const GeneralPanelGrid = styled(Grid)`
  padding-left: ${({theme}) => theme.paddings.default};
`

export const GeneralPanelTitle = styled(Grid)`
  padding-left: ${({theme}) => theme.paddings.default};
  padding-bottom: ${({theme}) => theme.paddings.default};
`