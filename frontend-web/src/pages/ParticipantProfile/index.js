import React, { useState, useEffect } from "react";
import backendApi from "../../services/backendApi";

import "./style.css";

export default function LoadUser({ history }) {
  const [participantId, setParticipantID ] = useState(history.location.participantId);
  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [averageStar, setAverageStar] = useState(0);
  const [stars, setStars] = useState(0);

  useEffect(() => {
    async function loadUser() {
      try {
        const response = await backendApi.get(`/users/${participantId}`);

        setFirstName(response.data.message.firstName);
        setLastName(response.data.message.lastName);
        setAverageStar(response.data.message.averageStar);

        console.log(response.data.message)

      } catch (e) {
        console.log(e);
      }
    }
    loadUser();
  }, []);

  async function showScore(e){
    e.preventDefault();

    const response = await backendApi.put('/rate_user', {userId, ratedUserId: participantId, stars});

    console.log(response.data);

    console.log(stars);
  }

  return (
    <>
      <p>
        Participant Information
      </p>

      <form>
    
        <label htmlFor="firstName">First Name</label>
        <label htmlFor="firstNameValue">{firstName}</label>

        <label htmlFor="lastName">Last Name</label>
        <label htmlFor="lastNameValue">{lastName}</label>

        <label htmlFor="averageStar">Average Score</label>
        <label htmlFor="averageStarValue">{averageStar}</label>

        <select value={stars} onChange={event => setStars(event.target.value)}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>

        <button onClick={(e) => showScore(e)}>Rate Participant</button>

      </form>

      
    </>
  );
}
