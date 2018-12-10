import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getAnimalsList, removeAnimal } from '../../resources/animalsApi';
import FormElementsFactory from '../FormElements';
import FORM_SCHEMA from './FormSchema';

class AnimalList extends Component {
  private state = {
    animals: [],
    errors: {},
    form: {}
  };

  public onRemoveAnimal = (id) => {
    removeAnimal(id).then(() => this.updateAnimalsList());
  };

  public render() {
    const { animals, errors, form } = this.state;
    const { onRemoveAnimal, onSubmitRequest } = this;
    return (
      <div>
        <h2>Filtry</h2>
        <form onSubmit={onSubmitRequest}>
          {FORM_SCHEMA.map((input) => (
            <FormElementsFactory
              inputConfig={input}
              onChange={this.onChange}
              key={input.label}
              error={errors[input.fieldName]}
              value={form[input.fieldName]}
            />
          ))}
        </form>
        <h1>Lista zwierzaków</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              {/* <th>Img</th> */}
              <th>Age</th>
              <th>Description</th>
              <th>Race</th>
              <th>Status</th>
              <th>Akcje</th>
            </tr>
          </thead>
          <tbody>
            {animals.map((animal) => (
              <tr key={animal._id}>
                <td>{animal.name || ''}</td>
                <td>{animal.age || ''}</td>
                <td>{animal.description || ''}</td>
                <td>{animal.race || ''}</td>
                <td>{animal.status || ''}</td>
                <td>
                  <Link to={`/animals/${animal._id}`}>Detale</Link>
                  <button type="submit" onClick={() => onRemoveAnimal(animal._id)}>
                    remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  private componentDidMount() {
    this.updateAnimalsList();
  }

  private updateAnimalsList = () => {
    getAnimalsList().then((animals) => {
      this.setState({ animals });
    });
  };

  private onChange = (formValue, fieldName) => {
    const { form } = this.state;

    form[fieldName] = formValue;
    this.setState(
      {
        form
      },
      () => {
        getAnimalsList(form).then((animals) => {
          this.setState({ animals });
        });
      }
    );
  };
}

export default AnimalList;
