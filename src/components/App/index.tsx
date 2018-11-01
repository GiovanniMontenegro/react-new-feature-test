import * as React from 'react'
import Layout  from '../Layout'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {ThemeContext, DARK_THEME, LIGHT_THEME} from '../../context/theme'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


    
const styles ={
    root:{
        flexGrow: 1,
        heigth: '100%'
    },
    box:{
        'margin-left': 50,
        'margin-top': 50,
        padding:20
    },
    light:{
        backgroundColor: '#fff'
        
    },
    dark:{
        backgroundColor: '#000'
    }
}

type AppProps = {
    classes: any
}

function onThemeChange(theme: string, callback: Function){
    callback({theme: theme})
}
type TestProps = {
    theme: string
    setLayout: Function 
}

function Test (props: TestProps){
 
   return (
   <div>
    Actual theme: {props.theme}
   
</div>)
}


function App(props: AppProps){  
    const context = React.useContext(ThemeContext);
    const [layout, setLayout] = React.useState({theme: context.theme})
    const classes = props.classes
    return (
        <ThemeContext.Provider value={layout}>
            <Layout setLayout={setLayout}>
                    <Paper className={classes.box}>Card Example</Paper> 

            </Layout>                    
        </ThemeContext.Provider>
    )
}

export default withStyles(styles)(App);