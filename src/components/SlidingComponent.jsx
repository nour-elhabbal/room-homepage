import { useContext, useEffect, useState } from "react";

import { SliderContext } from "../context/sliderContext";
import Slider from "./Slider";
import arrow from "../images/icon-arrow.svg";

import "../styles/SlidingComponent.scss";

const SlidingComponent = () => {
  const { articleData, currentIndex } = useContext(SliderContext);

  const obj = articleData.find((ele) => ele.id === currentIndex);

  return (
    <div className="slidingComponent">
      <div className={`heroImage image-${currentIndex}`}></div>
      <div className="article">
        <div>
          <h1>{obj.heading}</h1>
          <p>{obj.article}</p>
          <a className="shopNow">
            shop now <img src={arrow} alt="arrow" />
          </a>
        </div>
        <Slider />
      </div>
    </div>
  );
};

export default SlidingComponent;
