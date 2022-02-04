import {Grid, List, ListItem, ListItemText, MenuItem, Select, Switch, Typography} from "@mui/material";
import React from "react";

const AlertsPanel = () =>
    <Grid container md={4} direction="column" align-items="center">
        <Typography component='h5' style={{color: 'white'}}>alerts</Typography>
        <List sx={{bgcolor: '#1b1c20'}}>
            <ListItem>
                <ListItemText sx={{color: 'white'}}>alert manager</ListItemText>
                <Switch edge="end" color='primary'/>
            </ListItem>
            <ListItem>
                <ListItemText sx={{color: 'white'}}>alert rules</ListItemText>
                <Select value={10} sx={{color: 'white'}}>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                </Select>
                <Switch edge="end" color='primary'/>
            </ListItem>
        </List>
    </Grid>

export default AlertsPanel