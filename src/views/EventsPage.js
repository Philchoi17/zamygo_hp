import React from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import EventsPageHeader from "components/Headers/EventsPageHeader";

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
      <EventsPageHeader />
      <Card>
        {/* <CardImg
          top
          // width="100%"
          // height="400px"
          src={require("../assets/img/Tonko_House_Logo.png")}
          alt="Card image cap"
        /> */}
        <CardHeader>Tonko House</CardHeader>
        <CardBody>
          <CardTitle>Tonko House Animation Exhibition in Seoul</CardTitle>
          <img
            src={require("../assets/img/Tonko_House_Logo.png")}
            alt="tonkohouselogo"
            width="100px;"
          />
          <CardText>
            Created by a former Pixar artist and art director, Tonko House
            Animation Exhibition in Seoul 2019 will open its first exhibition
            from May 3, 2019 to Aug. 31, 2019 at a special venue located in
            Chungdam-dong. Located in a 1,322 m2 venue, this exhibition will
            display close to 140 art works of character sketches, illustration,
            videos, etc. and feature a special art program created by Tonko
            House. Visitors can also download an AR app to experience moving
            3-dimensional characters throughout the exhibition as well.
          </CardText>
          <Button href="/tonkohouse" color="primary">
            Read More
          </Button>
        </CardBody>
      </Card>
      <DemoFooter />
    </>
  );
};

export default EventsPage;
