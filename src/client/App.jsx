import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
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
        <HashRouter>
          <section>
            <div>
              <Link to="/Lista psiaków">Lista</Link>
            </div>
            <Route path="/" exact component={AnimalsList} />
            <Route path="/animals/:id" component={AnimalDetails} />
          </section>
        </HashRouter>
      </div>
    );
  }
}

export default App;
