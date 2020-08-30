import React from "react";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader";
import {
  Button,
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

const AboutPage = () => {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar />
      <ProfilePageHeader />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/Profile_Pic.jpg")}
              />
            </div>
            <div className="name">
              <h4 className="title">
                Steve Yang <br />
              </h4>
              <h6 className="description">CEO</h6>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <p>
                Steve is a Taiwanese American and the founder and CEO of ZamyGo.
                He earned undergraduate and graduate degrees from Stanford
                University and his MBA from the Kellogg School of Management at
                Northwestern University. Steve has had a diverse career journey
                across multiple countries and continents. While at A.T. Kearney
                (Silicon Valley), Samsung Group (Seoul), and Cummins (Singapore)
                he developed various growth and operational strategies for
                hi-tech and Fortune 500 companies to enter and succeed in global
                markets. More recently, as the CEO of Cummins Korea distribution
                and Cummins-DKSH Mekong Region, Steve led organizations with
                over 200 people to dramatically increase women leadership
                representation, enhance core values, and transform career
                development culture. Throughout his +15 year diverse career
                journey, Steve has been led by the principle to Inspire,
                Connect, and positively Impact others. Now, he is excited to
                continue this mission by harnessing the reach and scale of media
                and the power of good storytelling. As the father of two young
                boys, Steve has personally seen the impact of meaningful
                storytelling and as a lifelong avid anime and animation fan, he
                has personally felt its ability to inspire and connect. With
                ZamyGo, Steve hopes to combine his two lifelong passions to
                Inspire, Connect, and Impact through the power of Storytelling.
                Steve is a noted guest speaker and has been invited to speak at
                the Singapore Productivity Forum and Women Leadership
                Conferences in Australia and the Philippines and also serves as
                an advisor to Everest Education, a leading education center
                Vietnam.
              </p>
              <br />
              <a href="mailto: steve@zamygo.com">
                <Button className="btn-round" color="default" outline>
                  <i className="fa fa-envelope-square" /> Email Me
                </Button>
              </a>
            </Col>
          </Row>
          <br />
        </Container>
      </div>
      {/* <div className="nav-tabs-navigation">
            <div className="nav-tabs-wrapper">
              <Nav role="tablist" tabs>
                <NavItem>
                  <NavLink
                    className={activeTab === "1" ? "active" : ""}
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    Follows
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === "2" ? "active" : ""}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    Following
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </div> */}
      {/* Tab panes */}
      {/* <TabContent className="following" activeTab={activeTab}>
            <TabPane tabId="1" id="follows">
              <Row>
                <Col className="ml-auto mr-auto" md="6">
                  <ul className="list-unstyled follows">
                    <li>
                      <Row>
                        <Col className="ml-auto mr-auto" lg="2" md="4" xs="4">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={require("")}
                          />
                        </Col>
                        <Col className="ml-auto mr-auto" lg="7" md="4" xs="4">
                          <h6>
                            Flume <br />
                            <small>Musical Producer</small>
                          </h6>
                        </Col>
                        <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                          <FormGroup check>
                            <Label check>
                              <Input
                                defaultChecked
                                defaultValue=""
                                type="checkbox"
                              />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                        </Col>
                      </Row>
                    </li>
                    <hr />
                    <li>
                      <Row>
                        <Col className="mx-auto" lg="2" md="4" xs="4">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={require("")}
                          />
                        </Col>
                        <Col lg="7" md="4" xs="4">
                          <h6>
                            Banks <br />
                            <small>Singer</small>
                          </h6>
                        </Col>
                        <Col lg="3" md="4" xs="4">
                          <FormGroup check>
                            <Label check>
                              <Input defaultValue="" type="checkbox" />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                        </Col>
                      </Row>
                    </li>
                  </ul>
                </Col>
              </Row>
            </TabPane>
            <TabPane className="text-center" tabId="2" id="following">
              <h3 className="text-muted">Not following anyone yet :(</h3>
              <Button className="btn-round" color="warning">
                Find artists
              </Button>
            </TabPane>
          </TabContent> */}
      {/* </Container>
      </div> */}
      <DemoFooter />
    </>
  );
};

export default AboutPage;
