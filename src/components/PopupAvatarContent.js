import React from 'react';
import PopupWithForm from './PopupWithForm';

function PopupAvatarContent() {

    return (
        <>
            <label className="popup__field">
                <input name="avatar" type="url" id="avatar-link-input" className="popup__input"
                    placeholder="Ссылка на аватар" required />
                <span className="popup__input-error avatar-link-input-error"></span>
            </label>
        </>
    );
}

export default PopupAvatarContent;