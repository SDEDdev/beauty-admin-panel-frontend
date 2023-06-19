import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

const backendURL = process.env.API_BACKEND || 'http://127.0.0.1:5000';

export const userLogin = createAsyncThunk(
    'auth/login',
    async ({ name, password }, { rejectWithValue }) => {
        try {
            const { data } = axios.post(`${backendURL}/user/login`, { name, password });

            Cookies.set('userToken', data?.token, { expires: 7 });
            return data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)