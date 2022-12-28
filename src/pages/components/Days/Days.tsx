import { Card } from './Card'
import s from './Days.module.scss';
import { useCustomSelector } from '../../../hooks/storeHooks';

export interface IDays {
    day:string
    day_info: string
    icon_id: string
   maxtemp: number
    mintemp:number
    info: string
}

export const Days = () => {
  const store = useCustomSelector(store => store.CurrentWeatherReducer);
      const this_day = store.weather.forecast.forecastday[0].date;
      const next_day = store.weather.forecast.forecastday[1].date;
      const next_next_day = store.weather.forecast.forecastday[2].date;
    const days = [ 
        {
          day:"Today",
          day_info: this_day,
          icon_id: store.weather.current.condition.icon,
         maxtemp: store.weather.current.temp_c,
          mintemp:1,
          info: store.weather.current.condition.text
        },
        {
            day:"Tomorrow",
            day_info: next_day,
            icon_id: store.weather.forecast.forecastday[1].day.condition.icon,
           maxtemp: store.weather.forecast.forecastday[1].day.maxtemp_c,
            mintemp: store.weather.forecast.forecastday[1].day.mintemp_c,
            info: store.weather.forecast.forecastday[1].day.condition.text
          },
          {
            day:"Next day",
            day_info: next_next_day,
            icon_id: store.weather.forecast.forecastday[2].day.condition.icon,
            maxtemp: store.weather.forecast.forecastday[2].day.maxtemp_c,
            mintemp: store.weather.forecast.forecastday[2].day.mintemp_c,
            info: store.weather.forecast.forecastday[2].day.condition.text
          },
          
    ]

  return (
    <>
    <div className={s.daysWrapper}>{days.map((day,index) => <Card day = {day} key={index}/>)}</div>
    </>
  
  )
}