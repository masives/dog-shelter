import { shape, string } from 'prop-types';
import * as React from 'react';
import { createNewAnimal, getSingleAnimal, updateAnimal } from '../../resources/animalsApi';
import FormElementsFactory from '../FormElements/index';
import FORM_SCHEMA from './FormSchema';

interface IAnimalEditForm {
    age: string;
    description: string;
    livingPlace: string;
    name: string;
    photo: string;
    race: string;
    status: string;
  }

interface IProps {
  match: {
    params: {
      id: string,
    },
  };
}

interface IState {
  errors: any[];
  form: IAnimalEditForm;
  id: string;
}

class AnimalEdit extends React.Component<IProps, IState> {
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
    id: '',
  };

  public componentWillMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    if (id !== '0') {
      getSingleAnimal(id).then((animal: IAnimalEditForm) => {
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
          // todo: implement growl
        })
        .catch((response) => {
          this.setState({ errors: response.errors });
        });
      return;
    }
    createNewAnimal(form)
      .then((response) => {
        // todo: implement growl
      })
      .catch((response) => {
        this.setState({ errors: response.errors });
      });
  }

  public onChange = (formValue, fieldName) => {
    const { form } = this.state;

    form[fieldName] = formValue;
    this.setState({
      form,
    });
  }

  public render() {
    const { match } = this.props;
    return (
      <div>
        <h1>{match.params.id}</h1>
        <form onSubmit={this.onSubmitRequest}>
          {FORM_SCHEMA.map((input) => FormElementsFactory(this.getInputProps(input)))}
          <input type="submit" value="Wyślij" />
        </form>
      </div>
    );
  }

  private getInputProps = (input) => {
    const { form, errors } = this.state;
    return {
      error: errors[input.fieldName],
      inputConfig: input,
      key: input.label,
      onChange: this.onChange,
      value: form[input.fieldName],
    };
  }
}

export default AnimalEdit;
