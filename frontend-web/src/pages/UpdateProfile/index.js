import React, { useState, useEffect } from "react";
import backendApi from "../../services/backendApi";

export default function UpdateProfile({ history }) {
  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken"));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [averageStar, setAverageStar] = useState(0);
  const [joinedEvents, setJoinedEvents] = useState([]);
  const [memberSince, setMemberSince] = useState("");

  useEffect(() => {
    async function loadProfile() {
      try {
        const response = await backendApi.get(`/users/${userId}`);

        console.log(response.data);

        setFirstName(response.data.message.firstName);
        setLastName(response.data.message.lastName);
        setEmail(response.data.message.email);
        
      } catch (e) {
        console.log(e);
      }
    }
    loadProfile();
  }, []);


  async function updateProfile(event){
    event.preventDefault();
    try{
        const response = await backendApi.put('/users/update', { id:userId, firstName, lastName, email});
        console.log(response.data);
        history.push({
            pathname: '/user/profile'
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

      <form onSubmit={updateProfile}>
        <label htmlFor="firstName">First Name *</label>
        <input
          id="firstName"
          placeholder={firstName}
          value={firstName}
          onChange={event => setFirstName(event.target.value)}
        />

        <label htmlFor="lastName">Last Name *</label>
        <input
          id="lastName"
          placeholder={lastName}
          value={lastName}
          onChange={event => setLastName(event.target.value)}
        />

        <label htmlFor="email">Email *</label>
        <input
          id="email"
          placeholder={email}
          value={email}
          onChange={event => setEmail(event.target.value)}
        />

        <button type="submit" className="btn">
          Update Profile
        </button>
      </form>
    </>
  );
}
