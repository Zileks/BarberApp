import { Button, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';
import Frizer from '../../assets/hehe.mp4'
import {Link} from 'react-router-dom'

const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.grow}/>
            <video className={classes.video} autoPlay loop muted>
                <source src={Frizer} type='video/mp4'/>
            </video>
            <div className={classes.sredina}>
            <Typography className={classes.title}>
                Looking Your Best <br/>
                Never Goes Out of Style 
            </Typography>
            <Button component={Link} to="/book" className={classes.button} variant='contained' size="large">Book Now</Button>
            </div>
        </div>
    )
}

export default Header
