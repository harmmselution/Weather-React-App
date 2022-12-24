import React from 'react'
import { Card } from './Card'
import s from './Days.module.scss';
import { Tabs } from './Tabs';
type Props = {}
export interface IDays {
    day:string
    day_info: string
    icon_id: string
    temp_day: string
    temp_night:string
    info: string
}
export const Days = (props: Props) => {
    const days = [ 
        {
          day:"Сегодня",
          day_info: "28 августа",
          icon_id: "sun",
          temp_day: "+18",
          temp_night: "+15",
          info: "Облачно"
        },
        {
            day:"Завтра",
            day_info: "29 августа",
            icon_id: "sun",
            temp_day: "+15",
            temp_night: "+15",
            info: "Небольшой дождь"
          },
          {
            day:"Пн",
            day_info: "28 августа",
            icon_id: "sunAndRain",
            temp_day: "+18",
            temp_night: "+15",
            info: "Облачно"
          },
          {
            day:"Вт",
            day_info: "28 августа",
            icon_id: "rain",
            temp_day: "+18",
            temp_night: "+15",
            info: "Облачно"
          },
          {
            day:"Ср",
            day_info: "28 августа",
            icon_id: "smallRain",
            temp_day: "+18",
            temp_night: "+15",
            info: "Облачно"
          },
          {
            day:"Чт",
            day_info: "28 августа",
            icon_id: "pasmurno",
            temp_day: "+18",
            temp_night: "+15",
            info: "Облачно"
          },
          {
            day:"Пт",
            day_info: "28 августа",
            icon_id: "sun",
            temp_day: "+18",
            temp_night: "+15",
            info: "Облачно"
          },
    ]
  return (
    <>
  <Tabs/>
    <div className={s.daysWrapper}>{days.map((day,index) => <Card day = {day} key={index}/>)}</div>
    </>
  
  )
}