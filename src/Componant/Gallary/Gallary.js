import React, { useState, useEffect } from "react";
import classes from "./Gallary.module.css";
import Gallery from "react-photo-gallery";

import { Container, Image, Row, Col, Button } from "react-bootstrap";

import app1 from "../../Images/portfolio/app1.jpg";
import app2 from "../../Images/portfolio/app2.jpg";
import app3 from "../../Images/portfolio/app3.jpg";
import card1 from "../../Images/portfolio/card1.jpg";
import card2 from "../../Images/portfolio/card2.jpg";
import card3 from "../../Images/portfolio/card3.jpg";
import web1 from "../../Images/portfolio/web1.jpg";
import web2 from "../../Images/portfolio/web2.jpg";
import web3 from "../../Images/portfolio/web3.jpg";
const Gallary = (props) => {
  const [gallary, setGallary] = useState({
    images: [
      { src: app2, width: 3, height: 2.5 },
      { src: app1, width: 2, height: 1 },
      { src: app3, width: 2, height: 1 },
      { src: card1, width: 2, height: 1 },
      { src: card2, width: 2, height: 1.75 },
      { src: card3, width: 2, height: 1 },
      { src: web2, width: 2, height: 2 },
      { src: web1, width: 2, height: 1 },
      { src: web3, width: 2, height: 1 },
    ],
  });
  const [galeryName, setGalaryName] = useState({
    name1: "ALL",
    name2: "APP",
    name3: "CARD",
    name4: "WEB",
    title: "Our Protfolio",
  });
  useEffect(() => {
    if (props.language === "English") {
      setGalaryName({
        name1: "ALL",
        name2: "APP",
        name3: "CARD",
        name4: "WEB",
        title: "Our Protfolio",
      });
    } else if (props.language === "Arabic") {
      setGalaryName({
        name1: "الكل",
        name2: "تطبيق",
        name3: "بطاقه",
        name4: "موقع",
        title: "أعمالنا",
      });
    }
  }, [props.language]);
  const [btn, setBtn] = useState({ searchvalue: gallary.images });
  const filterBtn = (value) => {
    if (value === 0) {
      setBtn({ searchvalue: gallary.images });
    } else {
      setBtn({ searchvalue: gallary.images.slice(value - 3, value) });
    }
  };
  return (
    <div id="Protfolio">
      <Container>
        <h1 className={classes.portfolio}>{galeryName.title}</h1>
        <Button
          className={classes.portfolioBtn}
          onClick={() => filterBtn(0)}
          variant="primary"
        >
          {galeryName.name1}
        </Button>
        <Button
          className={classes.portfolioBtn}
          onClick={() => filterBtn(3)}
          variant="primary"
        >
          {galeryName.name2}
        </Button>
        <Button
          className={classes.portfolioBtn}
          onClick={() => filterBtn(6)}
          variant="primary"
        >
          {galeryName.name3}
        </Button>
        <Button
          className={classes.portfolioBtn}
          onClick={() => filterBtn(9)}
          variant="primary"
        >
          {galeryName.name3}
        </Button>
        <div className={classes.gallery}>
          <Gallery photos={btn.searchvalue} direction={"column"} />
        </div>
      </Container>
    </div>
  );
};
export default Gallary;
