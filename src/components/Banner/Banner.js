import Carousel from "react-bootstrap/Carousel";

import { useEffect, useState } from "react";
import "./Banner.css";

const Banner = () => {
  //////// file read////// start
  const [slider, setSlider] = useState([]);
  useEffect(() => {
    fetch("hero.json")
      .then((res) => res.json())
      .then((data) => setSlider(data));
  }, []);
  //////// file read////// end

  return (
    <Carousel>
      {slider.map((item) => (
        <Carousel.Item interval={1000} key={item.id} style={{ height: "70%" }}>
          <Carousel.Caption>
            <h1 className="banner-text">{item.subheading}</h1>
          </Carousel.Caption>
          <img
            className="banner-image d-block w-100"
            src={item.image}
            alt="First slide"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Banner;
