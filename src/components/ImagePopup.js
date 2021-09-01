import React from 'react';

function ImagePopup({ card, closeAllPopups }) {
    return (
        <div className={`popup popup_type_image ${card && 'popup_is-opened'}`}>
            <div className="popup__big-image">
                <button type="button" className="popup__close" aria-label="Закрыть" onClick={closeAllPopups}></button>
                <img src={card ? card.link : ''} alt={card ? card.name : ''} className="popup__image" />
                <p className="popup__title-image">{card ? card.name : ''}</p>
            </div>
        </div>
    );
}

export default ImagePopup;