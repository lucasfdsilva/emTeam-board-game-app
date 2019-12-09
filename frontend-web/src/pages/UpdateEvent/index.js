import React, { useState, useEffect } from "react";
import backendApi from "../../services/backendApi";

export default function UpdateEvent({ history }) {
  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  const [eventId, setEventId] = useState(history.location.eventId);
  const [eventName, setEventName] = useState("");
  const [gameId, setGameId] = useState("");
  const [location, setLocation] = useState("");
  const [eventDate, setEventDate] = useState("yyyy-MM-dd");
  const [numOfPlayers, setNumOfPlayers] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    async function loadEvent() {
      try {
        const response = await backendApi.get(`/events/${eventId}`);

        console.log(response.data);

        setEventName(response.data.message.eventName);
        setGameId(response.data.message.gameId);
        setLocation(response.data.message.location);
        setNumOfPlayers(response.data.message.numOfPlayers);
        setDuration(response.data.message.duration);
        setEventDate(response.data.message.eventDate);
        
      } catch (e) {
        console.log(e);
      }
    }
    loadEvent();
  }, []);


  async function updateEvent(event){
    event.preventDefault();
    try{
        const response = await backendApi.put('/events/update', { eventId, eventName, gameId, location, eventDate, numOfPlayers, duration });
        console.log(response.data);
        history.push({
            pathname: '/event/profile',
            eventId: eventId
          }); 
    }catch(e){
        console.log(e);
    }
  }

  return (
    <>
      <p>
        Use the fields below to update your information.
      </p>

      <form onSubmit={updateEvent}>
        <label htmlFor="eventName">Event Name *</label>
        <input
          id="eventName"
          placeholder={eventName}
          value={eventName}
          onChange={event => setEventName(event.target.value)}
        />

        <label htmlFor="location">Event Location *</label>
        <input
          id="location"
          placeholder={location}
          value={location}
          onChange={event => setLocation(event.target.value)}
        />

        <label htmlFor="eventDate">Event Date *</label>
        <input
          id="eventDate"
          type="date"
          placeholder={eventDate}
          value={eventDate}
          onChange={event => setEventDate(event.target.value)}
        />

        <label htmlFor="numOfPlayers">Num of Players *</label>
          <input
            id="numOfPlayers"
            placeholder={numOfPlayers}
            value={numOfPlayers}
            onChange={event => setNumOfPlayers(event.target.value)}
        />

        <label htmlFor="duration">Duration (in minutes) *</label>
          <input
            id="duration"
            placeholder={duration}
            value={duration}
            onChange={event => setDuration(event.target.value)}
        />

        <button type="submit" className="btn">
          Update Event
        </button>
      </form>
    </>
  );
}
