import React from 'react';
import { AppBar , Toolbar, IconButton, Badge, MenuItem, Menu, Typography ,Button } from '@material-ui/core';
import useStyles from './styles'
import logo from '../../assets/barber.svg'
import {Link} from 'react-router-dom'

const Navbar = () => {

    const classes=useStyles();
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} >
                <Toolbar>
                    <div className={classes.headerLinks}>
                    <Typography component={Link} to="/about" variant="h6" className={classes.title}>
                        About
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        Services
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        Contact
                    </Typography>
                    </div>
                    <Link to="/" className={classes.logo}>
                    <img src={logo} height="60px" />
                    </Link>
                    <div className={classes.grow}>
                    <Button variant='contained' href="/kita" size="large" className={classes.button}>BOOK NOW</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar