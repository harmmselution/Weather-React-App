import { Svgs } from './Svgs';
import s from './Header.module.scss';
import Select from 'react-select';
import {useState, useEffect,useContext} from 'react';
import { useTheme } from '../../hooks/useTheme';
type Props = {}

export const Header = (props: Props) => {
    const options = [
        { value: 'city-1', label: 'Санкт-Петербург' },
        { value: 'city-2', label: 'Москва' },
        { value: 'city-3', label: 'Новгород' }
      ]
    
     const theme = useTheme();
     console.log(theme.changeTheme)
      const handleTheme = () => {
          theme.theme === "light" ? theme.changeTheme("dark") : theme.changeTheme("light");
          console.log(theme.theme);
        }
        useEffect( () => {
            let root = document.querySelector(":root") as HTMLElement;
            const elements = [
                'body-background',
                'components-background',
                'card-background',
                'text-color'
            ]
            elements.forEach( elem => {
    
            root.style.setProperty( `--${elem}-default`,`var(--${elem}-${theme.theme})`);
            })   
        },[theme.theme])
    
        return (
    <header className={s.header}>
    <div className={s.wrapper}>
        <div className={s.logo}>
            <Svgs name="logo"/>
        </div>
        <div className={s.title}>React weather</div>
    </div>
        <div className={s.wrapper}>
            <div className={s.change_theme} onClick={handleTheme}>
                <Svgs name="theme"/>
            </div>
            <Select defaultValue={options[0]} options={options} styles={{
                control: (baseStyles) => ({
                    ...baseStyles,
                        backgroundColor:  theme.theme === 'dark' ? '#4F4F4F' : "rgba(71, 147, 255, 0.2)",
                        borderRadius:"10px",
                        width:"194px",
                        heigth:"37px",
                        border:"none",
                        zIndex:"100"
                }),
                singleValue: (baseStyles: any) => ({
                    ...baseStyles,
                    color: theme.theme === 'dark' ? '#fff' : "#000",
                })
            }}/>
        </div>
    </header>
  )
}