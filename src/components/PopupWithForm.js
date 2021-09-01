import React from 'react';

function PopupWithForm({ name, children, isOpen, closeAllPopups }) {

    return (
        <div className={`popup popup_type_${name} ${isOpen && 'popup_is-opened'}`}>
            <div className="popup__forms">
                <button type="button" className="popup__close" aria-label="Закрыть" onClick={closeAllPopups} ></button>
                <form name={`${name}`} id="edit-profile-form" className="popup__form">
                    <fieldset className="popup__set">
                        {children}
                    </fieldset>
                </form>
            </div>
        </div>
    );
}

export default PopupWithForm;