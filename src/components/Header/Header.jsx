import React from 'react'
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';

import {Search} from "@material-ui/icons"

import useStyles from './styles'
const Header = ({onLoad, onPlaceChanged}) => {
    const classes = useStyles()
    return (
        <AppBar position= "static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    Trip 
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" className={classes.title}>
                        Explore the earth
                    </Typography>
                    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                        <div className= {classes.search}>
                            <div className={classes.searchIcon}>
                                <Search/>
                            </div>
                            <InputBase placeholder="Explore ..." classes={{ root:classes.inputInput}}/>
                        </div>
                    </Autocomplete>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header
