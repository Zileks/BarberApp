import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 0;

export default makeStyles((theme) => ({
    appBar:{
        fontFamily:'Nunito',
        display:'flex',
        backgroundColor:'black',
        opacity:'0.9',
        boxShadow:'none',
        borderBottom:'1px solid rgba(0,0,0,0.12)',
        [theme.breakpoints.up('sm')] : {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        }
    },
    headerLinks:{
        display:'flex',
        flexDirection:'row',
        width:'33%',
    },
    logo:{
        display:'flex',
        justifyContent:'center',
        flexGrow:1,
        margin:'0 auto',
        backgroundColor:'none',
    },
    grow: {
        display:'flex',
        width:'33%',
        justifyContent:'flex-end',
    },
    title:{
        margin:'0 auto',
        letterSpacing:'0px',
        fontFamily:'Nunito',
        color:'white',
        textDecoration:'none',
        fontWeight:'bold',
    },
    button:{
        
        color:'black',
        backgroundColor:'#deb887',
        '&:hover':{
            opacity:'0.9',
            backgroundColor:'#deb887'
        }
    }
}))