import { shape, string } from 'prop-types';
import React, { Component } from 'react';
import { createNewAnimal, getSingleAnimal, updateAnimal } from '../../resources/animalsApi';
import FormElementsFactory from '../FormElements/index';
import FORM_SCHEMA from './FormSchema';

class AnimalEdit extends Component {

  public static propTypes = {
    match: shape({
      params: shape({
        id: string,
      }),
    }),
  };

  public static defaultProps = {
    match: {
      params: {
        id: '0',
      },
    },
  };

  public state = {
    errors: [],
    form: {
      age: '',
      description: '',
      livingPlace: '',
      name: '',
      photo: '',
      race: '',
      status: '',
    },
  };

  public componentWillMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    if (id !== '0') {
      getSingleAnimal(id).then((animal) => {
        this.setState({ form: animal, id });
      });
    }
  }

  public onSubmitRequest = (event) => {
    event.preventDefault();
    const { form, id } = this.state;
    if (id) {
      updateAnimal(id, form)
        .then((response) => {
          console.log('it worked', response);
          // todo: implement growl
        })
        .catch((response) => {
          this.setState({ errors: response.errors });
        });
      return;
    }
    console.log('onsubmit', form);
    createNewAnimal(form)
      .then((response) => {
        console.log('it worked', response);
        // todo: implement growl
      })
      .catch((response) => {
        this.setState({ errors: response.errors });
      });
  }

  public onChange = (formValue, fieldName) => {
    console.log('formValue', formValue);
    const { form } = this.state;

    form[fieldName] = formValue;
    this.setState({
      form,
    });
  }

  public render() {
    const { match } = this.props;
    const { form, errors } = this.state;
    return (
      <div>
        <h1>{match.params.id}</h1>
        <form onSubmit={this.onSubmitRequest}>
          {FORM_SCHEMA.map((input) => (
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
