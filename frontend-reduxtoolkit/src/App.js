import { useState } from 'react';
import { useSelector } from 'react-redux'
import './App.css';
import Header from './Component/Header/Header'
import Edit from './Component/Edit/EditPage';
import Footer from './Component/Footer/Footer';
import MakePost from './Component/Post/MakePost';
import Posts from './Component/Post/Posts';
import styles from "./Component/Post/Post.module.css";

function App() {
  const [isEdit, setIsEdit] = useState(false)
  const [isOpenPost, setOpenPost] = useState(false)
  const loading = useSelector(state => state.user.loading)
  const error = useSelector(state => state.user.error)

  return (
    <div className="App">
      {
        isEdit? 
        <Edit setIsEdit={setIsEdit}/> 
        : !isEdit && !isOpenPost ? (
          <>
            <Header setIsEdit={setIsEdit}/>
            <div className={styles.post__container}>
              <Posts/>
            </div>
            <Footer isOpenPost={isOpenPost} setOpenPost={setOpenPost}/>
          </>
        ) : (
          <>
            <Header setIsEdit={setIsEdit}/>
            <MakePost setOpenPost={setOpenPost}/>
          </>
        )
      }
      {
        (loading)? <><h2 style={{textAlign: "center",fontSize:14}}>Loading...</h2></> : <></>
      }
      {!isEdit && error && (
          <h2 style={{textAlign: "center",fontSize:14, color: "red"}}>Error when fetching data from server!</h2>
      )}
    </div>
  );
}

export default App;
