import React, { Component } from 'react';
import { string } from 'prop-types';
import { getSingleAnimal } from '../../resources/animalsApi';

class AnimalDetails extends Component {
  state = {
    animal: {}
  };

  static propTypes = {
    id: string.isRequired
  };

  componentDidMount() {
    const { id } = this.props;
    getSingleAnimal(id).then(animal => {
      this.setState({ animal });
    });
  }

  render() {
    const { animal } = this.state;
    return (
      <div>
        <h1>Name: {animal.name}</h1>
        <div>Race: {animal.race}</div>
        <div>Age: {animal.age}</div>
        <div>Description: {animal.description}</div>
        <div>Status: {animal.status}</div>
      </div>
    );
  }
}

export default AnimalDetails;
