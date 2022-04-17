import React from 'react';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import Home from './templates/Home';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';

import { routes } from './scripts/routes';
import './App.scss'

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path={routes.home.path} element={<Home />} />
          <Route path={routes.page1.path} element={<PageOne />} />
          <Route path={routes.page2.path} element={<PageTwo />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
