import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Booking from './pages/Booking';
import Destinations from './pages/Destinations';
import Shop from './pages/Shop';
import Shortcodes from './pages/Shortcodes';
import Tours from './pages/Tours';

function App() {
  return (
    <div className="">
      <Router>
        <Switch>
          <Route path='/' pages={Home} exact>
            <Home />
          </Route>
          <Route path='/blog' pages={Blog} exact>
            <Blog />
          </Route>
          <Route path='/booking' pages={Booking} exact>
            <Booking />
          </Route>
          <Route path='/destinations' pages={Destinations} exact>
            <Destinations />
          </Route>
          <Route path='/shop' pages={Shop} exact>
            <Shop />
          </Route>
          <Route path='/shortcodes' pages={Shortcodes} exact>
            <Shortcodes />
          </Route>
          <Route path='/tours' pages={Tours} exact>
            <Tours />
          </Route>
        </Switch>
      </Router>
    </div >
  );
}

export default App;
