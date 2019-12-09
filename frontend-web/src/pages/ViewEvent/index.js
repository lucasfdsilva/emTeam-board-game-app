import React, { useState, useEffect } from "react";
import backendApi from "../../services/backendApi";

import "./style.css";

export default function LoadEvent({ history }) {
  const [eventId, setEventId] = useState(history.location.eventId);
  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken"));
  const [hostId, setHostId] = useState("");
  const [eventName, setEventName] = useState("");
  const [gameId, setGameId] = useState("");
  const [location, setLocation] = useState("");
  const [numOfPlayers, setNumOfPlayers] = useState(0);
  const [duration, setDuration] = useState(0);
  const [eventDate, setEventDate] = useState('')
  const [participantsProfiles, setParticipantsProfiles] = useState([]);
  const [isTheHost, setIsTheHost] = useState(false);

  useEffect(() => {
    async function loadEvent() {
      try {
        const response = await backendApi.get(`/events/${eventId}`);

        setHostId(response.data.message.hostId);
        setEventName(response.data.message.eventName);
        setGameId(response.data.message.gameId);
        setLocation(response.data.message.location);
        setNumOfPlayers(response.data.message.numOfPlayers);
        setDuration(response.data.message.duration);
        setEventDate(response.data.message.eventDate);
        setParticipantsProfiles(response.data.message.participantsProfiles);

        console.log(response.data.message)

        if(userId == response.data.message.hostId){
          setIsTheHost(true);
        }

      } catch (e) {
        console.log(e);
      }
    }
    loadEvent();
  }, []);

  async function goToParticipantPage(participantId){
    history.push({
      pathname: `/participant/profile`,
      participantId: participantId
    });
  }

  async function joinEvent(e){
    e.preventDefault();
    const responseJoinEvent = await backendApi.put('/join_event', { eventId, userId } );
    console.log(responseJoinEvent.data);

    setTimeout(() => {alert("Joining Event"); }, 500)
    /*history.push({
      pathname: '/event/profile',
      eventId: eventId
    });*/
  }

  async function leaveEvent(e){
    e.preventDefault();
    const responseLeaveEvent = await backendApi.put(`/leave_event`, { eventId, userId } );
    console.log(responseLeaveEvent.data);

    setTimeout(() => {alert("Leaving Event"); }, 500)
    history.push({
      pathname: '/dashboard'
    });
  }

  async function editEvent(e){
    e.preventDefault();
    history.push({
      pathname: '/event/update',
      eventId: eventId
    });
  }

  return (
    <>
      <p>
        Event Information
      </p>

      <form>
    
        <label htmlFor="eventName">Event Name</label>
        <label htmlFor="eventNameValue">{eventName}</label>

        <label htmlFor="location">Event Location</label>
        <label htmlFor="locationValue">{location}</label>

        <label htmlFor="numOfPlayers">Max. Num of Players</label>
        <label htmlFor="numOfPlayersValue">{numOfPlayers}</label>

        <label htmlFor="duration">Event Duration</label>
        <label htmlFor="durationValue">{duration}</label>

        <label htmlFor="eventDate">Event Date</label>
        <label htmlFor="eventDateValue">{eventDate}</label>

        <label htmlFor="participantsProfiles">Event Participants</label>
        <ul className="participants-list">
        {participantsProfiles.map(participant => (
          <li key={participant._id} onClick={() => goToParticipantPage(participant._id)}>
            <strong>{participant.firstName + ' ' + participant.lastName}</strong>
            <span>{participant.averageStar}</span>
          </li>
        ))}
        </ul>

        <button onClick={(e) => joinEvent(e)} className="btn">
          Join Event
        </button>

        <button onClick={(e) => leaveEvent(e)} className="btn">
          Leave Event
        </button>

        {isTheHost && (<button onClick={(e) => editEvent(e)} className="btn">
          Edit Event
        </button>)}

      </form>

    </>
  );
}
