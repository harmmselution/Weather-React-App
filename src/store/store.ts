import { configureStore } from "@reduxjs/toolkit";
import { combineReducers} from "redux";
import CurrentWeatherReducer from "./weaterSlice";
const rootReducer = combineReducers({CurrentWeatherReducer});
export const store = configureStore ({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;