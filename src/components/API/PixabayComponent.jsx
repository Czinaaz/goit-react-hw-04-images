// PixabayComponent.js
import React from 'react';
import usePixabayApi from './usePixabayApi';

const PixabayComponent = ({ searchTerm }) => {
  const { data, loading, error } = usePixabayApi(searchTerm);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // Renderuj komponent z danymi z Pixabay API
  return (
    <div>
      {data.hits.map((item) => (
        <img key={item.id} src={item.previewURL} alt={item.tags} />
      ))}
    </div>
  );
};

export default PixabayComponent;
