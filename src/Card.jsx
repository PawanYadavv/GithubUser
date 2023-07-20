import React, { useEffect, useState } from "react";
import axios from "axios";

function Card(props) {

            const [userData,setuserData] = useState(null);
            
            useEffect(() => {
                   axios.get(props.url).then((res) => {
                    setuserData(res.data);
                   }); 
            });

  // Render the user card with the fetched data
  return (
    <div className="originalclass">
      {userData ? ( // Render the user data if available
        <>
          <h2 className="userid">{userData.id}</h2>
          <h1 className="username">{userData.login}</h1>
          <img className="image" src={userData.avatar_url} alt="err" />
          <div className="container">
          <span>No of Followers</span>
            <p className="para">{userData.followers}</p>
        <span>No. of Following</span>
            <p className="para">{userData.following}</p>
          </div>
        </>
      ) : (
        // Render a loading message or fallback content while data is being fetched
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Card;
