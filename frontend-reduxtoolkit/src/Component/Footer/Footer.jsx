import styles from "./Footer.module.css"

function Footer( {isOpenPost, setOpenPost} ) {
    return (
        <footer>
            <div className={styles.footer__title} onClick={() => setOpenPost(!isOpenPost)}>
                {isOpenPost? "x" : "+"}
            </div>
        </footer>
    )
}

export default Footer