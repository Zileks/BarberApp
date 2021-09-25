import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) =>({
    toolbar: theme.mixins.toolbar,
    root: {
        height:'100vh',
        maxWidth:'100vw',
        display:'flex',
        flexDirection:'column',
        backgroundColor:'white'
    },
    title: {
        fontFamily:'Nunito',
        color:'white',
        fontWeight:'bold',
        fontSize:'3rem'
    },
    sredina: {
        zIndex:'1',
        margin:'auto 25%',
        textAlign:'center',
        backgroundColor:'rgba(0,0,0,0.5)'
    },
    grow:{
        height:'64px',
    },
    video:{
        overflow:'hidden',
        zIndex:'1',
        position:'fixed',
        objectFit:'cover',
        width: '100vw',
        height: '100vh'
    },
    button:{
        color:'black',
        marginBottom:'20px',
        backgroundColor:'#deb887',
        '&:hover':{
            opacity:'0.9',
            backgroundColor:'#deb887'
        }
    }
}));