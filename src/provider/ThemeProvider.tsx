import React, { ReactNode } from 'react'
import { useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'
type Props = {
    children: ReactNode,
}

export const ThemeProvider = ({children, ...props}:Props) => {
    const [theme, setTheme] = useState('light');
    const changeTheme = (theme:string) => {
        setTheme(theme);
    }

    return (<ThemeContext.Provider value={{
        theme,
        changeTheme
    }}
    {...props}
    >
        {children}
    </ThemeContext.Provider>
    )
}