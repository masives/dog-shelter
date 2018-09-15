import React, { Component } from 'react';
import { string, shape } from 'prop-types';
import { createNewAnimal } from '../../resources/animalsApi';
import Input from '../FormElements/Input';
import RadioGroup from '../FormElements/RadioGroup';

// todo - form settings should be extracted to config
const FORM_SCHEMA = [
  {
    label: 'Imie',
    type: 'Input',
    fieldName: 'name'
  },
  {
    label: 'Wiek',
    type: 'Number',
    fieldName: 'age'
  },
  {
    label: 'Rasa',
    type: 'RadioGroup',
    fieldName: 'race',
    options: [
      {
        label: 'Pies',
        value: 'dog'
      },
      {
        label: 'Kot',
        value: 'cat'
      }
    ]
  },
  {
    label: 'Preferowane miejsce zamieszkania',
    type: 'RadioGroup',
    fieldName: 'living-place',
    options: [
      {
        label: 'Dom',
        value: 'house'
      },
      {
        label: 'Mieszkanie',
        value: 'apartment'
      }
    ]
  },
  {
    label: 'Status',
    type: 'RadioGroup',
    fieldName: 'status',
    options: [
      {
        label: 'Do wzięcia',
        value: 'for-grabs'
      },
      {
        label: 'Zabrany',
        value: 'taken'
      }
    ]
  }
];
// todo - wynieść shape na zewnątrz
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
            if (input.type === 'Number') {
              formItem = (
                <Input
                  label={input.label}
                  fieldName={input.fieldName}
                  onChange={this.onChange}
                  key={input.fieldName}
                  type="number"
                />
              );
            }
            if (input.type === 'RadioGroup') {
              formItem = (
                <RadioGroup
                  label={input.label}
                  fieldName={input.fieldName}
                  onChange={this.onChange}
                  key={input.fieldName}
                  options={input.options}
                />
              );
            }
            return formItem;
          })}
          {/*
          <label htmlFor="description">
            Opis
            <textarea name="description" id="description" cols="30" rows="10" />
          </label> */}
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
