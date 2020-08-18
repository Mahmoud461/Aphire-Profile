import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import classes from "./Welcom.module.css";
const Welcom = (props) => {
  const [name, setName] = useState({
    title2: "USEFULL LINKS",
    title3: "Contact Us",
    title4: "OUR NEWSLETTER",
    title1: "WELCOM",
    link1: "Home",
    link2: "About Us",
    link3: "Services",
    link4: "Terms of services",
    link5: "Privacy policy",
    add1: "A108 Adam Street",
    add2: "New York, NY 53522",
    add3: "United States",
    add4: "+1 5352 55488",
    phone: "Phone",
    btn: "Subscribe",
    email: "Email",
  });
  useEffect(() => {
    if (props.language === "English") {
      setName({
        title2: "USEFULL LINKS",
        title3: "Contact Us",
        title4: "OUR NEWSLETTER",
        title1: "WELCOM",
        link1: "Home",
        link2: "About Us",
        link3: "Services",
        link4: "Terms of services",
        link5: "Privacy policy",
        add1: "A108 Adam Street",
        add2: "New York, NY 53522",
        add3: "United States",
        add4: "+1 5352 55488",
        phone: "Phone",
        email: "Email",
        btn: "Subscribe",
      });
    } else if (props.language === "Arabic") {
      setName({
        title1: "أهلا بك",
        title2: "روابط مفيده",
        title3: "اتصل بنا",
        title4: "نشرتنا الإخبارية",
        link1: "الرئيسيه",
        link2: "حول الموقع",
        link3: "خدمات",
        link4: "شروط الخدمه",
        link5: "سياسة الخصوصيه",
        add1: "١٠٨ شارع ادم",
        add2: "نيو يورك, نى ٥٣٥٠٢٢",
        add3: "الولايات المتحده الامريكيه",
        add4: " +١٥٥٨٩٥٥٤٨٨٥٥",
        phone: "الهاتف:",
        email: ":الموقغ الإلكتروني",
        btn: "إشتراك",
      });
    }
  }, [props.language]);
  return (
    <div className={classes.contai}>
      <Container>
        <Row>
          <Col lg="3" md="6" sm="12">
            <div>
              <h3>{name.title1}</h3>
              <p>{props.p}</p>
            </div>
          </Col>
          <Col lg="3" md="6" sm="12">
            <div>
              <h5>{name.title2}</h5>
              <a>{name.link1}</a>
              <br />
              <a>{name.link2}</a>
              <br />
              <a>{name.link3}</a>
              <br />
              <a>{name.link4}</a>
              <br />
              <a>{name.link5}</a>
              <br />
            </div>
          </Col>
          <Col lg="3" md="6" sm="12">
            <div>
              <h5>{name.title3}</h5>
              <p>{name.add1}</p>
              <p>{name.add2}</p>
              <p>{name.add3}</p>
              <p>
                <b>{name.phone} </b>
                {name.add4}
              </p>
              <p>
                <b>{name.email} </b>info@example.com
              </p>
              <p>
                <FiFacebook className={classes.icons} />
                <FaTwitter className={classes.icons} />
                <FiInstagram className={classes.icons} />
                <FaGoogle className={classes.icons} />
                <FaLinkedinIn className={classes.icons} />
              </p>
            </div>
          </Col>
          <Col lg="3" md="6" sm="12">
            <div>
              <h5>{name.title4}</h5>
              <p>{props.minip}</p>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder=""
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                  <Button variant="primary">Subscribe</Button>
                </InputGroup.Append>
              </InputGroup>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Welcom;
