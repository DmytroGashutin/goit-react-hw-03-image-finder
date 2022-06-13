const axios = require('axios').default;

const PHOTOS_PER_PAGE = 12;

async function fetchPhotos(searchQuery, page) {
  const instance = axios.create({
    baseURL: 'https://pixabay.com/api/',
    url: '',
    params: {
      key: '26857889-fd52809e26e1278e79d2723ef',
      q: searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: page,
      per_page: PHOTOS_PER_PAGE,
    },
  });
  try {
    const response = await instance.get();
    return response;
  } catch (error) {
    console.error(error);
  }
}

export { fetchPhotos, PHOTOS_PER_PAGE };