import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css';


const Profile = ( props) => {
    // let posts = [
    //     {id: 1, message: 'Hi, how are you?????', likeCount: 11},
    //     {id: 2, message: 'It is my first post!', likeCount: 12},
    // ]
    return (   <div className={s.content}>
    <ProfileInfo />
    <MyPosts posts={props.state.posts}/>
  </div>)
}

export default Profile;