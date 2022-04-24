import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateUser } from "../../Redux/apiRequests"
import Input from "../InputFileds/Input"
import styles from "./Edit.module.css"

function EditPage(props) {
    const imagesUrl = [
        "https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a",
        "https://preview.redd.it/fc9k38jwfwv51.png?auto=webp&s=9ce3d4c488091bb21969fd0fad7a6d89e4bfc50d",
        "https://preview.redd.it/se39g98mljw51.png?auto=webp&s=758dfe2b0a2df439b06b68533e763f413d58b46c",
        "https://preview.redd.it/5es1lne1du261.png?width=640&crop=smart&auto=webp&s=e6eb0ee5710710000e4fbace119112de63324a38",
        "https://i.redd.it/7ipyf6pvqac61.png",
        "https://i.redd.it/ksmb0m02ppy51.png",
        "https://i.redd.it/mozfkrjpoa261.png",
        "https://preview.redd.it/cpwkbke13vv51.png?auto=webp&s=9158e49b35ad2581d840efd2a013a9ead06abbc7",
        "https://preview.redd.it/26s9eejm8vz51.png?auto=webp&s=e38d32ee0ffa0666fade2abd62ed59037c119990"
    ]
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()

    const [name, setName] = useState(user.name)
    const [age, setAge] = useState(user.age)
    const [desc, setDesc] = useState(user.desc)
    const [avatar, setAvatar] = useState(user.avatar)
    const [theme, setTheme] = useState(user.themeColor)
    const handleSubmit = (e) => {
        e.preventDefault()
        props.setIsEdit(false)
        const payloadUpdateUser = {
            name: name,
            age: age,
            desc: desc,
            avatar: avatar,
            theme: theme,
        }
        updateUser(payloadUpdateUser, dispatch)
    }

    return(
        <form onSubmit={(e) => handleSubmit(e)}>
            <section className={styles.edit__container}>
                <button className={styles.close}>Save</button>
                <div className={styles.edit__profile}>Edit profile</div>
                <div className={styles.input__container}>
                    <Input label="Display Name" name="name" data={user.name} setData={setName}/>
                    <Input label="Age" name="age" data={user.age} setData={setAge}/>
                    <Input inputType="textarea" label="About" name="age" data={user.desc} setData={setDesc}/>
                    <label>Profile Pircute</label>
                    <div className={styles.image__container}>
                        {imagesUrl.map((imageUrl) => {
                            return <img src={imageUrl} alt="" className={styles.input__image} onClick={(e) => setAvatar(e.target.src)}/>
                        })}
                    </div>
                    <div className={styles.theme__container}>
                        <label>Edit Theme</label>
                        <input type="color" name="" id="" value={theme} className={styles.theme__color} onChange={(e) => setTheme(e.target.value)}/>
                    </div>
                </div>
            </section>
        </form>
    )
}

export default EditPage
