import React from 'react'
import s from './ThisDay.module.scss';
import { Svgs } from '../../../shared/Header/Svgs';
import { Weather } from '../../../types/types';
import moment from 'moment';
import { useCustomSelector } from '../../../hooks/storeHooks';

type Props = {
  weather:Weather,
}

export const ThisDay = ({weather}: Props) => {
  const state = useCustomSelector( state => state.CurrentWeatherReducer);
  return (
    <div className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.top__block_wrapper}>
        <div className={s.this__temp}>{weather.current.temp_c}°</div>
        <div className={s.this__day_name}>Today</div>
        </div>
        <img src={state.weather.current.condition.icon} alt="icon" className={s.weatherIcon}/>
      </div>
      <div className={s.bottom__block}>
        <div className={s.this__time}>
          Updated: <span>{state.weather.current.last_updated.slice(10,state.weather.current.last_updated.length)}</span>
        </div>
        <div className={s.this__city}>
          City: {weather.location.name}
        </div>
      </div>
    </div>
  )
}