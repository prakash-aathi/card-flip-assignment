import React, { useState } from 'react'
import "../components/Card.css"

const Card = ({pic,name,role,desc,tech}) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleCardClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="card">
            <div
                className={`card__inner ${isFlipped ? 'is-flipped' : ''}`}
                onClick={handleCardClick}
            >
                <div className="card__face card__face--front">
                    <h2>Prakash A</h2>
                </div>
                <div className="card__face card__face--back">
                    <div className="card__content">
                        <div className="card__header">
                            <img src={pic} alt="profilePic" className="pp" />
                            <h2>{ name }</h2>
                        </div>
                        <div className="card__body">
                            <h3>{ role }</h3>
                            <p>
                                {desc}
                                <br /> <br />
                                <strong>Tech Stack:</strong>
                                <br />
                                <i>{ tech }</i>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Card