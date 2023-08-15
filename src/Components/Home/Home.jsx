import React from "react";
import Navbar from "../Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.style.css";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import image from "../images/resume-templates.jpg"
import { useNavigate } from "react-router-dom";

function Home() {
let navigate = useNavigate();
let navigatetemple = ()=> {
navigate("/template")
}
return (
<div>
  <Navbar />
  <div className="home-body">
    <div className="home-content">
      <button className="btn btn-primary" onClick={navigatetemple}>Create My Resume</button>
    </div>
    <div className="template-opt">
      <BusinessCenterIcon />
      <span>Professional</span>
    </div>
    <hr className="home-hr" />
    <div>
      <div>
        <div>
          <img src={image} alt="resume-templates.jpg" className="resume-temp" />
        </div>
      </div>
    </div>
  </div>
</div>
);
}

export default Home;