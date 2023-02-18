import "./AboutProject.css";
import RainPage  from "../../../widgets/RainPage/RainPage.js";
import AboutUs from "../../../widgets/AboutUs/AboutUs";
import CloudButtons from "../../../widgets/CloudButtons/CloudButtons";

function AboutProject() {
  return (
    <div className="about">
      <RainPage />
      <AboutUs />
      <CloudButtons />
    </div>
  );
}

export default AboutProject;