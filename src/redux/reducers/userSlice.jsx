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
        },
        fail: (state, action) => {
            state.isLogin = false
            state.loading = false
        }
    }
})

export default userSlice