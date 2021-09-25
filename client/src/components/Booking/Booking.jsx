import React, {useState,useEffect} from 'react';
import useStyles from './styles';
import { Container, Typography } from '@material-ui/core/';
import {useQuery, gql} from '@apollo/client';
import {LOAD_DATES} from '../../GraphQL/Queries'
import Form from '../Form/Form' 
import CheckIcon from '@material-ui/icons/Check';
import {Inject,Day, Week, WorkWeek, Month, Agenda,ScheduleComponent} from "@syncfusion/ej2-react-schedule";


const Booking = () => {
    const classes = useStyles();
    const [selectedDate,handleDateChange] = useState((new Date()))
    const {error, loading, data} = useQuery(LOAD_DATES)
    const [dates, setDates] = useState([])
    useEffect(()=>{
        if(data){
            setDates(data.dates)
        }
        console.log(data);
    },[data])
    console.log(dates)
    return (
        <div className={classes.root}>
            <div className={classes.toolbar}/>
            <Typography variant="h2" className={classes.h1}>Make an appointment</Typography>
            <Container>
                <div className={classes.guide}>
                    <Typography variant="h6"><CheckIcon className={classes.icon}/>Choose a date</Typography>
                    <Typography variant="h6"><CheckIcon className={classes.icon}/>Choose a time at a selected barber</Typography>
                    <Typography variant="h6"><CheckIcon className={classes.icon}/>Fill out the form and book</Typography>
                </div>
                <Form />
            </Container>
        </div>
    )
}

export default Booking
