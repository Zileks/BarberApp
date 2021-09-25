import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container,TextField,InputAdornment,IconButton } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';


const Auth = () => {
const classes = useStyles();
const history = useHistory();



const opop = [
    {
    Id: 2,
    Subject: 'Paris',
    StartTime: new Date(2021, 6, 30, 10, 0),
    EndTime: new Date(2021, 6, 30, 12, 30),
    Comments: 'Summer vacation planned for outstation.'
    },
    {
    Id: 1,
    Subject: 'Paris',
    StartTime: new Date(2021, 6, 30, 15, 0),
    EndTime: new Date(2021, 6, 30, 17, 30),
    },
    {
    Id: 5,
    Subject: 'Hehe',
    StartTime: new Date(2021, 6, 29, 15, 0),
    EndTime: new Date(2021, 6, 29, 17, 30),
    },
];


const [formState, setFormState] = useState({
    login: true,
    password: '',
    name: ''
  });

const handleSubmit = (e) => {
    e.preventDefault();
}

const handleChange = (e) => {
    setFormState({ ...formState,[e.target.name]: e.target.value })
}
console.log(formState)

  return (
      <div>
        <ScheduleComponent height='550px'  eventSettings={{ dataSource: opop }}>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
        </ScheduleComponent>
      <Container component="main" maxWidth="xs" className={classes.div}>
          <Paper className={classes.paper} elevation={3}>
            <Typography>
                Admin
            </Typography>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                        <TextField
                        onChange={handleChange}
                        name="name"
                        variant="outlined"
                        required
                        fullWidth
                        label="Enter your name"
                        type="name"
                            />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                        onChange={handleChange}
                        name="password"
                        variant="outlined"
                        required
                        fullWidth
                        label="Enter your password"
                        type="password"
                            />
                    </Grid>
                </Grid>
                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                Sign in
                </Button>
            </form>
          </Paper>
      </Container>
        </div>
  )
}

export default Auth;
