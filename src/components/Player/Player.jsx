import { useState } from "react";
import { FaFlag, FaUser } from "react-icons/fa";

const Player = ({player, setCoin, coin}) => {


    const {
        playerName,
        playerCountry,
        playerType,
        rating,
        battingStyle,
        bowlingStyle,
        price,
        playerImg,
      } = player;

  const [isSelected, setIsSelected] = useState(false);

  const handleChoosePlayer = () => {
    
    let newCoin = coin - price;
    
    if(newCoin >= 0){
      setCoin(coin - price);
    }
    else{
      alert("Not enough coin to purchase this player");
      return;
    }

    alert(`${playerName} is selected`)
    setIsSelected(true); 
  }



  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img src={playerImg} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <FaUser />
          {playerName}
        </h2>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <FaFlag></FaFlag>
            <p>{playerCountry}</p>
          </div>

          <button className="btn btn-ghost">{playerType}</button>
        </div>
        <div className="divider"></div>

        <h2 className="font-bold">{rating}</h2>

        <div className="flex justify-between items-center font-bold">
          <p>{battingStyle}</p>
          <p className="text-right">{bowlingStyle}</p>
        </div>

        <div className="card-actions justify-between items-center">
          <p className="font-bold">Price: {price}</p>
          <button className="btn btn-ghost" onClick={handleChoosePlayer} 
            disabled = {isSelected ? true : false}>
            {isSelected === true ? "Selected" : "Choose player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
