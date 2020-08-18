import React, { useState, useEffect } from "react";
import classes from "./Provide.module.css";
import { Container, Row, Image, Col, Button } from "react-bootstrap";
import introPic from "../../Images/intro-img.svg";
import Fade from "react-reveal/Fade";
const Provide = (props) => {
  const [name, setName] = useState({
    name1: "We Provide",
    name2: "solutions",
    name3: "for your business!",
    btn1: "Get Started",
    btn2: "Our Services",
  });
  useEffect(() => {
    if (props.language === "English") {
      setName({
        name1: "We Provide",
        name2: "solutions",
        name3: "for your business!",
        btn1: "Get Started",
        btn2: "Our Services",
      });
    } else if (props.language === "Arabic") {
      setName({
        name1: "نقدم ",
        name2: "حلولا",
        name3: "لجميع اعمالك",
        btn1: "ابدأ الان",
        btn2: "خدماتنا",
      });
    }
  }, [props.language]);
  return (
    <div className={classes.providUpperDiv}>
      <Container>
        <Row>
          <Col lg="6" sm="12">
            <h1 lang="ar" className={classes.ProvideH1}>
              {" "}
              {name.name1}
            </h1>
            <a className={classes.ProvideA}>{name.name2}</a>
            <h1 className={classes.ProvideH1}>{name.name3}</h1>
            <Button className={classes.ProvideBtn} variant="primary">
              {name.btn1}
            </Button>
            <Button className={classes.ProvideBtn2} variant="outline-primary">
              {name.btn2}
            </Button>
          </Col>
          <Col lg="6" sm="12">
            <Fade right>
              <Image className={classes.Img} src={introPic} fluid />
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Provide;
