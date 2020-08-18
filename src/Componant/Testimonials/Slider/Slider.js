import React from "react";
import classes from "./slider.module.css";
import { Container, Row, Col } from "react-bootstrap";
const Slider = (props) => (
  <div className={classes.sliderDiv}>
    <Container>
      <Row>
        <Col sm="6" md="4">
          {" "}
          <img className={classes.pImg} src={props.Img} />
        </Col>
        <Col className={classes.info} md="8" sm="6">
          <div>
            <h3>{props.name}</h3>
            <p>{props.email}</p>
            <p> {props.p}</p>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Slider;
