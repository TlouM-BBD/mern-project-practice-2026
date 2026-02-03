import React from "react";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

export default function Games() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function GetAllGames() {
      try {
        const games = await fetch("http://localhost:3001/games");
        const response = await games.json();

        console.log(response);
        setGames(response);
        return response;
      } catch (error) {
        console.log(error);
      }
    }

    GetAllGames();
  }, []);

  return (
    <div className="p-2 m-2">
      <h1>All games</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {games && games.length > 0
          ? games.map((game) => (
              <MovieCard
                dateReleased={game.dateReleased}
                description={game.description}
                genre={game.genre}
                title={game.title}
                key={game._id}
              />
            ))
          : "NO games found"}
      </div>
    </div>
  );
}
