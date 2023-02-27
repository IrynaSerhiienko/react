// import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (  
    <div className={s.profileInfoHolder}>
       <div className={s.heroHolder}></div>
       <div className={s.contentHolder}>
            <div className={s.avatarHolder}>
                <img className={s.avatar}
                    src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=2000"
                    alt=""
                />
            </div>
            <div className={s.avatarDescription}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Cumque officiis nesciunt iste atque. Sapiente cum nam quas
                ducimus suscipit autem maxime aperiam perferendis, corporis
                voluptatem ab accusantium sequi repudiandae qui?
            </div>
       </div>
      
    </div>
    )
}

export default ProfileInfo;