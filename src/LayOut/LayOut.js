import React, { useState } from "react";
import NavBar from "../Componant/NavBar/NavBar";
import Provide from "../Componant/Provide/Provide";
import AboutUs from "../Componant/AboutUs/AboutUs";
import ChooseUs from "../Componant/ChooseUs/ChooseUs";
import Gallary from "../Componant/Gallary/Gallary";
import Test from "../Componant/Testimonials/Testimonials";
import Team from "../Componant/Team/Team";
import Clints from "../Componant/Clints/Clints";
import ContactUs from "../Componant/ContactUs/ContactUs";
import Welcome from "../Componant/Welcom/Welcom";
import Footer from "../Componant/Footer/Footer";
import ScrollUpButton from "react-scroll-up-button";
import classes from "./LayOut.module.css";
import Fade from "react-reveal/Fade";
const LayOut = () => {
  const [Language, setLanguage] = useState({
    p:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    language: "English",
    minip:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  });
  const handleSetLanguage = (vlaue) => {
    let content = {
      English: {
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        language: "English",
        minip:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      Arabic: {
        p:
          "لوريم إيبسوم هو ببساطة نص شكلي للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائى من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص",
        language: "Arabic",
        minip:
          "لوريم إيبسوم هو ببساطة نص شكلي للنص الشكلي منذ القرن الخامس عشر.ء",
      },
    };
    if (vlaue === "Arabic") {
      setLanguage({
        language: content.Arabic.language,
        p: content.Arabic.p,
        minip: content.Arabic.minip,
      });
    } else {
      setLanguage({
        language: content.English.language,
        p: content.English.p,
        minip: content.English.minip,
      });
    }
  };
  return (
    <div>
      <Fade top>
        <NavBar
          className={classes.nav}
          language={Language.language}
          handleSetLanguage={handleSetLanguage}
        />
      </Fade>
      <Provide language={Language.language} />
      <AboutUs
        id="AboutUs"
        p={Language.p}
        minip={Language.minip}
        language={Language.language}
      />
      <ChooseUs minip={Language.minip} language={Language.language} />
      <Gallary language={Language.language} />
      <Test language={Language.language} p={Language.p} />
      <Team language={Language.language} minip={Language.minip} />
      <Clints language={Language.language} minip={Language.minip} />
      <ContactUs language={Language.language} />
      <Welcome
        language={Language.language}
        p={Language.p}
        minip={Language.minip}
      />
      <Footer language={Language.language} />
      <ScrollUpButton
        StopPosition={0}
        ShowAtPosition={150}
        EasingType="easeOutCubic"
        AnimationDuration={500}
        ContainerClassName="ScrollUpButton__Container"
        TransitionClassName="ScrollUpButton__Toggled"
      ></ScrollUpButton>
    </div>
  );
};

export default LayOut;
