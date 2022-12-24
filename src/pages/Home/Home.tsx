import React, { useEffect } from 'react'
import { ThisDay } from '../components/ThisDay/ThisDay'
import { ThisDayInfo } from '../components/ThisDayInfo/ThisDayInfo'
import s from './Home.module.scss';
import { Days } from '../components/Days/Days';
import { useCustomSelector, useCustomDispatch  } from '../../hooks/storeHooks';
import { fetchWeatherNow } from '../../thunks/fetchWeatherNow';
import { fetchCurrentWeatherError } from '../../store/weaterSlice';
type Props = {}

export const Home = (props: Props) => {
  const WeatherState = useCustomSelector(state => state.CurrentWeatherReducer);
  console.log(WeatherState); 
  const dispatch = useCustomDispatch();
 
  useEffect(() => {
    dispatch(fetchWeatherNow("London"));
  },[]);

  return (<>
  <div className={s.wrapper}>
  <ThisDay weather = {WeatherState.weather} />
  <ThisDayInfo/>
  </div>
  <Days/> 


  </>
  )
}   