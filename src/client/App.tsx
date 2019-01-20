import ApolloClient from 'apollo-boost';

import gql from 'graphql-tag';
import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import AddUser from './components/AddUser';
import AnimalEdit from './components/AnimalEdit';
import AnimalsList from './components/AnimalsList/index';
import Login from './components/Login';

const apolloClient = new ApolloClient({ uri: '/graphql' });

const App = () => (
  <ApolloProvider client={apolloClient}>
    <div>
      <header>Guben morgen</header>
      <BrowserRouter>
        <section>
          <div>
            <Link to="/">Lista </Link>
            <Link to="/animals/0">Dodaj nowego </Link>
            <Link to="/login">Login </Link>
            <Link to="/add-user">Dodaj użytkownika </Link>
          </div>
          <Route path="/" exact={true} component={AnimalsList} />
          <Route path="/login" exact={true} component={Login} />
          <Route path="/add-user" exact={true} component={AddUser} />
          <Route path="/animals/:id" exact={true} component={AnimalEdit} />
        </section>
      </BrowserRouter>
    </div>
  </ApolloProvider>
);
export default App;
