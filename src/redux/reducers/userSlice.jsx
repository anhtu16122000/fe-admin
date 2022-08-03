import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLogin: false,
        loading: false,
        data: {}
    },
    reducers: {
        request: (state, action) => {
            state.loading = true
        },
        success: (state, action) => {
            state.isLogin = true
            state.loading = false
            state.data = action.payload
        },
        fail: (state, action) => {
            state.isLogin = false
            state.loading = false
        },
        logout: (state, action) => {
            state.isLogin = false
        }
    }
})

export default userSlice