import { Container } from "react-bootstrap";
import "./ErrorPage.css";
const ErrorPage = () => {
  return (
    <section className="error-page">
      <Container>
        <div className="error-page-text text-center">
          <h2>404</h2>
          <h3>Not Found</h3>
        </div>
      </Container>
    </section>
  );
};
export default ErrorPage;
