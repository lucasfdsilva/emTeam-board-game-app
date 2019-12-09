import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import backendApi from "../../services/backendApi";
import boardGamesApi from "../../services/boardGamesApi";

import "./style.css";

export default function Game ({history}) {
  const [gameId, setGameId] = useState(history.location.gameId);
  const [gameName, setGameName] = useState(history.location.gameName);
  const [gameImageUrl, setGameImageUrl] = useState('');
  const [gamePublishedDate, setGamePublishedDate] = useState('');
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function loadGameDetails() {

      try {
        const response = await boardGamesApi.get(
          "/search?",
          {
            params: {
              ids: gameId,
              client_id: "SB1VGnDv7M"
            }
          }
        );
        console.log(response.data)
        response.data.games.forEach(element => {
          setGameName(element.name)  
        })
        response.data.games.forEach(element => {
          setGameImageUrl(element.image_url)  
        })
        response.data.games.forEach(element => {
          setGamePublishedDate(element.year_published)  
        })

        const responseEvents = await backendApi.get(`/events/game/${gameId}`);

        if(responseEvents.data.message.length > 0){
          setEvents(responseEvents.data.message);
          console.log("Added Events", responseEvents.data.message)
        }

        if(events.length <= 0){
          console.log("No events for this game")
        }
        
      } catch (e) {
        console.log('Error loading Game Information')
      }
    }
    loadGameDetails();
  }, []);

  async function goToEventPage(eventId){
    history.push({
      pathname: '/event/profile',
      eventId: eventId
    })
  }


  return (
      <>
        <ul className="game-details">
          <li>
              <header style={{ backgroundImage: `url(${gameImageUrl})` }} />
              <strong>{gameName}</strong>
              <span>{gamePublishedDate}</span>
          </li>
        </ul>

        <Link to={{ pathname: "/register_event", gameId: gameId }}>
          <button className="btn">Host Event</button>
        </Link>

        <label htmlFor="availableEvents">Available Events for this Game</label>
          <ul className="event-list">
          {events.map(event => (
            <li key={event._id} onClick={() => goToEventPage(event._id)}>
              <strong>{event.eventName}</strong>
              <span>{event.gameId}</span>
            </li>
          ))}
        </ul>


      </>
    )
  }