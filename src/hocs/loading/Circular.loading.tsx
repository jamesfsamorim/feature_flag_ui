import React from "react";
import {CircularProgress} from "@mui/material";

interface WithLoadingProps {
    loading: boolean;
}

const withLoading = <P extends object>(Component: React.ComponentType<P>): React.FC<P & WithLoadingProps> =>
    ({loading, ...props}: WithLoadingProps) =>
    loading ? <CircularProgress/> : <Component {...props as P} />;

export default withLoading