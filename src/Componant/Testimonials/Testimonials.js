import React, { useState, useEffect } from "react";
import classes from "./Testimonials.module.css";
import axios from "axios";
import { Carousel } from "react-bootstrap";
import Slider from "./Slider/Slider";
const Test = (props) => {
  const [name, setName] = useState({
    title: "Testimonials",
  });
  useEffect(() => {
    props.language === "English"
      ? setName({ title: "Testimonials" })
      : setName({ title: "التوصيات" });
  }, [props.language]);
  const [list, setList] = useState({ data: [] });
  useEffect(() => {
    axios.get(`https://reqres.in/api/users?page=1`).then((resp) => {
      const data = resp.data.data;
      console.log(resp.data.data);
      setList({ data: data });
    });
  }, []);

  return (
    <div className={classes.testDiv}>
      <h1 className={classes.TestH1}>{name.title}</h1>
      <Carousel className={classes.slider}>
        {list.data.map((elemnt) => (
          <Carousel.Item className={classes.Slider} key={elemnt.id}>
            <Slider
              name={elemnt.first_name + " " + elemnt.last_name}
              Img={elemnt.avatar}
              email={elemnt.email}
              p={props.p}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
export default Test;
