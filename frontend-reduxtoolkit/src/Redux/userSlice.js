import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:"user",
    initialState: {
        name: "Trịnh Nhật",
        age: 20,
        desc: "Lớp gì? Lớp Linh",
        avatar: "https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a",
        themeColor: "#ff9851",
        loading: false,
        error: false,
    },
    reducers: {
        updateStart: (state) => {
            state.loading = true
            state.error = false
        },

        updateError: (state) => {
            state.loading = false
            state.error = true
        },

        updateSuccess: (state, action) => {
            state.loading = false
            state.error = false
            state.name = action.payload.name
            state.age = action.payload.age
            state.desc = action.payload.desc
            state.avatar = action.payload.avatar
            state.themeColor = action.payload.theme
        }
    }
})

export const { updateStart, updateError, updateSuccess } = userSlice.actions
export default userSlice.reducer