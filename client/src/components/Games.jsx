import React from 'react'
import { useEffect } from 'react';

  async function GetAllGames (){
        try {
            const games = await fetch("http://localhost:3000/games");
            const response = games.json();

           console.log(response);
            return response;
            
        } catch (error) {
            console.log(error);
        }
    }

export default function Games() {

    useEffect(()=>{
        GetAllGames();
    },[]);
  

  return (
    <div>Games</div>
  )
}
