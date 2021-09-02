import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import PopupEditContent from './PopupEditContent';
import PopupAddContent from './PopupAddContent';
import PopupAvatarContent from './PopupAvatarContent';
import api from '../utils/Api';

function App() {

  const [cards, setCards] = useState([]);

  const [selectedCard, setSelectedCard] = useState(null);
  const onCardClick = selectedCard => setSelectedCard(selectedCard);

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const onEditAvatar = () => { setIsEditAvatarPopupOpen(true); };
  const onEditProfile = () => { setIsEditProfilePopupOpen(true); };
  const onAddPlace = () => { setIsAddPlacePopupOpen(true); };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  useEffect(() => {
    api.getInitialCards().then(cards => {
      setCards(cards)
    }).catch((err) => {
      console.log(err);
    })
  }, [])

  return (
    <div style={{ backgroundColor: `black` }}>
      <div className='page'>
        <Header />
        <Main cards={cards} onCardClick={onCardClick} handleEditClick={onEditProfile} handleAddClick={onAddPlace} handleAvatarClick={onEditAvatar} />
        <PopupWithForm name={'edit'} popupTitle={'Редактировать профиль'} btnName={'Сохранить'} isOpen={isEditProfilePopupOpen} closeAllPopups={closeAllPopups}>
          <PopupEditContent />
        </PopupWithForm>
        <PopupWithForm name={'add'} popupTitle={'Новое место'} btnName={'Создать'} isOpen={isAddPlacePopupOpen} closeAllPopups={closeAllPopups}>
          <PopupAddContent />
        </PopupWithForm>
        <PopupWithForm name={'avatar'} popupTitle={'Обновить аватар'} btnName={'Сохранить'} isOpen={isEditAvatarPopupOpen} closeAllPopups={closeAllPopups}>
          <PopupAvatarContent />
        </PopupWithForm>
        <ImagePopup card={selectedCard} closeAllPopups={closeAllPopups} />
        <Footer />
      </div>
    </div>
  )
}

export default App;