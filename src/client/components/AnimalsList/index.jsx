import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getAnimalsList } from '../../resources/animalsApi';

class AnimalList extends Component {
  state = {
    animals: []
  };

  componentDidMount() {
    getAnimalsList().then(animals => {
      this.setState({ animals });
    });
  }

  render() {
    const { animals } = this.state;
    return (
      <div>
        <h1>Lista zwierzaków</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Img</th>
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
