import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import employedImage from "../../../assets/images/employed.jpeg";
import lookingForAJobImage from "../../../assets/images/looking-for-a-job.jpeg";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  let lookingForAJobStatus = props.profile.lookingForAJob;
  return (
    <div>
      <div className={s.item}>
        <img src="https://images.pexels.com/photos/547115/pexels-photo-547115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/" />
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} alt="" />
        <div>{props.profile.fullName}</div>
        <div>{props.profile.aboutMe}</div>
        <div>Contacts
          <li>Facebook: {props.profile.contacts.facebook}</li>
          <li>Instagram: {props.profile.contacts.instagram}</li>
          <li>Twitter: {props.profile.contacts.twitter}</li>
        </div>
        <img src={lookingForAJobStatus ? lookingForAJobImage : employedImage} className={s.jobStatusImage} alt="" />
      </div>
    </div>
  );
}

export default ProfileInfo;