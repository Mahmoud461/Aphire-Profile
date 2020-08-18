import React, { useState, useEffect } from "react";
import classes from "./Team.module.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import team1 from "../../Images/team-1.jpg";
import team2 from "../../Images/team-2.jpg";
import team3 from "../../Images/team-3.jpg";
import team4 from "../../Images/team-4.jpg";
const Team = (props) => {
  const [teamName, setName] = useState({
    title: "Team",
  });
  useEffect(() => {
    props.language === "English"
      ? setName({ title: "Team" })
      : setName({ title: "الفريق" });
  }, [props.language]);
  return (
    <div id="Team">
      <h1>{teamName.title}</h1>
      <p>{props.minip}</p>
      <Container fluid>
        <Row className={classes.Row}>
          <Col md="3" sm="6">
            <Image className={classes.Img} fluid src={team1} />
          </Col>
          <Col md="3" sm="6">
            <Image className={classes.Img} fluid src={team2} />
          </Col>
          <Col md="3" sm="6">
            <Image className={classes.Img} fluid src={team3} />
          </Col>
          <Col md="3" sm="6">
            <Image className={classes.Img} fluid src={team4} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Team;
