import { Svgs } from './Svgs';
import s from './Header.module.scss';
import Select from 'react-select';
import { useTheme } from '../../hooks/useTheme';
import { Theme } from '../../context/ThemeContext';
import { useCustomSelector, useCustomDispatch} from '../../hooks/storeHooks';
import React, { useState } from 'react';
import { changeTown } from '../../store/weaterSlice';
type Props = {}

export const Header = (props: Props) => {
   
    const state = useCustomSelector(state => state.CurrentWeatherReducer)
    const dispatch = useCustomDispatch();
     const theme = useTheme();
    
      const handleTheme = () => {
          theme.theme === Theme.LIGHT ? theme.changeTheme(Theme.DARK) : theme.changeTheme(Theme.LIGHT);
        }
        const [currentCountry, setCurrentCountry] = useState('Minsk');
        const getValue = () => {
           
          return state.options.find(el => el.value === currentCountry)
        }
        const handleChange = (newValue: any) => {
            setCurrentCountry(newValue.value);
            dispatch(changeTown(newValue.value));   
           
        }
       
       const [town, setTown] = useState('');

       const handleTown = (e:React.ChangeEvent<HTMLInputElement>): void => {
            setTown(e.target.value);
       }
       const submitTown = () => {
            dispatch(changeTown(town))
       }
       console.log(town)
        return (
    <header className={s.header}>
    <div className={s.wrapper}>
        <div className={s.logo}>
            <Svgs name="logo"/>
        </div>
        <div className={s.title}>React weather</div>
    </div>
            <div>
              <form action="" onSubmit={(e)=> e.preventDefault()} >
               <input type="text" placeholder='введите страну' value={town} onChange={handleTown} className={s.searchForm}/>
               <input onClick={submitTown} value = "Найти" type="submit" className={s.submitInput}/>
              </form>
            </div>
        <div className={s.wrapper}>
            
            <div className={s.change_theme} onClick={handleTheme}>
                <Svgs name="theme"/>
            </div>
            <Select
            value={getValue()}
            onChange = {handleChange}
            options={state.options} styles={{
                control: (baseStyles) => ({
                    ...baseStyles,
                        backgroundColor:  theme.theme === Theme.DARK ? '#4F4F4F' : "rgba(71, 147, 255, 0.2)",
                        borderRadius:"10px",
                        width:"194px",
                        heigth:"37px",
                        border:"none",
                        zIndex:"100",
                       
                }),
                singleValue: (baseStyles: any) => ({
                    ...baseStyles,
                    color: theme.theme === Theme.DARK ? '#fff' : "#000",
                }),
                
            }}/>
        </div>
    </header>
  )
}