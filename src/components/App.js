import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import PopupEditContent from './PopupEditContent';
import PopupAddContent from './PopupAddContent';
// import PopupAcceptContent from './PopupAcceptContent';
import PopupAvatarContent from './PopupAvatarContent';
import api from '../utils/Api';

function App() {

  const [data, setData] = useState([]);
  
  const [card, setCard] = useState(null);
  const onCardClick = card => setCard(card);

  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = useState(false);

  const onEditAvatar = () => { setisEditAvatarPopupOpen(true); };
  const onEditProfile = () => { setisEditProfilePopupOpen(true); };
  const onAddPlace = () => { setisAddPlacePopupOpen(true); };

  const closeAllPopups = () => {
    setisEditAvatarPopupOpen(false);
    setisEditProfilePopupOpen(false);
    setisAddPlacePopupOpen(false);
    setCard(null);
  }

  useEffect(() => {
    api.getInitialCards().then(data => {
      setData(data)
    })
  }, [])

  return (
    <div style={{ backgroundColor: `black` }}>
      <div className='page'>
        <Header />
        <Main cards={data} onCardClick={onCardClick} handleEditClick={onEditProfile} handleAddClick={onAddPlace} handleAvatarClick={onEditAvatar} />
        <PopupWithForm name={'edit'} isOpen={isEditProfilePopupOpen} closeAllPopups={closeAllPopups}>
          <PopupEditContent />
        </PopupWithForm>
        <PopupWithForm name={'add'} isOpen={isAddPlacePopupOpen} closeAllPopups={closeAllPopups}>
          <PopupAddContent />
        </PopupWithForm>
        <PopupWithForm name={'avatar'} isOpen={isEditAvatarPopupOpen} closeAllPopups={closeAllPopups}>
          <PopupAvatarContent />
        </PopupWithForm>
        <ImagePopup card={card} closeAllPopups={closeAllPopups} />
        <Footer />
      </div>
    </div>
  )
}

export default App;