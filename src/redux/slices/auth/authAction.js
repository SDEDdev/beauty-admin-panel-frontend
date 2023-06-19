import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const backendURL = process.env.API_BACKEND || 'http://127.0.0.1:3000';

export const userLogin = createAsyncThunk(
    'auth/login',
    async ({ name, password }, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${backendURL}/user/login`, { name, password });
            Cookies.set('userToken', response.data.token, { expires: 7 });
            toast.error(`Успішний вхід!`, {
                position: toast.POSITION.TOP_RIGHT
            });
            return response.data;
        } catch (error) {
            console.log(error);
            toast.error(`Помилка серверу!, ${error.message}`, {
                position: toast.POSITION.TOP_RIGHT
            });
            return rejectWithValue(error.message)
        }
    }
)