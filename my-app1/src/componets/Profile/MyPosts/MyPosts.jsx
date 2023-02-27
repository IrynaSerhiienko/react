import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';


const MyPosts = ( props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }

    return (  
    <div>
        <div>
            <h1 className={s.titlePost}>My posts</h1>
            <div className={s.textPostHolder}>
                <textarea className={s.textPost} name="" id="" cols="55" rows="5" placeholder='My news' ref={newPostElement}></textarea>
            </div>
            <button className={s.btn} onClick={addPost}>Add post</button>
        </div>
       <div className={s.posts}>
            {postsElements}
       </div>
    </div>
    )
}

export default MyPosts;