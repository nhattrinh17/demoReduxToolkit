import { useSelector } from "react-redux"
import styles from "./Post.module.css"
import "../../App.css"

function Posts() {

    const posts = useSelector(state => state.post.posts)
    const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"]

    return(
        <>
            <section className={styles.post__container}>
            {
                posts.map((post, index) => {
                    if(index !== 0) {
                        return(
                            <div className={styles.posts} key={index}>
                                <p className={styles.posts__title}>{post.title}</p>
                                <p className={`posts__tags--${tags[post.tag]} ${styles.posts__tags}`}>{tags[post.tag]}</p>
                                <p className={styles.posts__description}>{post.desc}</p>
                            </div>
                        )
                    }
                })
            }
            </section>
        </>
    )
}

export default Posts