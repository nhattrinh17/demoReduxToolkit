import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import postRecuce from "./postSlice"

export default configureStore({
    reducer:{
        user: userReducer,
        post: postRecuce,
    }
})
