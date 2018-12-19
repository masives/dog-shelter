import * as React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import AnimalEdit from './components/AnimalEdit';
import AnimalsList from './components/AnimalsList/index';
import Login from './components/Login';
const App = () => (
  <div>
    <header>Guben morgen</header>
    <BrowserRouter>
      <section>
        <div>
          <Link to="/">Lista </Link>
          <Link to="/animals/0">Dodaj nowego </Link>
          <Link to="/login">Login </Link>
        </div>
        <Route path="/" exact={true} component={AnimalsList} />
        <Route path="/login" exact={true} component={Login} />
        <Route path="/animals/:id" exact={true} component={AnimalEdit} />
      </section>
    </BrowserRouter>
  </div>
);

export default App;
