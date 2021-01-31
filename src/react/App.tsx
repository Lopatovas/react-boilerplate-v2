import * as React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './containers';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default App;
