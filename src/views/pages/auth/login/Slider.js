import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import phoneFrame from "assets/images/login/phone-frame.png";
import slide1 from "assets/images/login/slide (1).jpg";
import slide2 from "assets/images/login/slide (2).jpg";
import slide3 from "assets/images/login/slide (3).jpg";
import slide4 from "assets/images/login/slide (4).jpg";
import slide5 from "assets/images/login/slide (5).jpg";

const w = 243;
const h = 431;

const items = [
  <img src={slide1} alt="Slide" width={w} height={h} />,
  <img src={slide2} alt="Slide" width={w} height={h} />,
  <img src={slide3} alt="Slide" width={w} height={h} />,
  <img src={slide4} alt="Slide" width={w} height={h} />,
  <img src={slide5} alt="Slide" width={w} height={h} />,
];

function Slider() {
  return (
    <div
      className="hidden lg:block"
      style={{
        height: "618px",
        flexBasis: "454px",
        backgroundImage: `url(${phoneFrame})`,
      }}
    >
      <div
        className="relative"
        style={{
          marginTop: "98px",
          marginLeft: "149px",
        }}
      >
        <div style={{ width: w + "px", height: h + "px" }}>
          <AliceCarousel
            items={items}
            animationType="fadeout"
            animationDuration={300}
            autoPlay={true}
            autoPlayInterval={1000}
            disableButtonsControls={true}
            disableDotsControls={true}
            infinite={true}
          />
        </div>
      </div>
    </div>
  );
}

export default Slider;
