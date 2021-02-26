import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Admin from "../pages/admin/Admin";
import Login from "../pages/admin/Login";
import GiftList from "../pages/gift/list";
import Home from "../pages/Home";

const Routes = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/gifts'>Presentes</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/admin'>Admin</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/gifts'>
          <GiftList />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/admin'>
          <Admin />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default Routes;
