import React, { useState, useEffect } from "react";
import backendApi from "../../services/backendApi";

import "./style.css";

export default function UpdateProfile({ history }) {
  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken"));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [averageStar, setAverageStar] = useState(0);
  const [memberSince, setMemberSince] = useState("");
  const [joinedEventsProfiles, setJoinedEventsProfiles] = useState([]);

  useEffect(() => {
    async function loadProfile() {
      try {
        const response = await backendApi.get(`/users/${userId}`);

        setFirstName(response.data.message.firstName);
        setLastName(response.data.message.lastName);
        setEmail(response.data.message.email);
        setAverageStar(response.data.message.averageStar);
        setMemberSince(response.data.message.createdAt);
        setJoinedEventsProfiles(response.data.message.joinedEventsProfiles);

        console.log(joinedEventsProfiles)

      } catch (e) {
        console.log(e);
      }
    }
    loadProfile();
  }, []);


  async function updateProfile(event){
    event.preventDefault();
    try{
        history.push({
            pathname: '/user/update'
          }); 
    }catch(e){
        console.log(e);
    }
  }

  async function goToEventPage(eventId){
    history.push({
      pathname: '/event/profile',
      eventId: eventId
    }); 
  }

  return (
    <>
      <p>
        Your Profile Information
      </p>

      <form onSubmit={updateProfile}>
        <label htmlFor="firstName">First Name</label>
        <label htmlFor="firstNameValue">{firstName}</label>

        <label htmlFor="lastName">Last Name</label>
        <label htmlFor="lastNameValue">{lastName}</label>

        <label htmlFor="email">Email</label>
        <label htmlFor="emailValue">{email}</label>

        <label htmlFor="averageStar">Average Star</label>
        <label htmlFor="averageStarValue">{averageStar}</label>

        <label htmlFor="memberSince">Member Since</label>
        <label htmlFor="memberSinceValue">{memberSince}</label>

        <label htmlFor="joinedEvents">joinedEvents</label>

        <ul className="event-list">
        {joinedEventsProfiles.map(event => (
          <li key={event._id} onClick={() => goToEventPage(event._id)}>
            <strong>{event.eventName}</strong>
            <span>{event.gameId}</span>
          </li>
        ))}
        </ul>

        <button type="submit" className="btn">
          Edit Profile
        </button>
      </form>

      <button className="btn" onClick={() => history.push('/user/delete')}>
          Delete Account
      </button>

    </>
  );
}
