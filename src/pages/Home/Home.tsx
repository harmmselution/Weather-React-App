import React from 'react'
import { ThisDay } from '../components/ThisDay/ThisDay'
import { ThisDayInfo } from '../components/ThisDayInfo/ThisDayInfo'
import s from './Home.module.scss';
import { Days } from '../components/Days/Days';
type Props = {}

export const Home = (props: Props) => {
  return (<>
  <div className={s.wrapper}>
  <ThisDay/>
  <ThisDayInfo/>
  </div>
    

  <Days/> 
    
  
  </>
  )
}   