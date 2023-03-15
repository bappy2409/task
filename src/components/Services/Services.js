import { Container, Row } from "react-bootstrap";
import "./Services.css";
import Service from "../Service/Service";
// import SeactionHeading from "../SectionHeading/SeactionHeading";
import { useEffect, useState } from "react";
import SeactionHeading from "../SeactionHeading/SeactionHeading";
//import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("hero.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <section className=" mb-5">
      <SeactionHeading heading="Our Services" />
      <Container>
        <Row>
          {services.map((item) => (
            <Service key={item.id} item={item}></Service>
          ))}
        </Row>
      </Container>
    </section>
  );
};
export default Services;
