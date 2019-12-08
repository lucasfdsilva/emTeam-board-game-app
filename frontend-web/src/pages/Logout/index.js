import React, { useEffect } from 'react';

export default function Logout( {history} ) {

  useEffect(() => {
    async function logout(){

      localStorage.setItem('userId', '');
      localStorage.setItem('accessToken', '');
    
      alert("You're logged out");

      history.push({
        pathname: '/'
      });
    }
    logout();
  }, [])

    return (
        <>
            <p>
                Logging out...
            </p>
        </>
    )
}