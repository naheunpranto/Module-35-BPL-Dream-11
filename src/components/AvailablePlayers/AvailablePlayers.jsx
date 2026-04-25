import React from "react";
import Player from "../Player/Player";

const AvailablePlayers = ({ players, setCoin, coin, selectedPlayers, setSelectedPlayers }) => {
  console.log(players, "players");

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {players.map((player, index) => {
          return <Player key={index} player={player} setCoin = {setCoin} coin = {coin} selectedPlayers = {selectedPlayers} setSelectedPlayers = {setSelectedPlayers}></Player>;
        })}
      </div>
    </div>
  );
};

export default AvailablePlayers;
