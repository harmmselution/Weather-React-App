import React from 'react'
import s from './ThisDayInfo.module.scss';
import cloud from '../../../assets/images/cloud2.png';
import { ThisDayItem } from '../ThisDayItem/ThisDayItem';
import { useCustomSelector } from '../../../hooks/storeHooks';
export interface Item {
  icon_id: string,
      name: string,
      value: string
}

export const ThisDayInfo = () => {
  const weatherStore = useCustomSelector(store => store.CurrentWeatherReducer);
  const items = [
    {
      icon_id: "temp",
      name: "temperature",
      value: `${weatherStore.weather.current.temp_c}° - feels like ${weatherStore.weather.current.feelslike_c}°`
    },
    { 
      icon_id: "pressure",
      name: "pressure",
      value: `${weatherStore.weather.current.pressure_mb} millibar `
    },
    {
      icon_id: "precipitation",
      name: "precipitations",
      value:` ${ weatherStore.weather.current.precip_mm === 0 ? "without precipitations" : weatherStore.weather.current.precip_mm }  `
    },
    {
      icon_id: "wind",
      name: "wind",
      value: `${weatherStore.weather.current.wind_kph} kilometres per hour, ${weatherStore.weather.current.wind_dir} direction`
    },
  ]
  return (
    <div className={s.wrapper_info}>
    <div className={s.this__day_info}>
      <div className={s.this__day_info_items}>{items.map((item) => <ThisDayItem item ={item} />)}</div>
      <img src={cloud} alt="фон облака" className={s.cloud} />
    </div>
    </div>
  );
}