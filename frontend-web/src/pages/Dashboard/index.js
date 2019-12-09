import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import backendApi from "../../services/backendApi";
import boardGamesApi from "../../services/boardGamesApi";
import Game from '../Game'

import "./style.css";

export default function Dashboard( {history, screenProps} ) {
  const [games, setGames,] = useState([]);
  const [name, setName] = useState('');
  

  async function loadGames(searchName) {
    try {
      const response = await boardGamesApi.get("/search?order_by=popularity&ascending=false",
        {
          params: {
            limit: 15,
            name: searchName,
            client_id: "SB1VGnDv7M"
          }
        }
      );
      setGames(response.data.games);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    loadGames('');
  }, []);

  function goToGamePage(gameId){
    history.push({
      pathname: `/game/${gameId}`,
      gameId: gameId
    });
  }

  return (
    <>
    <div className="search">
      <input 
        placeholder="Search Games"
        className="searchBar"
        value={name}
        onChange={event => setName(event.target.value)}
      />

      
        <button onClick={() => loadGames(name)}>Search Games</button>
      </div>

      <strong className="popular">Most Popular Games</strong>

      <ul className="game-list">
        {games.map(game => (
          <li key={game.id} onClick={() => goToGamePage(game.id)}>
            <header style={{ backgroundImage: `url(${game.image_url})` }} />
            <strong>{game.name}</strong>
            <span>{game.year_published}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
