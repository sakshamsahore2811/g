import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Navbar from "../components/Navbar";
import pic from "../images/gps.jpg";
import vid1 from '../images/1.mp4';
import vid2 from '../images/2.mp4';
import vid3 from '../images/3.mp4';
import Footer from "../components/Footer";
const items = [
    <div className="item">
    <img src={pic} className="media" />
  </div>,
  <div className="item">
    <video width="100%" controls className="media">
      <source src={vid1} />
      Your browser does not support the video tag.
    </video>
  </div>,
  <div className="item">
  <video width="100%" controls className="media">
    <source src={vid2} />
    Your browser does not support the video tag.
  </video>
</div>,
<div className="item">
    <video width="100%" controls className="media">
      <source src={vid3} />
      Your browser does not support the video tag.
    </video>
  </div>
];

const App = () => {
  const [mainIndex, setMainIndex] = useState(0);

  const slideNext = () => {
    if (mainIndex < items.length - 1) {
      setMainIndex(mainIndex + 1);
    }
  };

  const slidePrev = () => {
    if (mainIndex > 0) {
      setMainIndex(mainIndex - 1);
    }
  };

  return (
    <>
    <Navbar/>
   
    <div className="carousel">
      <AliceCarousel
        activeIndex={mainIndex}
        disableDotsControls
        disableButtonsControls
        items={items}
      />
      <p className="index">{`${mainIndex + 1}/${items.length}`}</p>
      <div className="caption-container">
        <p className="caption">
        </p>
      </div>

      <div className="btn-prev" onClick={slidePrev}>
        &lang;
      </div>
      <div className="btn-next" onClick={slideNext}>
        &rang;
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default App;
