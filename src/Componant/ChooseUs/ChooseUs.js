import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsGem } from "react-icons/bs";
import { BsAspectRatio } from "react-icons/bs";
import trans from "../../Images/trans2.png";
import classes from "./ChooseUs.module.css";
import Pulse from "react-reveal/Pulse";
import Fade from "react-reveal/Fade";
import Jump from "react-reveal/Jump";

const ChooseUs = (props) => {
  const [chooseName, setchooseName] = useState({
    chooseName1: "Corporis dolorem",
    chooseName2: "Voluptates dolores",
    chooseName3: "Eum ut aspernatur",
    title: "Why Choose Us ?",
    more: "Read More",
    Clints: "Clints",
    Projects: "Projects",
    hours: "Hours Of Support",
    worker: "Hard Worker",
    num1: "274",
    num2: "421",
    num3: "1,364",
    num4: "18",
  });
  useEffect(() => {
    if (props.language === "English") {
      setchooseName({
        chooseName1: "Corporis dolorem",
        chooseName2: "Voluptates dolores",
        chooseName3: "Eum ut aspernatur",
        title: "Why Choose Us ?",
        more: "Read More",
        Clints: "Clints",
        Projects: "Projects",
        hours: "Hours Of Support",
        worker: "Hard Worker",
        num1: "274",
        num2: "421",
        num3: "1,364",
        num4: "18",
      });
    } else if (props.language === "Arabic") {
      setchooseName({
        chooseName1: "كوربوريس دولوريم",
        chooseName2: "فولبتيتس دولوريس",
        chooseName3: "ام ات اسبرينتشر",
        title: "لماذا تختارنا ؟",
        more: "اقرأ المزيد",
        Clints: "عميل",
        Projects: "مشروع",
        hours: "ساعه من الدعم",
        worker: "موظف",
        num1: "٢٧٤",
        num2: "٤٢١",
        num3: "١,٣٦٤",
        num4: "١٨",
      });
    }
  }, [props.language]);
  return (
    <div className={classes.cardContainer} id="Contact">
      <Container className={classes.divTitle}>
        <Fade top>
          <div>
            <h1>{chooseName.title}</h1>
            <p>{props.minip}</p>
          </div>
        </Fade>
        <Row className={classes.row}>
          <Col lg="4" sm="12" md="6">
            <Pulse>
              <div className={classes.card}>
                <BsGem className={classes.ComputerIcon} />

                <h5 className={classes.tilte2}>{chooseName.chooseName1} </h5>
                <p>{props.minip}</p>
                <h6 className={classes.cardH62}> {chooseName.more}</h6>
              </div>
            </Pulse>
          </Col>
          <Col lg="4" md="6" sm="12">
            <Pulse>
              <div className={classes.card}>
                <img className={classes.transImg} src={trans} />

                <h5 className={classes.tilte2}>{chooseName.chooseName2}</h5>
                <p>{props.minip}</p>
                <h6 className={classes.cardH62}> {chooseName.more}</h6>
              </div>
            </Pulse>
          </Col>
          <Col lg="4" md="6" sm="12">
            <Pulse>
              <div className={classes.card}>
                <BsAspectRatio className={classes.ComputerIcon} />

                <h5 className={classes.tilte2}>{chooseName.chooseName3}</h5>
                <p>{props.minip}</p>
                <h6 className={classes.cardH62}> {chooseName.more}</h6>
              </div>
            </Pulse>
          </Col>
        </Row>
        <Jump>
          <Row>
            <Col md="3" sm="6">
              <h1 className={classes.buttomRowh}> {chooseName.num1} </h1>
              <p className={classes.buttomRow}>{chooseName.Clints}</p>
            </Col>
            <Col md="3" sm="6">
              <h1 className={classes.buttomRowh}>{chooseName.num2}</h1>
              <p className={classes.buttomRow}>{chooseName.Projects}</p>
            </Col>
            <Col md="3" sm="6">
              <h1 className={classes.buttomRowh}>{chooseName.num3}</h1>
              <p className={classes.buttomRow}>{chooseName.hours}</p>
            </Col>
            <Col md="3" sm="6">
              <h1 className={classes.buttomRowh}>{chooseName.num4}</h1>
              <p className={classes.buttomRow}>{chooseName.worker}</p>
            </Col>
          </Row>
        </Jump>
      </Container>
    </div>
  );
};

export default ChooseUs;
