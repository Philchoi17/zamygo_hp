import React from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";
// import EventsPageHeader from "components/Headers/EventsPageHeader";

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
      {/* <EventsPageHeader /> */}
      {/* <Card>
        <CardHeader>Tonko House</CardHeader>
        <CardBody>
          <CardTitle>Tonko House Exhibition</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Button href="/#" color="primary">
            Go somewhere
          </Button>
        </CardBody>
      </Card> */}
      <DemoFooter />
    </>
  );
};

export default TonkoHouse;
