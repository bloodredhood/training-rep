import React, {useEffect} from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getUserProfile, getStatus, updateStatus} from "../../../redux/profileReducer";
import {useParams} from "react-router";
import {compose} from "redux"

const ProfileContainer = (props) => {

  const {user_id} = useParams();

  useEffect(() => {
    let userId = user_id;
    if (!userId) {
      userId = props.authorizedUserId;
      if (!userId) {
        props.history.push("/login")
      }
    }
    if (!userId) return;
    props.getUserProfile(userId);
    props.getStatus(userId);
    console.log("======> request")
  }, [user_id]);

  return (
      <Profile {...props} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
  )
}

const mapStateToProps = state => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus})
)(ProfileContainer)