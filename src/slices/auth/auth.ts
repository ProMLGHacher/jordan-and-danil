import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store/store'
import { $api } from '../../shared/api/api'

interface AuthState {
    token: string | null
}

const initialState: AuthState = {
    token: localStorage.getItem('token'),
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string | null>) => {
            state.token = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(regThunk.fulfilled, (state, action) => {
            localStorage.setItem('token', action.payload.token)
            state.token = action.payload.token
        })
        builder.addCase(regThunk.rejected, (state, action) => {
            localStorage.removeItem('token')
            state.token = null
        })
    },
})

type TokenData = {
    token: string
}

type AuthData = {
    email: string,
    password: string
}

export const regThunk = createAsyncThunk<TokenData, AuthData>('regThunk', async (data, { dispatch }) => {
    const response = await $api.post<TokenData>('/signup', data)
    return response.data
})

export const loginThunk = createAsyncThunk<TokenData, AuthData>('regThunk', async (data, { dispatch }) => {
    const response = await $api.post<TokenData>('/signin', data)
    return response.data
})


export const { setToken } = authSlice.actions

export const selectToken = (state: RootState) => state.auth.token

export default authSlice.reducer