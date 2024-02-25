import { useContext } from "react";

import { SliderContext } from "../context/sliderContext";

import nextIcon from "../images/icon-angle-right.svg";
import prevIcon from "../images/icon-angle-left.svg";

import "../styles/Slider.scss";

const Slider = () => {
  const { setCurrentIndex, currentIndex, articleData } =
    useContext(SliderContext);

  const handleNextClick = () => {
    currentIndex === articleData.length
      ? setCurrentIndex(1)
      : setCurrentIndex(currentIndex + 1);
  };

  const handlePrevClick = () => {
    currentIndex === 1
      ? setCurrentIndex(articleData.length)
      : setCurrentIndex(currentIndex - 1);
  };

  return (
    <div className="slider">
      <button onClick={handlePrevClick} className="prev">
        <img src={prevIcon} alt="prevIcon" width={10} />
      </button>
      <button onClick={handleNextClick} className="next">
        <img src={nextIcon} alt="nextIcon" width={10} />
      </button>
    </div>
  );
};

export default Slider;
