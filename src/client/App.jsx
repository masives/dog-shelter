import React, { Component } from 'react';
import AnimalsList from './components/AnimalsList/index';

class App extends Component {
  render() {
    return (
      <div>
        <header>Guben morgen</header>
        <AnimalsList />
      </div>
    );
  }
}

export default App;
