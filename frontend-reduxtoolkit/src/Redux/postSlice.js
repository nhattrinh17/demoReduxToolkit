import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
    name:"post",
    initialState:{
        posts: [
            {
                loading: false,
                error: false,
                title:"",
                desc:"",
                tag:0
            },
        ]
    },
    reducers: {
        addPostStart: (state) => {
            state.loading = true
            state.error = false
        },
        addPostSuccess: (state, action) => {
            state.loading = false
            state.error = false
            state.posts = [...state.posts, action.payload]
        },
        addPostError: (state) => {
            state.loading = false
            state.error = true
        }
    }
})

export const {addPostStart, addPostSuccess, addPostError} = postSlice.actions
export default postSlice.reducer
