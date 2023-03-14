import { Card, Col } from "react-bootstrap";
import "./Service.css";

const Service = ({ item }) => {
  return (
    <Col lg={4} className="mb-5">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.subheading}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default Service;
