import React, { Component } from 'react';
import AnimalsList from './components/AnimalsList/index';
import AnimalDetails from './components/AnimalDetails/index';

class App extends Component {
  render() {
    return (
      <div>
        <header>Guben morgen</header>
        <AnimalsList />
        <h1>single animal</h1>
        <AnimalDetails id="1" />
      </div>
    );
  }
}

export default App;
