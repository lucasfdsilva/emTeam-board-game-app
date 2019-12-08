import React, { useEffect, useState } from 'react';
import backendApi from '../../services/backendApi'

export default function DeleteUser( { history } ) {
  const [userId, setUserId] = useState(localStorage.getItem("userId"));

  async function deleteUser(event){
    event.preventDefault();

    const response = await backendApi.delete('/users/delete', { data: { id: userId } });

    console.log(response.data);

    localStorage.setItem('userId', '');
    localStorage.setItem('accessToken', '');
    
    alert("Your account has been deleted");

    history.push({
      pathname: '/'
    });
  }

  function abort(event){
    event.preventDefault();
    history.push({
      pathname: '/user/profile'
    });
  }

    return (
        <>
            <p>
              Are you sure you want to delete your account? 
            </p>

            <button className="btn" onClick={(event) => deleteUser(event)}>Delete Account</button>
            <button className="btn" onClick={(event) => abort(event)}>Cancel</button>
        </>
    )
}