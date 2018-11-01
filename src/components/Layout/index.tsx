import * as React from 'react'
import { ThemeContext, DARK_THEME, LIGHT_THEME } from '../../context/theme'
import { withStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


const styles ={
    root:{
        height: '-webkit-fill-available',
    },
    dark:{
        backgroundColor:'#000'
    },
    light:{
        backgroundColor:'#fff'
    }

}

type LayoutProps = {
    classes: any,
    setLayout: Function
    children: any
}

function onThemeChange(theme: string, callback: Function){
    callback({theme: theme})
}

function Layout(props: LayoutProps){
    const context = React.useContext(ThemeContext);
    const [theme,setTheme] = React.useState({theme: context.theme})
    const classes = props.classes

    React.useEffect(() =>{
        setTheme({theme: context.theme})
    }, [context.theme])
    return (
        <div className={`${classes.root} ${classes[theme.theme]}`}>
        <Grid container spacing={24}>
            <Grid item xs={12}>
                
                <AppBar>
                 <Button id="dark_theme" variant="contained" color="primary"  onClick={() => onThemeChange(DARK_THEME, props.setLayout)}>Dark Theme</Button>
                 <Button id="ligth_theme" variant="contained" color="primary" onClick={() => onThemeChange(LIGHT_THEME, props.setLayout)}>Ligth Theme</Button>
                </AppBar>
            </Grid>
            <Grid item xs={12}>
            {props.children}
            </Grid>
                </Grid>
        </div>
    )
}

export default withStyles(styles)(Layout)