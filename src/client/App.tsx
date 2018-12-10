import React from 'react';
import { HashRouter, Link, Route } from 'react-router-dom';
import AnimalEdit from './components/AnimalEdit';
import AnimalsList from './components/AnimalsList/index';

const App = () => (
  <div>
    <header>Guben morgen</header>
    <HashRouter>
      <section>
        <div>
          <Link to="/">Lista</Link>
          <Link to="/animals/0">Dodaj nowego</Link>
        </div>
        <Route path="/" exact={true} component={AnimalsList} />
        <Route path="/animals/:id" exact={true} component={AnimalEdit} />
      </section>
    </HashRouter>
  </div>
);

export default App;
