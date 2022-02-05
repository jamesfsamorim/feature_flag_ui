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
  gap: 15px;
`

export const FeatureFlagPaper = styled.div`
  background-color: ${({theme}) => theme.colors.primary};
  margin-left: ${({theme}) => theme.paddings.small};
  margin-right: ${({theme}) => theme.paddings.small};
  margin-bottom: ${({theme}) => theme.paddings.small};
`