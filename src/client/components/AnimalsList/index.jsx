import React, { Component } from 'react';
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
              <th>id</th>
              <th>Name</th>
              <th>Img</th>
              <th>Age</th>
              <th>Description</th>
              <th>Race</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {animals.map(animal => {
              return (
                <tr key={animal.id}>
                  <td>{animal.id}</td>
                  <td>{animal.name}</td>
                  <td>
                    <img src={animal.photos[0]} alt="" />
                  </td>
                  <td>{animal.age}</td>
                  <td>{animal.description}</td>
                  <td>{animal.race}</td>
                  <td>{animal.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default AnimalList;
