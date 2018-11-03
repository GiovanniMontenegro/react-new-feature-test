import * as React from 'react'
import { ThemeContext, DARK_THEME, LIGHT_THEME } from '../../context/theme'
import { withStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import LayoutReducer from './reducer'
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';




const styles = (theme:any) => ({
    root:{
        height: '-webkit-fill-available',
    },
    box:{
        'margin-left': 50,
        'margin-top': 50,
        padding:20
    },
    dark:{
        backgroundColor:'#000'
    },
    light:{
        backgroundColor:'#fff'
    } ,
    progress: {
        margin: theme.spacing.unit * 2,
      },

})

type LayoutProps = {
    classes: any,
    setLayout: Function
    children: any
}

function onThemeChange(theme: string, callback: Function){
    callback({theme: theme})
}
type Comments={
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}
function renderComments(comments: Array<Comments>, boxStyle: any){
    return comments.map((comment)=><Paper className={boxStyle}>{comment.body}</Paper>)
}



function Layout(props: LayoutProps){
    const context = React.useContext(ThemeContext);
    const [theme,setTheme] = React.useState({theme: context.theme})
    const classes = props.classes
    const boxStyle = classes.box
    const reducer =  new LayoutReducer();
   
    React.useEffect(() =>{
        console.log("I can hearing that!", reducer.state)
    },[reducer.state])

    React.useEffect(() =>{
        setTheme({theme: context.theme})
    }, [context.theme])
    return (
        <div className={`${classes.root} ${classes[theme.theme]}`}>
        <Grid container spacing={24}>
            <Grid item xs={12}>
                <AppBar>
                    <Toolbar>
                 <Button id="dark_theme" variant="contained" color="primary"  onClick={() => onThemeChange(DARK_THEME, props.setLayout)}>Dark Theme</Button>
                 <Button id="ligth_theme" variant="contained" color="primary" onClick={() => onThemeChange(LIGHT_THEME, props.setLayout)}>Ligth Theme</Button>
                 <Button variant="contained" color="primary" onClick={() => reducer.dispatch({type: 'reset'})}>Reset</Button>
                 <Button variant="contained" color="primary" onClick={() => reducer.dispatch({type: 'increment'})}>increment</Button>
                 <Button variant="contained" color="primary" onClick={() => reducer.dispatch({type: 'decrement'})}>decrement</Button>
                 <Button variant="contained" color="primary" onClick={() => reducer.dispatch({type: 'load_comments'})}>Load comments</Button>
                 </Toolbar>
                </AppBar>
            </Grid>
            <Grid item xs={12}>
                <Paper className={boxStyle}>Counter: {reducer.state.count}</Paper>
                { (!reducer.state.comments || reducer.state.comments.length == 0)  && !reducer.state.loading && !reducer.state.error && <Paper className={boxStyle}>Empty data</Paper>}
                { reducer.state.error && <Paper className={boxStyle}>{reducer.state.error}</Paper>}
                { reducer.state.comments && reducer.state.comments.length > 0 && !reducer.state.loading && renderComments(reducer.state.comments, boxStyle)}
                { reducer.state.loading && <Paper className={boxStyle}><CircularProgress className={classes.progress} size={50} /></Paper>}
            </Grid>
        </Grid>
        </div>
    )
}

export default withStyles(styles)(Layout)