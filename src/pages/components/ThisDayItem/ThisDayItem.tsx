import React from 'react'
import { Item } from '../ThisDayInfo/ThisDayInfo'
import { Svgs } from '../../../shared/Header/Svgs';
import s from '../ThisDayInfo/ThisDayInfo.module.scss';
type Props = {
    item:Item
}

export const ThisDayItem = ({item}:Props) => {
  return (
    <div className={s.day__item}>
        <div className={s.indicator}>
        <Svgs name={item.icon_id}/>
        </div>
        <div className={s.indicatorName}>{item.name}</div>
        <div className={s.indicatorValue}>{item.value}</div>
    </div>
    
  )
}