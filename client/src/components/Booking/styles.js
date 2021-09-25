import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) =>({
    toolbar: theme.mixins.toolbar,
    root:{
        '@global': {
            '.MuiTypography-root':{
                fontFamily:'Nunito'
            },
            '.MuiTypography-h1':{
                fontSize: '5rem'
            }
        },
        minHeight:'100vh',
        backgroundColor:'white',
        fontFamily:'Nunito',
    },
    h1:{
        textAlign:'center',
        marginTop:'6%',
        fontWeight:'bold'
    },
    guide:{
        marginTop:'6%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        padding:'5px'
    },
    icon:{
        marginRight:'5px',
        color:'red',
        fontSize:'large'
    }
}))