import { use, useState } from "react";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";

const Players = ({ playersPromise, setCoin, coin }) => {
  const players = use(playersPromise);

  const [selectedType, setSelectedType] = useState("available");

  const [selectedPlayers, setSelectedPlayers] = useState([]);

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mt-15 mb-8">
        {selectedType === "available" ? (
          <h2 className="font-bold text-3xl">Available Players</h2>
        ) : (
          <h2 className="font-bold text-3xl">Selected Players (2/5)</h2>
        )}

        <div className="flex justify-between">
          <button
            onClick={() => setSelectedType("available")}
            className={`btn ${selectedType === "available" ? "bg-[#E7FE29]" : ""}  font-bold rounded-r-none rounded-l-xl`}
          >
            Available
          </button>

          <button
            onClick={() => setSelectedType("selected")}
            className={`btn ${selectedType === "selected" ? "bg-[#E7FE29]" : ""}  font-bold rounded-r-xl rounded-l-none`}
          >
            Selected (0)
          </button>
        </div>
      </div>

      {selectedType === "available" ? (
        <AvailablePlayers players={players} setCoin = {setCoin} coin = {coin} selectedPlayers = {selectedPlayers} setSelectedPlayers = {setSelectedPlayers}></AvailablePlayers>
      ) : (
        <SelectedPlayers selectedPlayers = {selectedPlayers}></SelectedPlayers>
      )}
    </div>
  );
};

export default Players;
