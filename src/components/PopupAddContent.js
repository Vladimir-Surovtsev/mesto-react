import React from 'react';

function PopupAddContent() {

    return (
        <>
            <h2 className="popup__title">Новое место</h2>
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
            <button type="submit" className="popup__button popup__create-button">Создать</button>
        </>
    );
}

export default PopupAddContent;