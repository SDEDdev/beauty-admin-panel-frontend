import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const fetchCalendarEvents = createAsyncThunk(
    'calendar/getCalendarEvents',
    async () => {
        try {
            const { data } = await axios.get(`/schedule`);
            return data;
        } catch (error) {
            toast.error(`Помилка серверу!, ${error.message}`, {
                position: toast.POSITION.TOP_RIGHT
            });
            return error.message;
        }
    }
)