import "./Blog.css";
import { useEffect, useState } from "react";
import SeactionHeading from "../SeactionHeading/SeactionHeading";
import { Figure } from "react-bootstrap";

const Blog = () => {
  //////// file read////// start
  const [slider, setSlider] = useState([]);
  useEffect(() => {
    fetch("glaray2.json")
      .then((res) => res.json())
      .then((data) => setSlider(data));
  }, []);

  return (
    <Figure>
      <SeactionHeading heading="Blog Page" />
      {slider.map((item) => (
        <Figure.Image
          key={item.id}
          width={371}
          height={380}
          alt="371x380"
          src={item.image}
        />
      ))}
    </Figure>
  );
};

export default Blog;
