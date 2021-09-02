import React from 'react';
import PopupWithForm from './PopupWithForm';

function PopupEditContent() {

    return (
        <>
            <label className="popup__field">
                <input name="name" type="text" id="name-input" className="popup__input" defaultValue="" required
                    minLength="2" maxLength="40" />
                <span className="popup__input-error name-input-error"></span>
            </label>
            <label className="popup__field">
                <input name="about" type="text" id="job-input" className="popup__input" defaultValue="" required
                    minLength="2" maxLength="200" />
                <span className="popup__input-error job-input-error"></span>
            </label>
        </>
    );
}

export default PopupEditContent;