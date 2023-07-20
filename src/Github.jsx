import React, { useEffect,useState } from "react";
import axios from "axios";
import Card from "./Card";
import "./Github.css";


function Github() {
    const [Apidata,setApidata] = useState([]);
                console.log(Apidata);
    useEffect(() => {
                axios.get('https://api.github.com/users').then(res => {
                    setApidata(res.data);
                }).catch(error => {
                    console.log(error);
                })
    }, []);

    return (
        <div>
        <h1 className="Topclass">List of Github Users </h1>


<div className="github-container">
      { Apidata.map(data => {
        return (
            <Card
            key={data.id}
                id={data.id}
                url={data.url}    
                // https://api.github.com/users/mojombo
                avatarurl = {data.avatar_url} 
                Login = {data.login}
                follower = {data.followers}
                following = {data.following}
            />
            )
        })} 
</div>
        </div>
    );    
}


export default Github;
//apikey =  https://api.github.com/users



