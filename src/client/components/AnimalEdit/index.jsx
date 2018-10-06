import React, { Component } from 'react';
import { string, shape } from 'prop-types';
import { createNewAnimal, getSingleAnimal } from '../../resources/animalsApi';
import FormElementsFactory from '../FormElements/index';
import FORM_SCHEMA from './FormSchema';

// todo - wynieść shape na zewnątrz
// const AnimalDetailsRouteParamShape = shape({})
class AnimalEdit extends Component {
  state = {
    form: {
      name: '',
      age: '',
      race: '',
      livingPlace: '',
      status: '',
      description: ''
    },
    errors: []
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

  componentWillMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    if (id !== 0) {
      getSingleAnimal(id).then(animal => {
        this.setState({ form: animal });
      });
    }
  }

  onSubmitRequest = event => {
    console.log(this.state);
    const { form } = this.state;
    createNewAnimal(form)
      .then(response => {
        console.log('it worked', response);
      })
      .catch(response => {
        console.log('taki error', response);
        this.setState({ errors: response.errors });
      });
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
    const { form, errors } = this.state;
    return (
      <div>
        <h1>{match.params.id}</h1>
        <form onSubmit={this.onSubmitRequest}>
          {FORM_SCHEMA.map(input => (
            <FormElementsFactory
              inputConfig={input}
              onChange={this.onChange}
              key={input.label}
              error={errors[input.fieldName]}
              value={form[input.fieldName]}
            />
          ))}
          <input type="submit" value="Wyślij" />
        </form>
      </div>
    );
  }
}

export default AnimalEdit;
