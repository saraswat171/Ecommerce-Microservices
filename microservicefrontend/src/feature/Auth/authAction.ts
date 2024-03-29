import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

import { logInAction, logOutAction, signUpAction } from "./authType";

interface signupdata {
    email: string;
    name: string;
    password: string;
    confirmPassword: string;
}
interface logindata {
    email: string
    password: string
}
export const signUpUser = createAsyncThunk(signUpAction, async (data: signupdata, { rejectWithValue }) => {

    try {
        console.log("signInUser", data)
        const res = await axios.post(`http://localhost:8004/signup`, data)
        const output = res.data
        console.log("response of data", res)
        return output

    }
    catch (error: any) {
        console.log('error: ', error.response.data);
        return rejectWithValue(error.response.data.message)
    }
})

export const loginUser = createAsyncThunk(logInAction, async (data:logindata, { rejectWithValue }) => {
    try {
      
        const res = await axios.post(`http://localhost:8004/login`, data)
        const output = res.data
       
        localStorage.setItem('logged', 'true');
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        localStorage.setItem('userid', res.data.user._id);
        return output
    }
    catch (error: any) {
        return rejectWithValue(error.response.data.message)
    }
})

export const logoutUser = createAsyncThunk(logOutAction, async () => {
    try {
       
        localStorage.removeItem('logged');
        localStorage.removeItem('token');
        localStorage.removeItem('user')
        localStorage.removeItem('userid')
    } catch (error: any) {
      
        return error.message
    }
})