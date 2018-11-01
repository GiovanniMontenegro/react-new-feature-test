import * as React from 'react'
import {ThemeContext} from '../context/theme'


export default function App(){
    const [theme, setTheme] = React.useState('dark');
    return (
    <div>
        
        <ThemeContext.Consumer>
            {(value)=> value.theme}
        </ThemeContext.Consumer>
    </div>
    )
}

