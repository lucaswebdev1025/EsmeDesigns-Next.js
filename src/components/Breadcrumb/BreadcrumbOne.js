import { Col, Container, Row } from "react-bootstrap";
const BreadcrumbOne = ({ children, backgroundImage, pageTitle, className }) => {
  return (
    <div
      className={`breadcrumb-area space-pt--70 space-pb--70 ${className ? className : ""
        }`}
      style={{
        backgroundImage: `url("${backgroundImage}")`
      }}
    >
      <Container>
        <Row>
          <Col>
            <h1 className="breadcrumb__title">{pageTitle}</h1>
            {children}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BreadcrumbOne;
