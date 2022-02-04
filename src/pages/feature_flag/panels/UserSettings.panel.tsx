import {
    Accordion,
    AccordionDetails,
    AccordionSummary, Grid,
    List,
    ListItem,
    ListItemText, MenuItem,
    Select,
    Switch, Typography
} from "@mui/material";
import {ExpandMore} from "@mui/icons-material";
import React from "react";

const UserSettingsPanel = () => {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <Grid container md={4} direction="column" align-items="center">
            <Typography component='h5' style={{color: 'white'}}>settings</Typography>
            <List sx={{bgcolor: '#1b1c20'}}>
                <ListItem>
                    <ListItemText sx={{color: 'white'}}>audit log</ListItemText>
                    <Switch edge="end" color='primary'/>
                </ListItem>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{bgcolor: '#1b1c20'}}>
                    <AccordionSummary
                        expandIcon={<ExpandMore sx={{color: 'white'}}/>}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <ListItemText sx={{color: 'white'}}>users</ListItemText>
                        <Switch edge="end" color='primary'/>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List sx={{bgcolor: '#1b1c20'}}>
                            <ListItem>
                                <ListItemText sx={{color: 'white'}}>users add</ListItemText>
                                <Switch edge="end" color='primary'/>
                            </ListItem>
                            <ListItem>
                                <ListItemText sx={{color: 'white'}}>user delete</ListItemText>
                                <Switch edge="end" color='primary'/>
                            </ListItem>
                            <ListItem>
                                <ListItemText sx={{color: 'white'}}>users edit</ListItemText>
                                <Switch edge="end" color='primary'/>
                            </ListItem>
                            <ListItem>
                                <ListItemText sx={{color: 'white'}}>max users</ListItemText>
                                <Select value={10} sx={{color: 'white'}}>
                                    <MenuItem value={10}>10</MenuItem>
                                    <MenuItem value={15}>15</MenuItem>
                                    <MenuItem value={20}>20</MenuItem>
                                </Select>
                                <Switch edge="end" color='primary'/>
                            </ListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>
            </List>
        </Grid>
    )
}

export default UserSettingsPanel