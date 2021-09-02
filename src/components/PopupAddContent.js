import React from 'react';
import PopupWithForm from './PopupWithForm';

function PopupAddContent() {

    return (
        <>
            <label className="popup__field">
                <input name="place" type="text" id="place-input" className="popup__input" placeholder="Название"
                    required minLength="2" maxLength="30" />
                <span className="popup__input-error place-input-error"></span>
            </label>
            <label className="popup__field">
                <input name="image" type="url" id="image-link-input" className="popup__input"
                    placeholder="Ссылка на картинку" required />
                <span className="popup__input-error image-link-input-error"></span>
            </label>
        </>
    );
}

export default PopupAddContent;