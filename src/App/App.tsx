import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import pages from 'pages/index';
import Controller from './App.controller';
import { Store } from 'App/App.store';
import { Container } from './App.styles';

const App = () => {
  return (
    <Store.Provider>
      <Container>
        <Controller />
        <BrowserRouter>
          <Switch>
            {pages.map((page, i) => (
              <Route
                path={page.path}
                component={() => <page.component />}
                key={'page ' + i}
              />
            ))}
          </Switch>
        </BrowserRouter>
      </Container>
    </Store.Provider>
  );
};

export default App;
