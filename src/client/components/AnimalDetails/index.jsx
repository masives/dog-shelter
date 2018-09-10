import React, { Component } from 'react';
import { string, shape } from 'prop-types';
import { getSingleAnimal } from '../../resources/animalsApi';

// const AnimalDetailsRouteParamShape = shape({})
class AnimalDetails extends Component {
  state = {
    animal: {}
  };

  static propTypes = {
    match: shape({
      params: shape({
        id: string
      })
    }).isRequired
  };

  componentDidMount() {
    const { match } = this.props;
    getSingleAnimal(match.params.id).then(animal => {
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
