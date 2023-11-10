import React from "react";
import banner from "../images/banner.png";
import banner1 from "../images/banner1.jpg";
import banner2 from "../images/banner2.jpg";
import banner3 from "../images/banner3.jpg";
import banner4 from "../images/banner4.jpg";

const Banner: React.FC = () => {
  return (
    <div className="banner">
      <img src={banner}alt="Imagen Principal" className="banner__main-image" />
      <div className="banner__gallery">
        <img src={banner3} alt="Imagen 1" className="banner__small-image" />
        <img src={banner1} alt="Imagen 2" className="banner__small-image" />
        <img src={banner2} alt="Imagen 3" className="banner__small-image" />
        <img src={banner4} alt="Imagen 3" className="banner__small-image" />
      </div>
    </div>
  );
};

export default Banner;