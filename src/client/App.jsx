import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import AnimalsList from './components/AnimalsList/index';
import AnimalEdit from './components/AnimalEdit';

const App = () => (
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

export default App;
