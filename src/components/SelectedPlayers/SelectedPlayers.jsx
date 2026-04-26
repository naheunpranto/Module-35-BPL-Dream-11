import { FaUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin,
}) => {
  console.log(selectedPlayers, "slectedPlayers");

  const handleDeleteSelectedPlayer = (player) => {
    console.log(selectedPlayers, "player");

    const filteredPlayers = selectedPlayers.filter(
      (selectedPlayer) => selectedPlayer.playerName != player.playerName,
    );

    console.log(filteredPlayers, "filteredPlayers");

    setSelectedPlayers(filteredPlayers);

    setCoin(coin + player.price);
  };

  return (
    <div className="space-y-5">
      {selectedPlayers.map((player, ind) => {
        return (
          <div
            key={ind}
            className="flex justify-between items-center gap-6 p-10 rounded-2xl border"
          >
            <div className="flex items-center gap-3">
              <img
                src={player.playerImg}
                alt=""
                className="h-18.75 w-auto rounded-md"
              />
              <div>
                <h2 className="flex items-center gap-2 font-semibold text-2xl">
                  <FaUser />
                  {player.playerName}
                </h2>
                <p>{player.playerType}</p>
              </div>
            </div>

            <button
              className="btn text-red-500"
              onClick={() => handleDeleteSelectedPlayer(player)}
            >
              <MdDelete />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default SelectedPlayers;
