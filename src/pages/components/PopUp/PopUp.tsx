import s from './PopUp.module.scss';
import { ThisDayItem } from '../ThisDayItem/ThisDayItem';
import { Svgs } from '../../../shared/Header/Svgs';
import { useCustomDispatch, useCustomSelector } from '../../../hooks/storeHooks';
import { changePopupFlag } from '../../../store/weaterSlice';


export const PopUp = () => {
  const state = useCustomSelector(state => state.CurrentWeatherReducer);
  const dispatch = useCustomDispatch();
    const items = [
        {
          icon_id: "temp",
          name: "Температура",
          value: " 20° - ощущается как 17°"
        },
        {
          icon_id: "pressure",
          name: "Давление",
          value: "265 мм ртутного столба - нормальное"
        },
        {
          icon_id: "precipitation",
          name: "Осадки",
          value: "Без осадков"
        },
        {
          icon_id: "wind",
          name: "Ветер",
          value: "3 м/с юго-запад - легкий ветер"
        },
      ]
      const closePopUp = () => {
        dispatch(changePopupFlag(false));
      }
      return (
        <>
         {state.popUpState ? <div className={s.blur}>
        <div className={s.popUp}>
            <div className={s.popUp_day}>
            <div className={s.temp}>12°</div>
            <div className={s.day}>Среда</div>
            <div className={s.popup_logo}>
                <Svgs name="sun"/>
            </div>
            <div className={s.time}>Время:01:54</div>
            <div className={s.city}>Город: Санкт-Петербург</div>

            </div>
            <div className={s.popUp_indirators}>
          <div className={s.this__day_info_items}>{items.map((item) => <ThisDayItem item ={item} key ={item.icon_id}/>)}</div>
        </div>
        <div className={s.close} onClick={closePopUp} >

        <Svgs name="close"/>
        </div>
        </div>
        </div> : ''
}
        </>
      );
}