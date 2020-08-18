import React, { useState, useEffect } from "react";
import classes from "./Clints.module.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import clint1 from "../../Images/clients/client-1.png";
import clint2 from "../../Images/clients/client-2.png";
import clint3 from "../../Images/clients/client-3.png";
import clint4 from "../../Images/clients/client-4.png";
import clint5 from "../../Images/clients/client-5.png";
import clint6 from "../../Images/clients/client-6.png";
import clint7 from "../../Images/clients/client-7.png";
import clint8 from "../../Images/clients/client-8.png";
const Clints = (props) => {
  const [clint, setclint] = useState({
    title: "Our Clients",
  });
  useEffect(() => {
    props.language === "English"
      ? setclint({ title: "Our Clients" })
      : setclint({ title: "عملائنا" });
  }, [props.language]);
  return (
    <div className={classes.clints}>
      <h1 className={classes.H1}>{clint.title}</h1>
      <p className={classes.P}>{props.minip}</p>
      <div className={classes.clintsContainer}>
        <Container fluid>
          <Row className={classes.Row}>
            <Col className={classes.Col} md="3" sm="6">
              <Image className={classes.Img} fluid src={clint1} />
            </Col>
            <Col className={classes.Col} md="3" sm="6">
              <Image className={classes.Img} fluid src={clint2} />
            </Col>
            <Col className={classes.Col} md="3" sm="6">
              <Image className={classes.Img} fluid src={clint3} />
            </Col>
            <Col className={classes.Col} md="3" sm="6">
              <Image className={classes.Img} fluid src={clint4} />
            </Col>
          </Row>
          <Row className={classes.Row}>
            <Col className={classes.Col} md="3" sm="6">
              <Image className={classes.Img} fluid src={clint5} />
            </Col>
            <Col className={classes.Col} md="3" sm="6">
              <Image className={classes.Img} fluid src={clint6} />
            </Col>
            <Col className={classes.Col} md="3" sm="6">
              <Image className={classes.Img7} fluid src={clint7} />
            </Col>
            <Col className={classes.Col} md="3" sm="6">
              <Image className={classes.Img} fluid src={clint8} />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default Clints;
