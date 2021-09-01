import React from 'react';

function PopupAcceptContent() {

    return (
        <>
            <h2 className="popup__title">Вы уверены?</h2>
            <button type="button" className="popup__button popup__accept-button"
                aria-label="Вы согласны?">Да</button>
        </>
    );
}

export default PopupAcceptContent;