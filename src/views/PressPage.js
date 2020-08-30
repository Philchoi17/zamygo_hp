import React from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import PressPageHeader from "components/Headers/PressPageHeader";

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
  // CardGroup,
} from "reactstrap";
import Index from "./Index";

const EventsPage = () => {
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
      <PressPageHeader />
      <CardGroup>
        <Card>
          <CardImg
            top
            width="100%"
            src={require("assets/img/press/damkeeperpress.png")}
            alt="Dam Keeper"
          />
          {/* <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card Subtitle</CardSubtitle>
            <CardText>lots and lots and lots of text</CardText>
            <Button>Button</Button>
          </CardBody> */}
        </Card>
        <Card>
          <CardImg
            top
            width="100%"
            src={require("assets/img/press/ewpress.png")}
            alt="Dam Keeper"
          />
          {/* <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card Subtitle</CardSubtitle>
            <CardText>lots and lots and lots of text</CardText>
            <Button>Button</Button>
          </CardBody> */}
        </Card>
        <Card>
          <CardImg
            top
            width="100%"
            src={require("assets/img/press/hollywoodpress.png")}
            alt="Dam Keeper"
          />
          {/* <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card Subtitle</CardSubtitle>
            <CardText>lots and lots and lots of text</CardText>
            <Button>Button</Button>
          </CardBody> */}
        </Card>
      </CardGroup>
      <CardGroup>
        <Card>
          <CardImg
            top
            width="100%"
            src={require("assets/img/press/nytimespress.png")}
            alt="Dam Keeper"
          />
          {/* <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card Subtitle</CardSubtitle>
            <CardText>lots and lots and lots of text</CardText>
            <Button>Button</Button>
          </CardBody> */}
        </Card>
        <Card>
          <CardImg
            top
            width="100%"
            src={require("assets/img/press/monaclepress.png")}
            alt="Dam Keeper"
          />
          {/* <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card Subtitle</CardSubtitle>
            <CardText>lots and lots and lots of text</CardText>
            <Button>Button</Button>
          </CardBody> */}
        </Card>
        <Card>
          <CardImg
            top
            width="100%"
            src={require("assets/img/press/varietypress.png")}
            alt="Dam Keeper"
          />
          {/* <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card Subtitle</CardSubtitle>
            <CardText>lots and lots and lots of text</CardText>
            <Button>Button</Button>
          </CardBody> */}
        </Card>
      </CardGroup>
      <DemoFooter />
    </>
  );
};

export default EventsPage;
