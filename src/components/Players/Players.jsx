import React, { use } from 'react';

const Players = ({playersPromise}) => {

    console.log(playersPromise);
    const data = use(playersPromise);
    console.log(data);

    return (
        <div>
            Available player: {data.length}
        </div>
    );
};

export default Players;