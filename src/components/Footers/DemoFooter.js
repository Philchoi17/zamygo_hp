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
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";
import { Link } from "react-router-dom";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
                
            <ul>
              <li>
                <Link to="/index">
                  {/* <a
                  // href="/index"
                  // target="_blank"
                  > */}
                  {/* ZamyGo */}
                  <img
                    alt="..."
                    className="img-no-padding img-responsive"
                    style={{ width: "100px" }}
                    src={require("assets/img/zamygologo.png")}
                  />
                  {/* </a> */}
                </Link>
              </li>
              {/* <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <Link to="/press">Press</Link>
              </li> */}
            </ul>
          </nav>
          <div className="credits ml-auto">
            {/* <span className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by Creative Tim
            </span> */}
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
