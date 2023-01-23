import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.item}>
        <img src="https://images.pexels.com/photos/547115/pexels-photo-547115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/" />
      </div>
      <div className={s.descriptionBlock}>
        ava + description
      </div>
    </div>
  );
 
}

export default ProfileInfo;