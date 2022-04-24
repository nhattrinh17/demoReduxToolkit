import { useState } from "react"
import Input from "../InputFileds/Input"
import styles from "./Post.module.css"
import { createPost } from "../../Redux/apiRequests"
import { useDispatch } from "react-redux"
// import { createPost } from "../../Redux/postSlice"

function MakePost ( props ) {

    const [title, setTitle] = useState("Add a title")
    const [desc, setDesc] = useState("Add some description")
    const[selectIndex, setSelectIndex] = useState(0)
    const dispatch = useDispatch()
    const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"]

    const setOpenPost = props.setOpenPost
    const handlePost = () => {
        setOpenPost(false)
        const newPost = {
            title,
            desc,
            tag: selectIndex
        }
        createPost(newPost, dispatch)
    }
    return (
        <section className={styles.makepost__container}>
            <div className={styles.makepost__navigation}>
                <p className="makepost__post" onClick={handlePost}>Post</p>
            </div>
            <Input label="Title" data={title} inputType = "textarea" setData={setTitle} />
            <Input label="Description" data={desc} inputType = "textarea" setData={setDesc} />
            <label htmlFor="">Tag</label>
            <div className={styles.makepost__tags}>
                {tags.map((tag, index) => 
                    <button 
                        onClick={() => setSelectIndex(index)} 
                        className={selectIndex === index? styles.makepost__tags__selected : ""} 
                    >
                        {tag} 
                    </button>)}
            </div>
        </section>
    )
}

export default MakePost
