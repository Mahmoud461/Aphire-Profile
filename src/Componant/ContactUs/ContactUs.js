import React, { useEffect, useState } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import classes from "./Contact.module.css";
import { Col, Container, Row, Button } from "react-bootstrap";
import { GoLocation } from "react-icons/go";
import { FiMail } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";
import Iframe from "react-iframe";

const Contatc = (props) => {
  const [contact, setName] = useState({
    name1: "A108 Adam Street,NY 535022",
    name2: "+1 5352 55488",
    name3: "Your Name",
    email: "Email",
    subj: " Subject",
    msg: "Message",
    sendMsg: "Send Message",
    title: "Contact Us",
  });
  useEffect(() => {
    if (props.language === "English") {
      setName({
        name1: "A108 Adam Street,NY 535022",
        name2: "+1 5352 55488",
        name3: "Your Name",
        subj: " Subject",
        msg: "Message",
        email: "Email",
        sendMsg: "Send Message",
        title: "Contact Us",
      });
    } else if (props.language === "Arabic") {
      setName({
        name1: "١٠٨ شارع ادم,نى ٥٣٥٠٢٢",
        name2: "+١٥٥٨٩٥٥٤٨٨٥٥",
        name3: "الاسم",
        subj: " العنوان",
        email: "البريد الإلكتروني",
        msg: "الرساله",
        sendMsg: "إرسال",
        title: "اتصل بنا",
      });
    }
  }, [props.language]);
  return (
    <div>
      <h1 className={classes.ContactH1}> {contact.title}</h1>
      <Container>
        <Row>
          <Col lg="5" sm="12">
            <div className={classes.map}>
              <div>
                <Iframe
                  width="100%"
                  height="300px"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=city%20starts+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></Iframe>
              </div>
            </div>
          </Col>
          <Col lg="7" sm="12">
            <div className={classes.info}>
              <label className={classes.mabLabel}>
                {" "}
                <GoLocation className={classes.icons} /> {contact.name1}
              </label>
              <label className={classes.mabLabel}>
                {" "}
                <FiMail className={classes.icons} /> info@example.com{" "}
              </label>
              <label className={classes.mabLabel}>
                {" "}
                <FaPhoneAlt className={classes.icons} />
                {contact.name2}
              </label>
            </div>
            <div className={classes.Input}>
              <input
                className={classes.input1}
                type="text"
                placeholder={contact.name3}
              />
              <input
                className={classes.input1}
                type="email"
                placeholder={contact.email}
              />
              <br></br>
              <input
                className={classes.input2}
                type="text"
                placeholder={contact.subj}
              />
              <br></br>
              <textarea
                className={classes.input3}
                rows="3"
                cols="60"
                name="description"
                placeholder={contact.msg}
              />
            </div>
            <Button variant="primary" className={classes.Btn}>
              {contact.sendMsg}
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAqVLRSI0LSfvc7GNZ_1s_Y6gyf03x5F1Y",
})(Contatc);
