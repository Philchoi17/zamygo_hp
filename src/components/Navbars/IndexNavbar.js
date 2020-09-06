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
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

import { Link } from "react-router-dom";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <Link to="/index">
            <NavbarBrand
              data-placement="bottom"
              // href="/index"
              target="_blank"
              title="ZamyGo"
            >
              ZamyGo
              {/* <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/zamygologo.png")}
              /> */}
            </NavbarBrand>
          </Link>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            {/* Navbar home button */}
            <NavItem>
              <Link to="/index">
                <NavLink data-placement="bottom" href="/index" title="Home">
                  <i className="fa fa-home" /> Home
                  {/* <p className="d-lg-none">Home</p> */}
                </NavLink>
              </Link>
            </NavItem>
            {/* Navbar about button */}
            <NavItem>
              <Link to="/about">
                <NavLink
                  data-placement="bottom"
                  // href="/about"
                  // target="_blank"
                  title="About"
                >
                  <i className="fa fa-id-badge" />
                  About
                  {/* <p className="d-lg-none">About</p> */}
                </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/events">
                <NavLink
                  data-placement="bottom"
                  // href="/events"
                  // target="_blank"
                  title="Events"
                >
                  <i className="fa fa-calendar" />
                  Events
                  {/* <p className="d-lg-none">Events</p> */}
                </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/press">
                <NavLink
                  data-placement="bottom"
                  href="/press"
                  // target="_blank"
                  title="Star on GitHub"
                >
                  <i className="nc-icon nc-air-baloon" />
                  Press
                  {/* <p className="d-lg-none">Press</p> */}
                </NavLink>
              </Link>
            </NavItem>
            {/* <NavItem>
              <NavLink
                href="https://demos.creative-tim.com/paper-kit-react/#/documentation?ref=pkr-index-navbar"
                target="_blank"
              >
                <i className="nc-icon nc-book-bookmark" /> Documentation
              </NavLink>
            </NavItem> */}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
