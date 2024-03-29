import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import Countdown from "react-countdown";
import { IoIosCart } from "react-icons/io";
import Renderer from "./Renderer";

const CountdownTimerSix = ({
  title,
  image,
  dateTime,
  url,
  buttonText,
  spaceBottomClass
}) => {
  return (
    <div
      className={`countdown-timer-wrapper ${spaceBottomClass ? spaceBottomClass : ""
        }`}
    >
      <Container>
        <Row>
          <Col lg={12}>
            <div className="countdown-background">
              <Row className="align-items-center">
                <Col lg={3} xl={5}>
                  <div className="countdown-image text-center space-mb-mobile-only--50">
                    <img
                      src={image}
                      className="img-fluid"
                      alt=""
                      style={{ width: "100%" }}
                    />
                  </div>
                </Col>
                <Col lg={9} xl={7}>
                  <div className="countdown-wrapper text-center">
                    <h3>{title}</h3>
                    <div className="deal-countdown">
                      <Countdown
                        date={new Date(dateTime)}
                        renderer={Renderer}
                      />
                    </div>
                    <Link href={url} as={url}>
                      <a className="lezada-button lezada-button--medium lezada-button--icon--left">
                        <IoIosCart /> {buttonText}
                      </a>
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CountdownTimerSix;
