import React from 'react'
import { IDays } from './Days';
import s from './Days.module.scss';
import { Svgs } from '../../../shared/Header/Svgs';
import { useCustomDispatch, useCustomSelector } from '../../../hooks/storeHooks';
import {useState,useEffect} from 'react';
import { changePopupFlag } from '../../../store/weaterSlice';
type Props = {
    day: IDays
}

export const Card = ({day}: Props) => {
  const state = useCustomSelector(state => state.CurrentWeatherReducer);
  const [flag, setFlag] = useState(state.popUpState);
  const dispatch = useCustomDispatch();
  const handleFlag = () => {
      setFlag(true);
      dispatch(changePopupFlag(flag))
  }
  useEffect(() => {
    setFlag(true);
  }, [flag])
  
  return (
    
    <div className={s.card} onClick = {handleFlag}>
          <div className={s.day}>{day.day}</div>
          <div className={s.day_info}>{day.day_info}</div>
          <div className={s.icon_id}>
          <img src={day.icon_id} alt="icon" className={s.weatherIcon}/>
          </div>
          <div className={s.temp_day}>max: {day.maxtemp}°</div>
          <div className={s.temp_night}>min: {day.mintemp}°</div>
             <div className={s.info}>{day.info}</div>
    </div>

   
  )
}