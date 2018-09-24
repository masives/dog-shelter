import React, { Component } from 'react';
import { string, shape } from 'prop-types';
import { createNewAnimal } from '../../resources/animalsApi';
import FormElementsFactory from '../FormElements/index';
import FORM_SCHEMA from './FormSchema';

// todo - wynieść shape na zewnątrz
// const AnimalDetailsRouteParamShape = shape({})
class AnimalEdit extends Component {
  state = {
    form: {
      name: '',
      age: null,
      race: '',
      livingPlace: '',
      status: '',
      description: ''
    },
    error: []
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
    createNewAnimal(this.state);
    event.preventDefault();
  };

  onChange = (formValue, fieldName) => {
    const { form } = this.state;

    form[fieldName] = formValue;
    this.setState({
      form
    });
  };

  render() {
    const { match } = this.props;
    // const { animal } = this.state;
    return (
      <div>
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
