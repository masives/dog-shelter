import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getAnimalsList, removeAnimal } from '../../resources/animalsApi';

class AnimalList extends Component {
  state = {
    animals: []
  };

  componentDidMount() {
    this.updateAnimalsList();
  }

  updateAnimalsList = () => {
    getAnimalsList().then(animals => {
      this.setState({ animals });
    });
  };

  onRemoveAnimal = id => {
    removeAnimal(id).then(() => this.updateAnimalsList());
  };

  render() {
    const { animals } = this.state;
    const { onRemoveAnimal } = this;
    return (
      <div>
        <h1>Lista zwierzaków</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              {/* <th>Img</th> */}
              <th>Age</th>
              <th>Description</th>
              <th>Race</th>
              <th>Status</th>
              <th>Akcje</th>
            </tr>
          </thead>
          <tbody>
            {animals.map(animal => (
              <tr key={animal._id}>
                <td>{animal.name || ''}</td>
                <td>{animal.age || ''}</td>
                <td>{animal.description || ''}</td>
                <td>{animal.race || ''}</td>
                <td>{animal.status || ''}</td>
                <td>
                  <Link to={`/animals/${animal._id}`}>Detale</Link>
                  <button type="submit" onClick={() => onRemoveAnimal(animal._id)}>
                    remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default AnimalList;
