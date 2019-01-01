import axios from 'axios';

export const getAnimalsList = (params = {}) =>
  new Promise((resolve, reject) => {
    axios
      .get('http://localhost:3000/api/animals', {
        params,
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((response) => {
        reject(response);
      });
  });

export const getSingleAnimal = (id) =>
  new Promise((resolve, reject) => {
    axios
      .get(`http://localhost:3000/api/animals/${id}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((response) => {
        reject(response);
      });
  });

export const createNewAnimal = (animal) =>
  new Promise((resolve, reject) => {
    axios
      .post(`/api/animals`, animal)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });

export const updateAnimal = (id, animal) =>
  new Promise((resolve, reject) => {
    axios
      .put(`/api/animals/${id}`, animal)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });

export const removeAnimal = (id) =>
  new Promise((resolve, reject) => {
    axios
      .delete(`/api/animals/${id}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });

export const uploadPhoto = (photoObject) => {
  const photo = new FormData();
  photo.set('file', photoObject);

  return new Promise((resolve, reject) => {
    axios
      .post(`/api/photo`, photo, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
};
