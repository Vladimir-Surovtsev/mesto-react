import React from 'react';

function PopupWithForm({ name, children, isOpen, closeAllPopups, popupTitle, btnName }) {

    return (
        <div className={`popup popup_type_${name} ${isOpen && 'popup_is-opened'}`}>
            <div className="popup__forms">
                <button type="button" className="popup__close" aria-label="Закрыть" onClick={closeAllPopups} ></button>
                <form name={`${name}`} id={`${name}`} className="popup__form">
                    <fieldset className="popup__set">
                        <h2 className="popup__title">{popupTitle}</h2>
                        {children}
                        <button type="submit" className="popup__button" aria-label={`${btnName}`}>{btnName}</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
}

export default PopupWithForm;