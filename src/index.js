import 'assets/css/bootstrap.min.css';
import 'assets/scss/now-ui-kit.scss?v=1.5.0';
import 'assets/demo/demo.css?v=1.5.0';
import 'assets/demo/nucleo-icons-page-styles.css?v=1.5.0';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import LandingPage from 'views/examples/LandingPage.js';
import LoginPage from 'views/examples/LoginPage.js';
import ProfilePage from 'views/examples/ProfilePage.js';
import TemplatePage from 'views/examples/TemplatePage';
// pages for this kit
import Index from 'views/Index.js';
import NucleoIcons from 'views/NucleoIcons.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route path="/" render={(props) => <Index {...props} />} />
        <Route path="/index" render={(props) => <Index {...props} />} />
        <Route path="/nucleo-icons" render={(props) => <NucleoIcons {...props} />} />
        <Route path="/landing-page" render={(props) => <LandingPage {...props} />} />
        <Route path="/profile-page" render={(props) => <ProfilePage {...props} />} />
        <Route path="/login-page" render={(props) => <LoginPage {...props} />} />
        <Route path="/template-page" render={(props) => <TemplatePage {...props} />} />
        <Redirect to="/" />
        <Redirect from="/index" to="/" />
      </Switch>
    </Switch>
  </BrowserRouter>
);
