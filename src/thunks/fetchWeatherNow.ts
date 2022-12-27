import { AppDispatch } from "../store/store"
import axios, {AxiosResponse} from 'axios';
import { fetchCurrentWeather,fetchCurrentWeatherError,fetchCurrentWeatherSuccess } from "../store/weaterSlice";
import { Weather } from "../types/types";
export const fetchWeatherNow = function (city: string){
   return async(dispatch:AppDispatch) => {
      try {
         dispatch(fetchCurrentWeather());
         const res = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=1ef70f420011486d9f7115256222312&q=${city}&days=6&aqi=no&alerts=no`);
         if(res.status === 200) {
          dispatch(fetchCurrentWeatherSuccess(res));
         }
         else {
          dispatch(fetchCurrentWeatherError(res));
         }
      } catch (error) {
        console.log(error);
            
      }
} 
}

