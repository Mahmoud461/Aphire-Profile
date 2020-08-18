import React, { useEffect, useState } from "react";
import { Navbar, Nav, Form } from "react-bootstrap";
import classes from "./NavBar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, animateScroll as scroll } from "react-scroll";

const NavBar = (props) => {
  const [name, setName] = useState({
    name1: "Home",
    name2: "About Us",
    name3: "Protfolio",
    name4: "Team",
    name5: "Contact Us",
    title: "APHIRE PROFILE",
  });
  useEffect(() => {
    if (props.language === "English") {
      setName({
        name1: "Home",
        name2: "About Us",
        name3: "Protfolio",
        name4: "Team",
        name5: "Contact Us",
        title: "APHIRE PROFILE",
      });
    } else if (props.language === "Arabic") {
      setName({
        name1: "الرئيسيه",
        name2: "حول الموقع",
        name3: "أعمالنا",
        name4: "الفريق",
        name5: "أتصل بنا ",
        title: "أفيرا",
      });
    }
  }, [props.language]);
  return (
    <header>
      <Navbar
        className={classes.navBar}
        expand="lg"
        bg="light"
        variant="primary"
      >
        <Navbar.Brand href="#home">{name.title}</Navbar.Brand>
        <Navbar.Toggle
          className={classes.togg}
          aria-controls="responsive-navbar-nav"
        >
          <GiHamburgerMenu />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Link
              className={classes.navLink}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="Home"
            >
              {name.name1}
            </Link>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="AboutUs"
              className={classes.navLink}
            >
              {name.name2}
            </Link>
            <Link
              className={classes.navLink}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="Protfolio"
            >
              {name.name3}
            </Link>
            <Link
              className={classes.navLink}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="Team"
            >
              {name.name4}
            </Link>
            <Link
              className={classes.navLink}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="Contact"
            >
              {name.name5}
            </Link>
            <Form>
              <Form.Control
                as="select"
                value={props.language}
                onChange={(e) => props.handleSetLanguage(e.target.value)}
                custom
              >
                <option value="English">English</option>
                <option value="Arabic">Arabic</option>
              </Form.Control>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};
export default NavBar;
