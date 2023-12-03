
import axios from 'axios';

const API_KEY = '39928723-f6b1546c2ba029a098dc6a39a';
const BASE_URL = 'https://pixabay.com/api/';

async function createRequest(name, page = 1) {
  const params = {
    url: BASE_URL,
    params: {
      key: API_KEY,
      page: page,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: false,
      q: name,
      per_page: 12,
    },
  };

  return await axios(params);
}

export { createRequest };
