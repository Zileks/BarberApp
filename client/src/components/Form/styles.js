import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) =>({
    root:{
        '@global': {
            '.MuiFormControl-root':{
                margin:'0',
            },
            '.MuiInput-formControl':{
                
            }
        },
        fontFamily:'Nunito',
    },
    input:{
        marginTop:'8%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    form:{
        margin: theme.spacing(1),
        minWidth: 180,
        height:65
    },
    label:{
        fontWeight:'bold',
        paddingRight:'2%'
    },
    icon:{
        marginRight:'1%'
    },
    employees:{
        textAlign:'center',
        marginTop:'5%',
        overflow:'none',
    },
    employee:{
        border:'1px solid #ddd',
    },
    employee1:{
        overflow:'none',
    },
    employeeName:{
        fontSize:'150%',
        fontWeight:'bold',
    },
    ul:{
        flexWrap:'wrap',
        display:'flex',
        flexDirection:'column',
        overflow:'none',
        padding:'0',
        height:280
    },
    times:{
        textAlign:'center',
        padding:'5px 0',
        cursor:'pointer',
        listStyle:'none',
    },
    onClick:{
        color:'red',
        background:'blue'
    },
    customer_data:{
        display:'flex',
        flexDirection:'column',
        margin:'5% 0%',
        marginRight:'30%',
        marginLeft:'12%',
    },
    customer_data_hidden:{
        opacity:0.6,
        display:'flex',
        flexDirection:'column',
        margin:'5% 0%',
        marginRight:'30%',
        marginLeft:'12%',
    },
    form2:{
        display:'flex',
        flexDirection:'column'
    },
    button:{
        width:'20%',
    },
    text:{
        color:'red',
        marginTop:'2%',
        marginRight:'30%',
        marginLeft:'12%',
    }
}))