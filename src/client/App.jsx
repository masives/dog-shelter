import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import AnimalsList from './components/AnimalsList/index';
import AnimalEdit from './components/AnimalEdit';

class App extends Component {
  state = {
    currentAnimal: '1'
  };

  render() {
    const { currentAnimal } = this.state;

    return (
      <div>
        <header>Guben morgen</header>
        <HashRouter>
          <section>
            <div>
              <Link to="/">Lista</Link>
              <Link to="/animals/0">Dodaj nowego</Link>
            </div>
            <Route path="/" exact component={AnimalsList} />
            <Route path="/animals/:id" exact component={AnimalEdit} />
          </section>
        </HashRouter>
      </div>
    );
  }
}

export default App;
