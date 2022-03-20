import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLogin: false,
        data: {}
    },
    reducers: {
        request: (state, action) => {
            console.log('action', action)
            return {
                isLogin: action.payload   
            }
        }
    }
})

export default userSlice