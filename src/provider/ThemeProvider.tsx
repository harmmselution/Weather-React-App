import React, { ReactNode } from 'react'
import { useState } from 'react'
import { ThemeContext, Theme } from '../context/ThemeContext';
import { changeCssVariables } from '../changeCssVariables';
type Props = {
    children: ReactNode,
}

const storage = {
    setItem: (name:string , item: any) => {
        localStorage.setItem(name,JSON.stringify(item));
    },
    getItem: (name:string) => {
        const item = localStorage.getItem(name);
        if(item) {
            return JSON.parse(item) ;    
        }
    }
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