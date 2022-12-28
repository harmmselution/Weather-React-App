import {createSlice} from '@reduxjs/toolkit';
import { Weather } from '../types/types';
import {PayloadAction} from '@reduxjs/toolkit';
import  {AxiosResponse} from "axios";

type CurrentWeather = {
    weather: Weather,
    isLoading: boolean;
    response: IResponse;
    options: IOptions[];
    town: string;
    popUpState: boolean;
}

interface IOptions {
    value:string,
    label:string,
}

interface IResponse {
    status: number;
    message: string;
}

const initialState:CurrentWeather = {
    weather: {
        current: {
            temp_c: 0,
            last_updated: "",
                feelslike_c:0,
                precip_mm: 0,
                pressure_mb: 0,
                wind_dir: '',
                wind_kph: 0,
                condition: {
                    text: '',
                    icon: "",
                },
        },
        location: {
            name:''
        },
        forecast: {
            forecastday: [
                {date:'',
                    day: {
                        maxtemp_c: 0,
                        mintemp_c: 0,
                    condition: {
                        text:'',
                        icon:'',
                        
                    }
                    },
                },
                {date:'',
                    day: {
                        maxtemp_c: 0,
                        mintemp_c: 0,
                    condition: {
                        text:'',
                        icon:'',

                    }
                    },
                },
                {date:'',
                    day: {
                        maxtemp_c: 0,
                        mintemp_c: 0,
                    condition: {
                        text:'',
                        icon:'',
                        
                    }
                    },
                },
            ]
        }
    },
    isLoading: false,
    response: {
        status: 0,
        message: ""
    },
    options: [
        { value: 'Minsk', label: 'Minsk'},
        { value: 'London', label: 'London'},
        { value: 'Paris', label: 'Paris' }
      ],
      town: JSON.parse(localStorage.getItem("town") || '') || "Minsk" ,
      popUpState: false

        
}   

export const currentWeatherSlice = createSlice({
    name: 'current_weather',
    initialState,
    reducers: {
        fetchCurrentWeather(state) {
            state.isLoading = true;
        },
        fetchCurrentWeatherSuccess(state,action: PayloadAction<AxiosResponse<Weather>> ) {
            state.weather = action.payload.data;
            state.isLoading = false;
            state.response = {
                status:action.payload.status,
                message: action.payload.statusText
            }
        },
        fetchCurrentWeatherError(state,action: PayloadAction<AxiosResponse<Weather>> ) {
            state.isLoading = false;
            state.response = {
                status:action.payload.status,
                message: action.payload.statusText
            }
        },
        changeTown(state,action:PayloadAction<string>) {
            state.town = action.payload
        },
        changePopupFlag(state,action:PayloadAction<boolean>) {
            state.popUpState = action.payload
        }
    }
})
export const {fetchCurrentWeather,fetchCurrentWeatherError,fetchCurrentWeatherSuccess,changeTown ,changePopupFlag} = currentWeatherSlice.actions;
export default currentWeatherSlice.reducer;