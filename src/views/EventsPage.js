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
        <CardHeader>Tonko House</CardHeader>
        <CardBody>
          <CardTitle>Tonko House Exhibition</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
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
