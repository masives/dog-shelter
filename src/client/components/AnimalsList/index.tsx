import gql from 'graphql-tag';
import * as React from 'react';
import { Query } from 'react-apollo';
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

const DogsList = () => (
  <Query
    query={gql`
      {
        animals: getAnimals {
          id
          name
          age
          description
          race
          status
        }
      }
    `}
  >
    {({ loading, error, data, refetch }) => {
      if (loading) {
        return <p>Loading...</p>;
      }
      if (error) {
        return <p>Error :(</p>;
      }
      return (
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
            {data.animals.map(
              ({ id, name, age, description, race, status }: IAnimal) => (
                <tr key={id}>
                  <td>{name || ''}</td>
                  <td>{age || ''}</td>
                  <td>{description || ''}</td>
                  <td>{race || ''}</td>
                  <td>{status || ''}</td>
                  <td>
                    <Link to={`/animals/${id}`}>Detale</Link>
                    <button
                      type="submit"
                      onClick={() => removeAnimal(id).then(() => refetch())}
                    >
                      remove
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      );
    }}
  </Query>
);

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
        <DogsList />
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
        getAnimalsList(form).then((animals: IAnimal[]) => {
          this.setState({ animals });
        });
      }
    );
  }
}

export default AnimalList;
