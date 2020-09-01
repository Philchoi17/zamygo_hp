import React from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";
// import EventsPageHeader from "components/Headers/EventsPageHeader";
import TonkoHouseExhibitionHeader from "components/Headers/TonkoHouseExhibitionHeader";

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
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody,
  CardHeader,
  Jumbotron,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from "reactstrap";

const TonkoHouse = () => {
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
      <TonkoHouseExhibitionHeader />
      <Row>
        <Col>
          <Jumbotron>
            <h1 className="display-3">TONKO HOUSE SEOUL EXHIBITION</h1>
            <p className="lead">
              Cheongdam-dong, 2019 Collaboration Workshop series
            </p>
            <hr className="my-2" />
            {/* <h5 className="display-4">ABOUT TONKO HOUSE</h5>
            <p>
              Tonko House is an animation studio based in Berkeley, California,
              founded by two former Pixar art directors Robert Kondo and Dice
              Tsutsumi. Tonko House projects span an array of media platforms
              such as films, books, games and educational materials with an
              objective “… to create stories that deliver entertainment and
              awareness for people of all ages.”
            </p> */}
            {/* <p className="lead">
              <Button color="primary">Learn More</Button>
            </p> */}
          </Jumbotron>
        </Col>
      </Row>
      <Container>
        <Row>
          <Col>
            <h1 className="display-3">ABOUT TONKO HOUSE</h1>
            <p className="lead">
              Tonko House is an animation studio based in Berkeley, California,
              founded by two former Pixar art directors Robert Kondo and Dice
              Tsutsumi. Tonko House projects span an array of media platforms
              such as films, books, games and educational materials with an
              objective “… to create stories that deliver entertainment and
              awareness for people of all ages.”
            </p>
            {/* <Card>
              <CardBody>
                <CardTitle>TONKO HOUSE SEOUL EXHIBITION</CardTitle>
                <CardSubtitle>ABOUT TONKO HOUSE</CardSubtitle>
                <CardText>
                  
                </CardText>
                <CardSubtitle>KEY AWARDS & RECOGNITION</CardSubtitle>
                <CardText>blah blah</CardText>
              </CardBody>
            </Card> */}
          </Col>
        </Row>
        <Row>
          <Col>
            <h5 className="display-4">KEY AWARDS & RECOGNITION</h5>
            <CardGroup>
              <Card>
                <CardBody>
                  <CardTitle>
                    <b>The Dam Keeper (animated short)</b>
                  </CardTitle>
                  <ListGroup>
                    <ListGroupItem>
                      <ListGroupItemHeading>
                        2015 Oscar nominee, Best Short Film Animated
                      </ListGroupItemHeading>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListGroupItemHeading>
                        2015 Annie Award nominee, Best Animated Short Subject
                      </ListGroupItemHeading>
                    </ListGroupItem>
                  </ListGroup>
                </CardBody>
                <CardImg
                  top
                  width="100%"
                  src={require("../../assets/img/TKH/thedamkeeper.jpg")}
                  alt="Card image cap"
                />
              </Card>
            </CardGroup>
            <CardGroup>
              <Card>
                <CardBody>
                  <CardTitle>
                    <b>Pig: The Dam Keeper Poems (TV Short Series)</b>
                  </CardTitle>
                  <ListGroup>
                    <ListGroupItem>
                      <ListGroupItemHeading>
                        2018 Annecy Cristal Award winner, TV Production
                      </ListGroupItemHeading>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListGroupItemHeading>
                        Distributed on NHK and Hulu Japan
                      </ListGroupItemHeading>
                    </ListGroupItem>
                  </ListGroup>
                </CardBody>
                <Row>
                  <Col>
                    <CardImg
                      top
                      width="100%"
                      src={require("../../assets/img/TKH/pigseries1.jpg")}
                      alt="Card image cap"
                    />
                    <CardImg
                      top
                      width="100%"
                      src={require("../../assets/img/TKH/pigseries3.jpg")}
                      alt="Card image cap"
                    />
                  </Col>
                  <Col>
                    <CardImg
                      top
                      width="100%"
                      src={require("../../assets/img/TKH/pigseries2.jpg")}
                      alt="Card image cap"
                    />
                  </Col>
                </Row>
              </Card>
            </CardGroup>
            <CardGroup>
              <Card>
                <CardBody>
                  <CardTitle>
                    <b>The Dam Keeper (graphic novel - trilogy)</b>
                  </CardTitle>
                  <ListGroup>
                    <ListGroupItem>
                      <ListGroupItemHeading>
                        2018 Eisner award nominee, Best Publication for Teens
                      </ListGroupItemHeading>
                    </ListGroupItem>
                  </ListGroup>
                </CardBody>
                <Row>
                  <Col>
                    <CardImg
                      top
                      width="100%"
                      src={require("../../assets/img/TKH/thedamkeeper1.jpg")}
                      alt="Card image cap"
                    />
                  </Col>
                  <Col>
                    <CardImg
                      top
                      width="100%"
                      src={require("../../assets/img/TKH/thedamkeeper2.jpg")}
                      alt="Card image cap"
                    />
                  </Col>
                  <Col>
                    <CardImg
                      top
                      width="100%"
                      src={require("../../assets/img/TKH/thedamkeeper3.jpg")}
                      alt="Card image cap"
                    />
                  </Col>
                  <Col>
                    <CardImg
                      top
                      width="100%"
                      src={require("../../assets/img/TKH/thedamkeeper4.png")}
                      alt="Card image cap"
                    />
                  </Col>
                </Row>
              </Card>
            </CardGroup>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col>
            <h5 className="display-4">TONKO HOUSE KEY MEMBERS</h5>
          </Col>
          <CardGroup>
            <Card>
              <Row>
                <Col>1</Col>
                <Col>1</Col>
                <Col>1</Col>
              </Row>
            </Card>
          </CardGroup>
        </Row>
      </Container>
      <DemoFooter />
    </>
  );
};

export default TonkoHouse;
