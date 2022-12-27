import React, { useEffect } from 'react'
import { ThisDay } from '../components/ThisDay/ThisDay'
import { ThisDayInfo } from '../components/ThisDayInfo/ThisDayInfo'
import s from './Home.module.scss';
import { Days } from '../components/Days/Days';
import { useCustomSelector, useCustomDispatch  } from '../../hooks/storeHooks';
import { fetchWeatherNow } from '../../thunks/fetchWeatherNow';
type Props = {}

export const Home = (props: Props) => {
  const state = useCustomSelector(state => state.CurrentWeatherReducer);
  const dispatch = useCustomDispatch();
 
  useEffect(() => {
    dispatch(fetchWeatherNow(state.town));
  },[state.town]);
  
  return (<>
  <div className={s.wrapper}>
  <ThisDay weather = {state.weather} />
  <ThisDayInfo/>
  </div>
  <Days/> 


  </>
  )
}   