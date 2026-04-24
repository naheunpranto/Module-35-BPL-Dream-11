import React, { use } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';

const Players = ({playersPromise}) => {

    console.log(playersPromise);
    const players = use(playersPromise);
    console.log(players);

    return (
        <div className='container mx-auto'>
            <div>
                <h2>Available Players</h2>

                <div>
                    
                </div>
            </div>

            <AvailablePlayers players = {players}></AvailablePlayers>
        </div>
    );
};

export default Players;