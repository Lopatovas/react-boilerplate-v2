import * as React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Theme from './theme';
import Home from './containers';

const App = () => (
  <ThemeProvider theme={Theme}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
