import axios from 'axios'

const getAnimalsList = () => {
    return new Promise((resolve, reject) => {
        axios
            .get('http://localhost:3000/api/animals')
            .then((response) => {
                resolve(response.data)
            })
            .catch((response) => {
                reject(response);
            })
    })
}

export {
    getAnimalsList
};