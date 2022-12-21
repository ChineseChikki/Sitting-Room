import React from "react";
import { ISofa } from "../utils/icons";
import "./Hero.css";
import Navbar from "../components/Navbar";

const Hero = () => {
  return (
    <div className="overAll">
      <Navbar />
      <div className="heroPage">
        <div className="heroText">
          <h2 className="new">New collection: Leonie</h2>
          <p className="Lorem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            odit pariatur quis qui, <br />
            doloreassumenda inventore natus porro repellat dolor. Maiores
            tenetur iusto unde uterrt.
          </p>
          <a href="#" target="_blank">
            Shop Now
          </a>
        </div>
        <img src={ISofa} className="myImg" />
      </div>
    </div>
  );
};

export default Hero;
