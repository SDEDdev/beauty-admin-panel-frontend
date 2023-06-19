import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth/authSlice";
import calendarReducer from "./slices/calendarData/calendarSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        calendarEvents: calendarReducer
    }
})
export default store;