import React from 'react'
import s from './ThisDay.module.scss';
import { Svgs } from '../../../shared/Header/Svgs';
type Props = {
  weather:any,
}

export const ThisDay = ({weather}: Props) => {
  return (
    <div className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.top__block_wrapper}>
        <div className={s.this__temp}>{weather.current.temp_c}°</div>
        <div className={s.this__day_name}>Сегодня</div>
        </div>
        <Svgs name='Bigsun'/>
      </div>
      <div className={s.bottom__block}>
        <div className={s.this__time}>
          Время: <span>21:54</span>
        </div>
        <div className={s.this__city}>
          Город:Санкт-Петербург
        </div>
      </div>
    </div>
  )
}