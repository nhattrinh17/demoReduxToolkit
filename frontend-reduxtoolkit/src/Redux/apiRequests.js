import axios from "axios";
import { addPostError, addPostStart, addPostSuccess } from "./postSlice";
import { updateStart, updateError, updateSuccess } from "./userSlice";

export const updateUser = async (user, dispatch) => {
    dispatch(updateStart())

    try {
        const res = await axios.post("/user/update", user)
        dispatch(updateSuccess(res.data))
    } catch (error) {
        dispatch(updateError())
    }
}

export const createPost = async (newPost, dispatch) => {
    dispatch(addPostStart())

    try {
        const res = await axios.post("/user/post", newPost)
        dispatch(addPostSuccess(res.data))
    } catch (error) {
        dispatch(addPostError())
    }
}

