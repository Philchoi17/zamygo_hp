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
import { Container, Button } from "reactstrap";

// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage: "url(" + require("assets/img/DK_Feature.png") + ")",
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1>ZamyGo</h1>
            <h3>Media Distribution Company</h3>
            <p>
              ZamyGo is a new media distribution company with the mission to
              Inspire, Connect, and Impact through the power of Storytelling. We
              have partnered with Tonko House, an Oscar-nominated,
              Eisner-nominated, and Annecy Cristal award winning studio to
              launch an exhibition of their characters and stories in Korea.
            </p>
            <br />
            {/* <Button
              href="https://www.youtube.com/watch?v=UR1ttTmXKnY"
              className="btn-round mr-1"
              color="neutral"
              target="_blank"
              outline
            >
              <i className="fa fa-play" />
              Watch video
            </Button> */}
            {/* <Button className="btn-round" color="neutral" type="button" outline>
              Download
            </Button> */}
          </div>
        </Container>
      </div>
    </>
  );
  // return (
  //   <>
  //     <div
  //       className="page-header section-dark"
  //       // style={{
  //       //   backgroundImage:
  //       //     "url(" + require("assets/img/antoine-barres.jpg") + ")",
  //       // }}
  //     >
  //       <div className="filter" />
  //       <div className="content-center">
  //         <Container>
  //           <div className="title-brand">ZamyGo</div>
  //         </Container>
  //       </div>
  //       <div
  //         className="moving-clouds"
  //         style={{
  //           backgroundImage: "url(" + require("assets/img/DK_Short.png") + ")",
  //         }}
  //       />
  //       <h6 className="category category-absolute">
  //         Events Coming Soon
  //         {/* <a
  //           href="https://www.creative-tim.com?ref=pkr-index-page"
  //           target="_blank"
  //         > */}
  //         {/* <img
  //             alt="..."
  //             className="creative-tim-logo"
  //             src={require("assets/img/creative-tim-white-slim2.png")}
  //           /> */}
  //         {/* </a> */}
  //       </h6>
  //     </div>
  //   </>
  // );
}

export default IndexHeader;
