import React, { useState, useEffect } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import classes from "./AboutUs.module.css";
import { RiHandbagLine } from "react-icons/ri";
import { BsCardImage } from "react-icons/bs";
import { IoIosStats } from "react-icons/io";

import aboutImg from "../../Images/about-img.svg";
import extra1Img from "../../Images/about-extra-1.svg";
import extra2Img from "../../Images/about-extra-2.svg";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Rotate from "react-reveal/Rotate";
const AboutUs = (props) => {
  const [name, setName] = useState({
    name1: "Eiusmod Tempor",
    name2: "Magni Dolories",
    name3: "Dolor Sitema",
    title: "About Us",
  });
  useEffect(() => {
    if (props.language === "English") {
      setName({
        name1: "Eiusmod Tempor",
        name2: "Magni Dolories",
        name3: "Dolor Sitema",
        title: "About Us",
      });
    } else if (props.language === "Arabic") {
      setName({
        name1: "ايزمود تيمبو",
        name2: "ماغنى دولوريس",
        name3: "دولور سايتاما",
        title: "حول الموقع",
      });
    }
  }, [props.language]);
  return (
    <div id="AboutUs">
      <Container>
        <Fade top>
          <div className={classes.UpperDiv}>
            <h1> {name.title}</h1>
            <p className={classes.AboutUsP}>{props.minip}</p>
          </div>
        </Fade>
        <Row className={classes.AboutRow}>
          <Col lg="6" sm="12">
            <Fade top>
              <p>{props.p}</p>
            </Fade>
            <Fade bottom>
              <Row>
                <Col lg="2" sm="4">
                  <RiHandbagLine className={classes.AboutIcon} />
                </Col>
                <Col lg="10" sm="8">
                  <h5>{name.name1}</h5>
                  <p>{props.minip}</p>
                </Col>
              </Row>
              <Row>
                <Col lg="2" sm="4">
                  <Fade right>
                    <BsCardImage className={classes.AboutIcon} />
                  </Fade>
                </Col>
                <Col lg="10" sm="8">
                  <h5>{name.name2}</h5>
                  <p>{props.minip}</p>
                </Col>
              </Row>
            </Fade>
            <Row>
              <Col lg="2" sm="4">
                <IoIosStats className={classes.AboutIcon} />
              </Col>
              <Col lg="10" sm="8">
                <h5>{name.name3}</h5>
                <p>{props.minip}</p>
              </Col>
            </Row>
          </Col>
          <Col lg="6" sm="12">
            <Fade right>
              <Image
                src={aboutImg}
                alt="aboutImg"
                className={classes.AboutImg}
                fluid
              />
            </Fade>
          </Col>
        </Row>
        <Row className={classes.AboutRow}>
          <Col lg="6" sm="12">
            <Flip bottom>
              <Image
                src={extra1Img}
                alt="aboutImg"
                className={classes.AboutImg}
                fluid
              />
            </Flip>
          </Col>
          <Col lg="6" sm="12">
            <Rotate top right>
              <div className={classes.extra1div}>
                <h5>{props.minip}</h5>
                <p>{props.p}</p>
              </div>
            </Rotate>
          </Col>
        </Row>
        <Row className={classes.AboutRow}>
          <Col lg="6" sm="12">
            <div className={classes.extra1div}>
              <h5>{props.minip}</h5>
              <p>{props.p}</p>
            </div>
          </Col>
          <Col lg="6" sm="12">
            <Image
              src={extra2Img}
              alt="aboutImg"
              className={classes.AboutImg}
              fluid
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default AboutUs;
