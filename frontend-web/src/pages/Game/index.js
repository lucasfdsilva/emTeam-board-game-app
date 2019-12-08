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
        
      } catch (e) {
        console.log('External Board Games is API is currently unnavailable , please try again later')
      }
    }
    loadGameDetails();
  }, []);


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

        <Link to='/events/game' params={{ gameId: gameId }}>
          <button className="btn">See Available Events</button>
        </Link>

      </>
    )
  }