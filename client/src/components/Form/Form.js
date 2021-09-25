import React, { useState,useEffect } from "react";
import useStyles from './styles';
import { CREATE_DATE_MUTATION } from "../../GraphQL/Mutations"
import { LOAD_DATES } from "../../GraphQL/Queries"
import { useMutation,useQuery } from "@apollo/client";
import moment from 'moment';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import employee1 from '../../assets/employee1.jpg'
import useForm from '../../hooks/useForm'


const Form = () => {
    const classes = useStyles();
    const {
        values,
        handleChange,
        resetForm
    } = useForm(true)
    const [time, setTime] = useState("");
    const [createdAt, setCreatedAt] = useState("");
    const [createUser] = useMutation(CREATE_DATE_MUTATION);
    const [open, setOpen] = useState(false);
    const [barber, setBarber] = useState('');
    const {data,refetch} = useQuery(LOAD_DATES)
    const [barber1,setBarber1] = useState([])
    const [barber2,setBarber2] = useState([])
    const [barber3,setBarber3] = useState([])

    useEffect(() => {
        
        setBarber1(hoursBarber1)
        setBarber2(hoursBarber2)
        setBarber3(hoursBarber3)
    }, [createdAt,barber,data])

    let option1 = moment().add(0,'days').format('DD/MM/YYYY dddd')
    let option2 = moment().add(1,'days').format('DD/MM/YYYY dddd')
    let option3 = moment().add(2,'days').format('DD/MM/YYYY dddd')
    let option4 = moment().add(3,'days').format('DD/MM/YYYY dddd')
    let option5 = moment().add(4,'days').format('DD/MM/YYYY dddd')
    let option11 = moment().add(0,'days').format('DD/MM/YYYY')
    let option22 = moment().add(1,'days').format('DD/MM/YYYY')
    let option33 = moment().add(2,'days').format('DD/MM/YYYY')
    let option44 = moment().add(3,'days').format('DD/MM/YYYY')
    let option55 = moment().add(4,'days').format('DD/MM/YYYY')

    const hours = ["12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30"];
    
    let bookings1 = []
    let bookings2 = []
    let bookings3 = []
    if(data){
    bookings1 = data.dates.map(x=> { 
        if(x.date === createdAt && x.barber === "Miki"){
            return x.time
        }
    })
    }
    let bookings11 = bookings1.filter(item => item)
    let hoursBarber1 = hours.filter((x) => !bookings11.includes(x))

    if(data){
        bookings2 = data.dates.map(x=> { 
            if(x.date === createdAt && x.barber === "Milan"){
                return x.time
            }
        })
    }
    let bookings22 = bookings2.filter(item => item)
    let hoursBarber2 = hours.filter((x) => !bookings22.includes(x))

    if(data){
        bookings3 = data.dates.map(x=> { 
            if(x.date === createdAt && x.barber === "Dragan"){
                return x.time
            }
        })
    }
    let bookings33 = bookings3.filter(item => item)
    let hoursBarber3 = hours.filter((x) => !bookings33.includes(x))

    const addUser = (e) => {
        e.preventDefault();
        if(/\S+@\S+\.\S+/.test(values.email)===false || values.name.length <=3 || values.phone.length <=6){
            alert('Invalid input')}
        else{
        createUser({
            variables: {
                barber: barber,
                date: createdAt,
                time: time,
                email: values.email,
                customer: values.name,
                phone: values.phone
            }
        })
        alert('You have successfully booked a barber')
        setBarber('')
        setTime('')
        resetForm();
        refetch()
    }
    }

    console.log(data)
    console.log(values)

    return (
        <div className={classes.root}>
            <div className={classes.input}>
                <h2 className={classes.label}>Choose a date:</h2>
                <CalendarTodayIcon className={classes.icon}/>
                <FormControl variant="standard"  className={classes.form}>
                <InputLabel>Date</InputLabel>
                    <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={() => {setOpen(false)}}
                    onOpen={() => {setOpen(true)}}
                    value={createdAt}
                    onChange={(e) => {
                        setCreatedAt(e.target.value);
                        setTime('')
                        }}
                    >
                    <MenuItem value={option11}>{option1}</MenuItem>
                    <MenuItem value={option22}>{option2}</MenuItem>
                    <MenuItem value={option33}>{option3}</MenuItem>
                    <MenuItem value={option44}>{option4}</MenuItem>
                    <MenuItem value={option55}>{option5}</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <Grid container
                direction="row"
                justify="space-evenly"
                alignItems="center" 
                className={classes.employees} 
                >
                <Grid item xs={2} className={classes.employee}>
                    <img src={employee1} alt="hehe" className={classes.employee1}  width="100%"/>
                    <p className={classes.employeeName} style={{backgroundColor: time && barber === 'Miki' ? "gray" : "",transform: time && barber === 'Miki' ? "translateY(-28px)" : "",transition:'0.3s'}}>Miki</p>
                    {createdAt ? <ul className={classes.ul} >
                        {barber1.map((x , id) => (
                            <li className={classes.times}  key={id} style={{backgroundColor: time === x && barber === 'Miki' ? "gray" : ""}} onClick={(e) => {
                                setTime(x);
                                setBarber('Miki');
                            }}
                            >{x}</li>
                        ))}
                    </ul> : 'Choose a date'}
                    
                </Grid>
                <Grid item xs={2} className={classes.employee}>
                <img src={employee1} alt="hehe" className={classes.employee1}  width="100%"/>
                <p className={classes.employeeName} style={{backgroundColor: time && barber === 'Milan' ? "gray" : "",transform: time && barber === 'Milan' ? "translateY(-28px)" : "",transition:'0.3s'}}>Milan</p>
                    {createdAt ? <ul className={classes.ul}>
                        {barber2.map((x, id) => (
                            <li className={classes.times} key={id} style={{backgroundColor: time === x && barber === 'Milan' ? "gray" : ""}} onClick={(e) => {
                                setTime(x);
                                setBarber('Milan');
                            }}
                            >{x}</li>
                        ))}
                    </ul> : 'Choose a date'}
                </Grid>
                <Grid item xs={2} className={classes.employee}>
                <img src={employee1} alt="hehe" className={classes.employee1}  width="100%"/>
                <p className={classes.employeeName} style={{backgroundColor: time && barber === 'Dragan' ? "gray" : "",transform: time && barber === 'Dragan' ? "translateY(-28px)" : "",transition:'0.3s'}}>Dragan</p>
                    {createdAt ? <ul className={classes.ul}>
                        {barber3.map((x,id) => (
                            <li className={classes.times} key={id} style={{backgroundColor: time === x && barber === 'Dragan' ? "gray" : ""}} onClick={(e) => {
                                setTime(x);
                                setBarber('Dragan');
                            }}
                            >{x}</li>
                        ))}
                        
                    </ul> : 'Choose a date'}
                </Grid>
            </Grid>
            <p className={classes.text}>* Only availabe times are shown</p>
            {time ? <div className={classes.customer_data} style={{transition:'1s'}}>
                <h2>Your info</h2>
                <form className={classes.form2} onSubmit={addUser}>
                    <TextField label="Email" name="email" required value={values.email} onChange={handleChange} />
                    <TextField label="Name" name="name" required value={values.name} onChange={handleChange}/>
                    <TextField label="Phone" name="phone" required value={values.phone} onChange={handleChange}/>
                    <h3>Appointment review</h3>
                    <p>Check the booking details</p>
                    <h3>Barber : {barber} </h3>
                    <h3>Date and time : {createdAt} {time}</h3>
                    <Button variant="contained" color="primary" type="submit" className={classes.button}>Book</Button>
                </form>
            </div>
            : <div className={classes.customer_data_hidden}>
                 <h2>Your info</h2>
                <form className={classes.form2}>
                    <TextField label="Email" disabled={true} value={values.email}/>
                    <TextField label="Name" disabled={true} value={values.name}/>
                    <TextField label="Phone" disabled={true} value={values.phone}/>
                </form>
                <h3>Appointment review</h3>
                <p>Check the booking details</p>
                <h3>Barber :  </h3>
                <h3>Date and time : </h3>
                <Button disabled={true} variant="contained" color="primary" type="submit" className={classes.button}>Book</Button>
                </div>
            }
        </div>
      
    )
}

export default Form
