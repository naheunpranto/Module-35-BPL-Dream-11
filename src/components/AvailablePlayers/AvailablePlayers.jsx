import React from "react";
import Player from "../Player/Player";

const AvailablePlayers = ({ players }) => {
  console.log(players, "players");

  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                players.map(player => {
                    return <Player player = {player}></Player>
                })
            }
        </div>
    </div>
  );
};

export default AvailablePlayers;
