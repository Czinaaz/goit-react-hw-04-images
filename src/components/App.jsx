import React, { useState } from 'react';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const App = () => {
  const [image, setImage] = useState('');
  const [query, setQuery] = useState('');

  const handlerOpenModal = (img) => {
    setImage(img);
  };

  const handlerCloseModal = () => {
    setImage('');
  };

  const handlerForm = (query) => {
    setQuery(query);
  };

  return (
    <div>
      <Searchbar onSubmit={handlerForm} />

      <ImageGallery query={query} handlerOpenModal={handlerOpenModal} />

      {image && <Modal image={image} onClose={handlerCloseModal} />}
      <ToastContainer />
    </div>
  );
};

export { App };
