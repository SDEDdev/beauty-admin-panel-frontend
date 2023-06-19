import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

export const userLogin = createAsyncThunk(
    'auth/login',
    async ({ name, password }, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(`/user/login`, { name, password });
            Cookies.set('userToken', data.token, { expires: 7 });
            toast.error(`Успішний вхід!`, {
                position: toast.POSITION.TOP_RIGHT
            });
            return data;
        } catch (error) {
            toast.error(`Помилка серверу!, ${error.message}`, {
                position: toast.POSITION.TOP_RIGHT
            });
            return rejectWithValue(error.message)
        }
    }
)