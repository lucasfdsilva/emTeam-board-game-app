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
  const [hostedEvents, setHostedEvents] = useState([]);

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

        const responseHostedEvents = await backendApi.get(`/events/host/${userId}`);
        
        setHostedEvents(responseHostedEvents.data.message);

        console.log(responseHostedEvents.data.message);


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

      <form className="label" onSubmit={updateProfile}>
        <label htmlFor="firstName" className="label">First Name: </label>
        <label htmlFor="firstNameValue" className="data">{firstName}</label>

        <label htmlFor="lastName" className="label">Last Name: </label>
        <label htmlFor="lastNameValue" className="data">{lastName}</label>

        <label htmlFor="email" className="label">Email: </label>
        <label htmlFor="emailValue" className="data">{email}</label>

        <label htmlFor="averageStar" className="label">Reputation: </label>
        <label htmlFor="averageStarValue" className="data">{averageStar} stars</label>

        <label htmlFor="memberSince"className="label">Member Since: </label>
        <label htmlFor="memberSinceValue" className="data">{memberSince}</label>

        <div className="joinedEvents">
          <label htmlFor="joinedEvents">Joined Events</label>
          <ul className="event-list">
          {joinedEventsProfiles.map(event => (
            <li key={event._id} onClick={() => goToEventPage(event._id)}>
              <strong>{event.eventName}</strong>
              <span>{event.gameId}</span>
            </li>
          ))}
          </ul>
        </div>
        
        <div className="hostedEvents">
          <label htmlFor="hostedEvents" >Hosted Events</label>
          <ul className="event-list">
          {hostedEvents.map(event => (
            <li key={event._id} onClick={() => goToEventPage(event._id)}>
              <strong>{event.eventName}</strong>
              <span>{event.gameId}</span>
            </li>
          ))}
          </ul>
        </div>
        </form>
      <div className="buttons">  
        <button type="submit" className="editBtn">
            Edit Profile
        </button>

        <button className="deleteBtn" onClick={() => history.push('/user/delete')}>
            Delete Account
        </button>
      </div>

    </>
  );
}
