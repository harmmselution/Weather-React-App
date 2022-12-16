import { Svgs } from './Svgs';
import s from './Header.module.scss';
import Select from 'react-select';
import {useState, useEffect} from 'react';
type Props = {}

export const Header = (props: Props) => {
    const options = [
        { value: 'city-1', label: 'Санкт-Петербург' },
        { value: 'city-2', label: 'Москва' },
        { value: 'city-3', label: 'Новгород' }
      ]
      const [theme, setTheme] = useState('light');

     
      const handleTheme = () => {
          theme === "light" ? setTheme("dark") : setTheme("light");
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
    
            root.style.setProperty( `--${elem}-default`,`var(--${elem}-${theme})`);
            })   
        },[theme])
    
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
                        backgroundColor:  theme === 'dark' ? '#4F4F4F' : "rgba(71, 147, 255, 0.2)",
                        borderRadius:"10px",
                        width:"194px",
                        heigth:"37px",
                        border:"none",
                        zIndex:"100"
                }),
                singleValue: (baseStyles: any) => ({
                    ...baseStyles,
                    color: theme === 'dark' ? '#fff' : "#000",
                })
            }}/>
        </div>
    </header>
  )
}