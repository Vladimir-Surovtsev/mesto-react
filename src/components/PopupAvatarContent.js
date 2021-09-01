import React from 'react';

function PopupAvatarContent() {

    return (
        <>
            <h2 className="popup__title">Обновить аватар</h2>
            <label className="popup__field">
                <input name="avatar" type="url" id="avatar-link-input" className="popup__input"
                    placeholder="Ссылка на аватар" required />
                <span className="popup__input-error avatar-link-input-error"></span>
            </label>
            <button type="button" className="popup__button popup__avatar-button"
                aria-label="Сохранить">Сохранить</button>
        </>
    );
}

export default PopupAvatarContent;