import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Admin from "../pages/admin/Admin";
import Login from "../pages/admin/Login";
import GiftEdit from "../pages/gift/edit";
import GiftList from "../pages/gift/list";
import Home from "../pages/Home";

const Routes = () => (
  <Router>
    <div>
      {/* <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
          <button
            class='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span class='navbar-toggler-icon'></span>
          </button>
          <div class='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link className='nav-link' to='/'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/gifts'>
                  Presentes
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/login'>
                  Login
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/admin'>
                  Admin
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}

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
        <Route path='/admin/gift/:id/edit'>
          <GiftEdit />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default Routes;
