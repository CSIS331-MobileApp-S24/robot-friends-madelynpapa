import React from 'react';

const Card = () => {
    return(
        <div className="bg-light-green dib br3 ma2 pa3 tc grow">
            <img src = "https://robohash.org/maddiepapa?size=200x200" alt = "picture of robot" />
            <div>
                <h2>Jane Doe</h2>
                <p>jane.doe@gmail.com</p>
            </div>
        </div>
    );
};

export default Card;