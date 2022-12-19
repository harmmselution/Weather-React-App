import React from 'react'
import { Theme } from './context/ThemeContext';


export const changeCssVariables = (theme: Theme) => {
    let root = document.querySelector(":root") as HTMLElement;

    const elements = [
        'body-background',
        'components-background',
        'card-background',
        'text-color'
    ]

    elements.forEach( elem => {

    root.style.setProperty( `--${elem}-default`,`var(--${elem}-${theme})`);
    })
}