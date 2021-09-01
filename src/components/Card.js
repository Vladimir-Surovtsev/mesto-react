import React from 'react';

function Card({ cardLink, cardTitle, likesCounter, onCardClick, card }) {

    return (
        <li className="elements__element">
            <img className="elements__image" src={cardLink} alt={cardTitle} onClick={() => onCardClick(card)} />
            <button type="button" className="elements__trash" aria-label="Корзина"></button>
            <div className="elements__body">
                <h2 className="elements__title">{cardTitle}</h2>
                <div className="elements__like-group">
                    <button type="button" className="elements__like" aria-label="Нравится"></button>
                    <p className="elements__like-counter">{likesCounter}</p>
                </div>
            </div>
        </li>
    );
}

export default Card;