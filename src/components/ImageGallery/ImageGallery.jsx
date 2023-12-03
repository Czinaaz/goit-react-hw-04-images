import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import css from './ImageGallery.module.css';
import { ImageGalleryItem } from './ImageGalleryItem';
import { createRequest } from '../API/usePixabayApi';

const STATUS = {
  idle: 'idle',
  loading: 'loading',
  error: 'error',
  success: 'success',
};

const ImageGallery = ({ handlerOpenModal, query }) => {
  const [imageList, setImageList] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState(STATUS.idle);
  const [totalHits, setTotalHits] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setStatus(STATUS.loading);
        const res = await createRequest(query);
        const { data } = res;
        setImageList([...data.hits]);
        setPage(2);
        setTotalHits(data.totalHits);
        setStatus(STATUS.success);
      } catch (error) {
        setStatus(STATUS.error);
        setError(error);
      }
    };

    fetchData();
  }, [query]);

  const loadMore = () => {
    createRequest(query, page)
      .then((res) => {
        const { hits } = res.data;
        setImageList((prevImageList) => [...prevImageList, ...hits]);
        setPage((prevPage) => prevPage + 1);
      })
      .catch((error) => {
        setStatus(STATUS.error);
        setError(error);
      });
  };

  if (status === STATUS.loading) {
    return <Loader className={css.loader} />;
  }

  if (status === STATUS.error) {
    return <p>{error}</p>;
  }

  if (!imageList.length) {
    return <p className={css.textGallery}>{`Please, enter the search request`}</p>;
  }

  if (status === STATUS.success) {
    return (
      <>
        <ul className={css.ul}>
          {imageList.map(({ id, webformatURL, largeImageURL }) => (
            <ImageGalleryItem
              key={id}
              smallImg={webformatURL}
              largeImg={largeImageURL}
              handlerOpenModal={handlerOpenModal}
            />
          ))}
        </ul>
        {totalHits >= 12 * page && <Button onClick={loadMore} />}
      </>
    );
  }
};

ImageGallery.propTypes = {
  handlerOpenModal: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export { ImageGallery };
