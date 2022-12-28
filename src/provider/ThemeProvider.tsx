import React, { ReactNode } from 'react'
import { useState } from 'react'
import { ThemeContext, Theme } from '../context/ThemeContext';
import { changeCssVariables } from '../changeCssVariables';
type Props = {
    children: ReactNode,
}



export const ThemeProvider = ({children, ...props}:Props) => {
    
    let tema: Theme = JSON.parse(localStorage.getItem("theme") || ''); 
    const [theme, setTheme] = useState<Theme>(
        tema || Theme.LIGHT);

         changeCssVariables(theme);

        const changeTheme = (theme: Theme) => {
            localStorage.setItem("theme",JSON.stringify(theme));
        setTheme(theme);
            changeCssVariables(theme);
           
    }
    
    return (<ThemeContext.Provider value={{
        theme,
        changeTheme,
        
    }}
    {...props}
    >
        {children}
    </ThemeContext.Provider>
    )
}