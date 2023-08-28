import React, { useState } from 'react'
import "../components/Card.css"

const Card = () => {
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
                            <img src="https://avatars.githubusercontent.com/u/76159067?v=4" alt="profilePic" className="pp" />
                            <h2>Prakash A</h2>
                        </div>
                        <div className="card__body">
                            <h3>Software developer</h3>
                            <p>
                                Full Stack Developer with a passion for developing scalable web applications.
                                Focused on efficient learning and eager to tackle more complex problems.
                                <br /> <br />
                                <strong>Tech Stack:</strong>
                                <br />
                                <i>React js, tailwind css, sass, Next js</i>
                                <br />
                                <i>Spring boot, Flask</i>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Card