import React, { useState, useMemo } from 'react';
import backendApi from '../../services/backendApi';
import axios from 'axios'

import camera from '../../assets/camera.svg';

import './styles.css';

export default function New({history}) {
    const [userId, setUserId] = useState('5ddda95251d90300133a6cf6');
    const [gameId, setGameId] = useState('65498761');
    const [gameName, setGameName] = useState('');
    const [gameImageUrl, setGameImageUrl] = useState('');
    const [gamePublishedDate, setGamePublishedDate] = useState('');
    const [eventName, setEventName] = useState('');
    const [eventLocation, setEventLocation] = useState('');
    const [eventDate, setEventDate] = useState(0);
    const [eventNumOfPlayers, setEventNumOfPlayers] = useState(0);
    const [eventDuration, setEventDuration] = useState(0);

    async function handleSubmit(event){
        event.preventDefault();
        console.log('trying')
        console.log(userId, eventName, gameId, eventLocation, eventDate, eventNumOfPlayers, eventDuration)
        try{
        const response = await backendApi.post('/events/create', {
            hostId: userId,
            eventName: eventName,
            gameId: gameId,
            location: eventLocation,
            eventDate: eventDate,
            numOfPlayers: eventNumOfPlayers,
            duration: eventDuration
        });
        
            /*const response = await axios({
            method: 'post',
            url: 'http://localhost:5000/events/create',
            data:{
                hostId: userId,
                eventName: eventName,
                gameId: gameId,
                location: eventLocation,
                eventDate: eventDate,
                numOfPlayers: eventNumOfPlayers,
                duration: eventDuration
            }
        });*/
        
        console.log("deu certo")
        console.log(response.data)

        //history.push('/dashboard');
        }catch(e){
        //console.log(e)
        }
    }

    return (
        <form onSubmit={handleSubmit}>      

            <label htmlFor="eventName">Event Name *</label>
            <input 
            id="eventName"
            placeholder="Event Name"
            value={eventName}
            onChange={event => setEventName(event.target.value)}
            />

            <label htmlFor="eventLocation">Location *</label>
            <input 
            id="eventLocation"
            placeholder="Where will the event take place?"
            value={eventLocation}
            onChange={event => setEventLocation(event.target.value)}
            />

            <label htmlFor="eventDate">Date *</label>
            <input 
            id="eventDate"
            type="date"
            placeholder="When will the event happen?"
            value={eventDate}
            onChange={event => setEventDate(event.target.value)}
            />

            <label htmlFor="eventNumOfPlayers">Max Number of Players *</label>
            <input 
            id="eventNumOfPlayers"
            placeholder="Max number of players allowed"
            value={eventNumOfPlayers}
            onChange={event => setEventNumOfPlayers(event.target.value)}
            />

            <label htmlFor="eventDuration">Duration *</label>
            <input 
            id="eventDuration"
            placeholder="How long will the event last?"
            value={eventDuration}
            onChange={event => setEventDuration(event.target.value)}
            />

            <button type="submit" className="btn">Register</button>
        </form>
    )
}