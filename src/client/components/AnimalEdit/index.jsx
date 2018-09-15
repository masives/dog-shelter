import React, { Component } from 'react';
import { string, shape } from 'prop-types';
import { createNewAnimal } from '../../resources/animalsApi';
import Input from '../FormElements/Input';

const FORM_SCHEMA = [
  {
    label: 'Imie',
    type: 'Input',
    fieldName: 'name'
  },
  {
    label: 'Wiek',
    type: 'Input',
    fieldName: 'age'
  }
];

// const AnimalDetailsRouteParamShape = shape({})
class AnimalDetails extends Component {
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
    // createAnimal(event);
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
          {FORM_SCHEMA.map(input => {
            let formItem;
            if (input.type === 'Input') {
              formItem = (
                <Input label={input.label} fieldName={input.fieldName} onChange={this.onChange} key={input.fieldName} />
              );
            }
            return formItem;
          })}
          {/* <div>
            Rasa
            <label htmlFor="animal-edit-dog">
              <input type="radio" name="animal-edit-race" id="animal-edit-dog" />
              Pies
            </label>
            <label htmlFor="animal-edit-cat">
              <input type="radio" name="animal-edit-race" id="animal-edit-cat" />
              Kot
            </label>
          </div>
          <div>
            Preferowane miejsce zamieszkania
            <label htmlFor="animal-edit-home">
              <input type="radio" name="animal-edit-home" id="animal-edit-home" />
              Dom
            </label>
            <label htmlFor="animal-edit-block">
              <input type="radio" name="animal-edit-block" id="animal-edit-block" />
              Mieszkanie w bloku
            </label>
          </div>
          <label htmlFor="description">
            Opis
            <textarea name="description" id="description" cols="30" rows="10" />
          </label>
          <div>
            Status
            <label htmlFor="animal-edit-free">
              <input type="radio" name="animal-edit-taken" id="animal-edit-free" />
              Do wzięcia
            </label>
            <label htmlFor="animal-edit-taken">
              <input type="radio" name="animal-edit-taken" id="animal-edit-taken" />
              Oddany
            </label>
          </div> */}
          <input type="submit" value="Wyślij" />
        </form>
      </div>
    );
  }
}

export default AnimalDetails;

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
