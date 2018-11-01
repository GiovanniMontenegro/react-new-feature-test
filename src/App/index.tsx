import * as React from 'react'
import {ThemeContext} from '../context/theme'

type TestProps = {
    onThemeChange: Function 
}

function Test (props: TestProps){
    const context = React.useContext(ThemeContext);
   return (
   <div>
    Actual theme: {context.theme}
    <button onClick={() => props.onThemeChange()}>Change Theme</button>
</div>)
}

export default function App(){
    const [theme, setTheme] = React.useState({theme:'dark'});
    const [themee, setThemee] = React.useState({themee:'dark'});
    
    React.useEffect( () => {
        console.log("Theme changed dude!")
    },[theme])

    React.useEffect( () => {
        console.log("Themee changed dude!")
    },[themee])
    React.useEffect( () => {
        
        console.log("Themee e Theme changed dude!",theme,themee)
    },[themee,theme])

    function onThemeChange(){
        setThemee({themee:'light'})
    }

    return (
        <ThemeContext.Provider value={theme}>
            <Test onThemeChange={onThemeChange}/>
        </ThemeContext.Provider>
    )
}

