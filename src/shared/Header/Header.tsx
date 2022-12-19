import { Svgs } from './Svgs';
import s from './Header.module.scss';
import Select from 'react-select';
import { useTheme } from '../../hooks/useTheme';
import { Theme } from '../../context/ThemeContext';
type Props = {}

export const Header = (props: Props) => {
    const options = [
        { value: 'city-1', label: 'Санкт-Петербург' },
        { value: 'city-2', label: 'Москва' },
        { value: 'city-3', label: 'Новгород' }
      ]
    
     const theme = useTheme();
    
      const handleTheme = () => {
          theme.theme === Theme.LIGHT ? theme.changeTheme(Theme.DARK) : theme.changeTheme(Theme.LIGHT);
        }
      
    
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
                        backgroundColor:  theme.theme === Theme.DARK ? '#4F4F4F' : "rgba(71, 147, 255, 0.2)",
                        borderRadius:"10px",
                        width:"194px",
                        heigth:"37px",
                        border:"none",
                        zIndex:"100"
                }),
                singleValue: (baseStyles: any) => ({
                    ...baseStyles,
                    color: theme.theme === Theme.DARK ? '#fff' : "#000",
                })
            }}/>
        </div>
    </header>
  )
}