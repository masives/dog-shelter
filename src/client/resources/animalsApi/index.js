import axios from 'axios';

const getAnimalsList = () =>
  new Promise((resolve, reject) => {
    axios
      .get('http://localhost:3000/api/animals')
      .then(response => {
        resolve(response.data);
      })
      .catch(response => {
        reject(response);
      });
  });

const getSingleAnimal = id =>
  new Promise((resolve, reject) => {
    axios
      .get(`http://localhost:3000/api/animals/${id}`)
      .then(response => {
        resolve(response.data);
      })
      .catch(response => {
        reject(response);
      });
  });

const createNewAnimal = animal =>
  new Promise((resolve, reject) => {
    axios
      .post(`http://localhost:3000/api/animals`, animal)
      .then(response => {
        resolve(response.data);
      })
      .catch(response => {
        reject(response);
      });
  });

export { getAnimalsList, getSingleAnimal, createNewAnimal };
