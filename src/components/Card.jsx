import React from 'react'
import "../components/Card.css"

const Card = ({ card,disabled, handleChoice, flipped }) => {

    const handleCardClick = () => {
        if (!disabled) {
            handleChoice(card)
        }
    };

    return (
        <div className="card">
            <div
                className={`card__inner ${flipped ? 'is-flipped' : ''}`}

            >
                <div className="card__face card__face--front" onClick={handleCardClick}>
                    {/* <h2>Prakash A</h2> */}
                </div>
                <div className="card__face card__face--back">
                    <div className="card__content">
                        <div className="card__header">
                            <img src={card.src} alt="profilePic" className="pp" />
                            <h2>{card.name}</h2>
                        </div>
                        {/* <div className="card__body">
                            <h3>{ role }</h3>
                            <p>
                                {desc}
                                <br /> <br />
                                <strong>Tech Stack:</strong>
                                <br />
                                <i>{ tech }</i>
                            </p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Card