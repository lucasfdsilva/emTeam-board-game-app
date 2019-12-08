import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import backendApi from "../../services/backendApi";
import boardGamesApi from "../../services/boardGamesApi";
import Game from '../Game'


import "./style.css";

export default function Dashboard( {history} ) {
  const [games, setGames,] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  

  useEffect(() => {
    async function loadGames() {
      try {
        const response = await boardGamesApi.get(
          "/search?order_by=popularity&ascending=false",
          {
            params: {
              limit: 10,
              client_id: "SB1VGnDv7M"
            }
          }
        );
        setGames(response.data.games);
      } catch (e) {
        setErrorMessage("External Board Games is API is currently unnavailable , please try again later");
      }
    }
    loadGames();
    setErrorMessage("papai")
    console.log(errorMessage)
  }, []);

  function goToGamePage(gameId){
    history.push({
      pathname: `/game/${gameId}`,
      gameId: gameId
    });
  }

  return (
    <>
      <ul className="game-list">
        {games.map(game => (
          <li key={game.id} onClick={() => goToGamePage(game.id)}>
            <header style={{ backgroundImage: `url(${game.image_url})` }} />
            <strong>{game.name}</strong>
            <span>{game.year_published}</span>
          </li>
        ))}
      </ul>

      <Link to="/new">
        <button className="btn">Register a new spot</button>
      </Link>
    </>
  );
}
