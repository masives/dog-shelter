import * as React from 'react';
import { Link } from 'react-router-dom';
import { IAnimal } from '../../../../types/Animal';
import { getAnimalsList, removeAnimal } from '../../resources/animalsApi';
import FormElementsFactory from '../FormElements';
import FORM_SCHEMA from './FormSchema';

const getFormElement = (input, onChange, error, value) => (
  <FormElementsFactory
    inputConfig={input}
    onChange={onChange}
    key={input.label}
    error={error}
    value={value}
  />
);
interface IState {
  animals: IAnimal[];
  form: {
    name?: string;
    age?: number;
    race?: string;
    status?: string;
  };
}

class AnimalList extends React.Component<null, IState> {
  public state = {
    animals: [],
    errors: {},
    form: {},
  };

  public onRemoveAnimal = (id) => {
    removeAnimal(id).then(() => this.updateAnimalsList());
  }

  public render() {
    const { animals, errors, form } = this.state;
    const { onRemoveAnimal, onChange } = this;
    return (
      <div>
        <h2>Filtry</h2>
        <form>
          {FORM_SCHEMA.map((input) =>
            getFormElement(
              input,
              onChange,
              errors[input.fieldName],
              form[input.fieldName]
            )
          )}
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
                  <button
                    type="submit"
                    onClick={() => onRemoveAnimal(animal._id)}
                  >
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

  public componentDidMount() {
    this.updateAnimalsList();
  }

  private updateAnimalsList = () => {
    getAnimalsList()
      .then((animals: IAnimal[]) => {
        this.setState({ animals });
      })
      .catch((error) => {
        // takie przenoszenie przy 401 powinno być wyżej w jakimś globalnym error handlerze
        window.location.href = '/login';
      });
  }

  private onChange = (formValue, fieldName) => {
    const { form } = this.state;
    form[fieldName] = formValue;
    this.setState(
      {
        form,
      },
      () => {
        getAnimalsList(form).then((animals) => {
          this.setState({ animals });
        });
      }
    );
  }
}

export default AnimalList;
