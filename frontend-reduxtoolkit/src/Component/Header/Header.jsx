import { useSelector } from "react-redux"
import styles from "./Header.module.css"

function Header( props ) {
    const {setIsEdit} = props
    const handleEdit = () => {
        setIsEdit(true)
    }

    const user = useSelector(state => state.user)
    const themeColor = user.themeColor

    return (
        <div style={{backgroundColor: {themeColor},
                    backgroundImage: "linear-gradient(180deg, "+themeColor+", 2%, "+themeColor+ ", 65%, #181018 100%"}}>
            <div className={styles.info__container}>
                <div className={styles.info__edit} onClick={handleEdit}>Edit</div>
                <img src={user.avatar} 
                    alt="Avatar"
                    className={styles.info__avatar} />
                <div className={styles.info__content}>
                    <h2 className={styles.info__username}>{user.name}</h2>
                    <p className={styles.info__age}>{user.age}</p>
                    <p className={styles.info__desc}>{user.desc}</p>
                </div>
            </div>
        </div>
    )
}

export default Header