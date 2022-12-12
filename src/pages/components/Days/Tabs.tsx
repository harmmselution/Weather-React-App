import React from 'react'
import s from './Days.module.scss';
type Props = {}

interface Itabs {
    value: string
}
export const Tabs = (props: Props) => {
    const tabs: Itabs[] = [
        {
            value:"На неделю"
        },
        {
            value:"На месяц"
        },
        {
            value:"На 10 дней"
        },
    ]
  return (
    <div className={s.tabs}>
        <div className={s.tabs__wrapper}>
        {tabs.map(tab => <div className={s.tab} key = {tab.value}>{tab.value}</div>)}
        </div>
        <div className={s.cansel}>Отменить</div>
    </div>
  )
}