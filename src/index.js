/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss?v=1.2.0";
import "assets/demo/demo.css?v=1.2.0";
// pages
import Index from "views/Index.js";
// import NucleoIcons from "views/NucleoIcons.js";
// import LandingPage from "views/examples/LandingPage.js";
// import ProfilePage from "views/examples/ProfilePage.js";
// import RegisterPage from "views/examples/RegisterPage.js";
// created pages
import AboutPage from "views/AboutPage";
import EventsPage from "views/EventsPage";
import PressPage from "views/PressPage";
// others
// events
import TonkoHouse from "views/events/TonkoHouseExhibition";
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

ReactDOM.render(
  <BrowserRouter basename='/'>
    <Switch>
      <Route exact path="/" render={(props) => <Index {...props} />} />
      <Route exact path="/about" render={(props) => <AboutPage {...props} />} />
      <Route exact path="/events" render={(props) => <EventsPage {...props} />} />
      <Route exact  path="/press" render={(props) => <PressPage {...props} />} />
      {/* events */}
      <Route exact path="/tonkohouse" render={(props) => <TonkoHouse {...props} />} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
