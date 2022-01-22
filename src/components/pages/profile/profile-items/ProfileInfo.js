import React from "react";
import Preloader from "../../../common/Preloader";
import "../Profile.css"
import ProfileStatusFunc from "./ProfileStatusFunc"

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />
  }

  return (
    <div className='infoColumn'>
      <div className='profilePhoto'>
        <img src={profile.photos.large} alt="" />
      </div>
      <div className='personalInfo'>
        <ProfileStatusFunc status={status} updateStatus={updateStatus} />
      </div>
    </div>
  )
}

export default ProfileInfo