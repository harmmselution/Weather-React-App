import { Svgs } from './Svgs';
import s from './Header.module.scss';
import Select from 'react-select';
import { useTheme } from '../../hooks/useTheme';
import { Theme } from '../../context/ThemeContext';
import { useCustomSelector, useCustomDispatch} from '../../hooks/storeHooks';
import  { useRef } from 'react';
import { changeTown } from '../../store/weaterSlice';
import { KeyboardEvent } from 'react';
export const Header = () => {
   
    const state = useCustomSelector(state => state.CurrentWeatherReducer)
    const dispatch = useCustomDispatch();
     const theme = useTheme();

     const handleTheme =  () => {
         theme.theme === Theme.LIGHT ? theme.changeTheme(Theme.DARK) : theme.changeTheme(Theme.LIGHT);
        } 

        const townRef = useRef<HTMLInputElement | null>(null);
        const handleChange = (newValue: any) => {
           
            dispatch(changeTown(newValue.value));   
            
        }
     
        localStorage.setItem("town",JSON.stringify(state.town));

       const submitTown = () => {
            if(townRef.current!.value){
                dispatch(changeTown(townRef.current!.value))
            townRef.current!.value = ''
            }

       }
       const keyBoardEvent = (e:KeyboardEvent<HTMLInputElement>) => {
            if(e.key === 'Enter') {
                console.log("ENTTTER")
                dispatch(changeTown(townRef.current!.value))
            townRef.current!.value = ''
            }
       }
        return (
    <header className={s.header}>
    <div className={s.wrapper}>
        <div className={s.logo}>
            <Svgs name="logo"/>
        </div>
        <div className={s.title}>React weather</div>
    </div>
            <div>
               <input ref={townRef} type="text" placeholder='введите город'  className={s.searchForm} onKeyDown={keyBoardEvent}/>
               <input onClick={submitTown} value = "Найти" type="submit" className={s.submitInput}/>
            </div>
        <div className={s.wrapper}>
            
            <div className={s.change_theme} onClick={handleTheme}>
            <Svgs name="theme"/>
            </div>
            <Select
            onChange = {handleChange}
            options={state.options} 
            styles={{
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