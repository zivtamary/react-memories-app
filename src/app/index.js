import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import NavBar from 'components/NavBar/NavBar';

import Home from 'containers/Home/Home';
import Auth from 'containers/Auth/Auth';

const App = () => {
  return (
    <Router>
      <Container maxWidth='lg'>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/auth' component={Auth} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
