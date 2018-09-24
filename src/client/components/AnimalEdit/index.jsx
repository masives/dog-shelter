import React, { Component } from 'react';
import { string, shape } from 'prop-types';
import { createNewAnimal } from '../../resources/animalsApi';
import FormElementsFactory from '../FormElements/index';
import FORM_SCHEMA from './FormSchema';

// todo - wynieść shape na zewnątrz
// const AnimalDetailsRouteParamShape = shape({})
class AnimalEdit extends Component {
  state = {
    name: ''
  };

  static propTypes = {
    match: shape({
      params: shape({
        id: string
      })
    })
  };

  static defaultProps = {
    match: {
      params: {
        id: '0'
      }
    }
  };

  onSubmitRequest = event => {
    console.log(this.state);
    event.preventDefault();
    createAnimal(event);
  };

  onChange = (formValue, fieldName) => {
    this.setState({ [fieldName]: formValue });
  };

  render() {
    const { match } = this.props;
    // const { animal } = this.state;
    return (
      <div>
        <h1>chyba działo</h1>
        <h1>{match.params.id}</h1>
        <form onSubmit={this.onSubmitRequest}>
          {FORM_SCHEMA.map(input => (
            <FormElementsFactory inputConfig={input} onChange={this.onChange} key={input.label} />
          ))}
          <input type="submit" value="Wyślij" />
        </form>
      </div>
    );
  }
}

export default AnimalEdit;

// {
//   id: string;
//   name: string;
//   race: string;
//   age: number;
//   preferedPlace: string;
//   description: string;
//   status: string;
//   photos: Array<string>;
// }
