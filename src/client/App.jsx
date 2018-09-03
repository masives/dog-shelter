import React, { Component } from 'react';
import AnimalsList from './components/AnimalsList/index';
import AnimalDetails from './components/AnimalDetails/index';

class App extends Component {
  state = {
    currentAnimal: '1'
  };

  render() {
    const { currentAnimal } = this.state;

    return (
      <div>
        <header>Guben morgen</header>
        <AnimalsList />
        <h1>single animal</h1>
        <AnimalDetails id={currentAnimal} />
      </div>
    );
  }
}

export default App;
