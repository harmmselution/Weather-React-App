import React from 'react'
import { Svgs } from './Svgs';
import s from './Header.module.scss';
import Select from 'react-select';
type Props = {}

export const Header = (props: Props) => {
    const options = [
        { value: 'city-1', label: 'Санкт-Петербург' },
        { value: 'city-2', label: 'Москва' },
        { value: 'city-3', label: 'Новгород' }
      ]
  return (
    <header className={s.header}>
    <div className={s.wrapper}>
        <div className={s.logo}>
            <Svgs name="logo"/>
        </div>
        <div className={s.title}>React weather</div>
    </div>
        <div className={s.wrapper}>
            <div className={s.change_theme}>
                <Svgs name="theme"/>
            </div>
            <Select defaultValue={options[0]} options={options} styles={{
                control: (baseStyles) => ({
                    ...baseStyles,background: "rgba(71, 147, 255, 0.2)",
                        borderRadius:"10px",
                        width:"194px",
                        heigth:"37px",
                        border:"none",
                        zIndex:"100"
                })
            }}/>
        </div>
    </header>
  )
}