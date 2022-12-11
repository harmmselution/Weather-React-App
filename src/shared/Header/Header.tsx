import React from 'react'
import { Svgs } from './Svgs';
import s from './Header.module.scss';
import Select from 'react-select';
type Props = {}

export const Header = (props: Props) => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
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
            <Select options={options}/>
        </div>
    </header>
  )
}