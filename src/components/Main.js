import React, { useState } from 'react';
import api from '../utils/Api.js';
import pen_avatar from '../images/pen_avatar.png';
import Card from './Card';

function Main({ cards, onCardClick, handleAvatarClick, handleEditClick, handleAddClick }) {
    const [currentUser, setCurrentUser] = useState({})

    useState(() => {
        api.getInitialMe().then(currentUser => {
            setCurrentUser(currentUser);
        }).catch((err) => {
            console.log(err);
        })
    });

    const userAvatar = currentUser.avatar;
    const userName = currentUser.name;
    const userDescription = currentUser.about;

    return (
        <>
            <section className="profile">
                <img src={pen_avatar} alt="Поменять аватар" className="profile__pen" />
                <img src={userAvatar} alt="Аватарка" className="profile__image" onClick={handleAvatarClick} />
                <div className="profile__info">
                    <div className="profile__body">
                        <h1 className="profile__title">{userName}</h1>
                        <button type="button" className="profile__edit-button" aria-label="Редактировать" onClick={handleEditClick}></button>
                    </div>
                    <p className="profile__subtitle">{userDescription}</p>
                </div>
                <button type="button" className="profile__add-button" aria-label="Добавить" onClick={handleAddClick}></button>
            </section>
            <section className="cards">
                <ul className="elements">
                    {cards.map((card) => <Card key={card._id} card={card} onCardClick={onCardClick} />)}
                </ul>
            </section>
        </>
    );
}

export default Main;