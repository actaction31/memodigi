import React, { useState } from "react";
import {
    Grid,
    IconButton,
    Typography,
    Drawer,
    ListItemButton,
    ListItem,
    ListItemText,
    List,
    Box,
    Slider,
    Divider,
} from "@mui/material";
import {
    VolumeUp,
    Menu,
    ArrowBackIos,
    InfoOutlined,
    RateReviewOutlined,
    ReplyOutlined,
    FmdGoodOutlined,
    Close,
} from "@mui/icons-material";

const Header = () => {
    const [ state, setState ] = useState(false);
    const toggleDrawer = () => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState(!state);
    };

    const list = () => (
        <Box
            sx={ {
                width: 250,
                backgroundColor: "secondary.main",
                height: "100%",
                minHeight: "100vh",
                paddingLeft: "20px",
                paddingRight: "20px",
            } }
            // onClick={toggleDrawer()}
            onKeyDown={ toggleDrawer() }
        >
            <List>
                <Grid
                    display={ "flex" }
                    flexDirection={ "row" }
                    justifyContent={ "flex-end" }
                    pt={ 2 }
                >
                    <IconButton
                        onClick={ toggleDrawer() }
                        aria-label="Close"
                        color="primary"
                    >
                        <Close/>
                    </IconButton>
                </Grid>
                <ListItem>
                    <ListItemButton>
                        <InfoOutlined color="primary"/>
                        <ListItemText
                            primary={ "About Paris" }
                            sx={ { color: "primary.main", paddingLeft: "15px" } }
                        />
                    </ListItemButton>
                </ListItem>
                <Divider sx={ { background: "white" } }/>
                <ListItem>
                    <ListItemButton>
                        <RateReviewOutlined color="primary"/>
                        <ListItemText
                            primary={ "Manage content" }
                            sx={ { color: "primary.main", paddingLeft: "15px" } }
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ReplyOutlined color="primary"/>
                        <ListItemText
                            primary={ "Share Album" }
                            sx={ { color: "primary.main", paddingLeft: "15px" } }
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <FmdGoodOutlined color="primary"/>
                        <ListItemText
                            primary={ "View on map" }
                            sx={ { color: "primary.main", paddingLeft: "15px" } }
                        />
                    </ListItemButton>
                </ListItem>
                <ListItemText
                    primary={ "Slideshow settings" }
                    sx={ {
                        color: "primary.main",
                        paddingLeft: "30px",
                        paddingTop: "15px",
                    } }
                />
                <ListItem>
                    <ListItemButton>
                        <VolumeUp color="primary"/>
                        <Slider
                            sx={ { width: "150px", marginLeft: "15px" } }
                            size="small"
                            defaultValue={ 70 }
                            aria-label="Small"
                            valueLabelDisplay="auto"
                        />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );
    return (
        <Grid container>
            <Grid item xs={ 9 } md={ 9 } display={ "flex" } alignItems={ "center" }>
                <IconButton aria-label="ArrowBackIos" color="primary">
                    <ArrowBackIos/>
                </IconButton>
                <Typography
                    variant="h6"
                    gutterBottom
                    marginBottom={ 0 }
                    alignItems={ "center" }
                    paddingLeft={ 3 }
                    color={ "primary" }
                >
                    My first vacation in Paris.
                </Typography>
            </Grid>
            <Grid item xs={ 3 } md={ 3 } display={ "flex" } justifyContent={ "flex-end" }>
                <IconButton aria-label="VolumeUp" color="primary">
                    <VolumeUp/>
                </IconButton>
                <IconButton aria-label="Menu" color="primary" onClick={ toggleDrawer() }>
                    <Menu/>
                </IconButton>
            </Grid>
            <Drawer anchor={ "right" } open={ state } onClose={ toggleDrawer() }>
                { list() }
            </Drawer>
        </Grid>
    );
};

export default Header;
