import Link from "next/link";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
// import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoIosArrowRoundUp } from "react-icons/io";
import { animateScroll } from "react-scroll";
// import { SubscribeEmailTwo } from "../Newsletter";

const FooterTwo = ({ footerBgClass }) => {
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    setTop(100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  return (
    <footer
      className={`space-pt--100 space-pb--50 ${footerBgClass ? footerBgClass : "bg-color--grey"
        }`}
    >
      <Container className="wide">
        <Row>
          <Col className="footer-single-widget space-mb--50">
            {/* logo */}
            <div className="logo space-mb--35">
              <img
                src={
                  footerBgClass ===
                    "bg-color--blue-two"
                    ? "/assets/images/esme-logo.svg"
                    : "/assets/images/esme-logo.svg"
                }
                className="img-fluid"
                alt=""
                style={{ maxWidth: "300px" }}
              />
            </div>

            {/*=======  copyright text  =======*/}
            <div className="footer-single-widget__copyright">
              &copy; {new Date().getFullYear() + " "}
              <a href="https://www.hasthemes.com" target="_blank">
                Esme Designs
              </a>
              <span>All Rights Reserved</span>
            </div>
          </Col>

          <Col className="footer-single-widget space-mb--50">
            <h5 className="footer-single-widget__title">ABOUT</h5>
            <nav className="footer-single-widget__nav">
              <ul>
                <li>
                  <Link
                    href="/other/about"
                    as={process.env.PUBLIC_URL + "/other/about"}
                  >
                    <a>About Us</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/other/terms"
                    as={process.env.PUBLIC_URL + "/other/terms"}
                  >
                    <a>Terms and conditions</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/other/privacy"
                    as={process.env.PUBLIC_URL + "/other/privacy"}
                  >
                    <a>Privacy policy</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    as={process.env.PUBLIC_URL + "/"}
                  >
                    <a>Shipping</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    as={process.env.PUBLIC_URL + "/"}
                  >
                    <a>Returns</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </Col>

          {/* <Col className="footer-single-widget space-mb--50">
            <h5 className="footer-single-widget__title">USEFUL LINKS</h5>
            <nav className="footer-single-widget__nav">
              <ul>
                <li>
                  <Link
                    href="/shop/left-sidebar"
                    as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
                  >
                    <a>Accessories</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/left-sidebar"
                    as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
                  >
                    <a>Bridal Collection</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/left-sidebar"
                    as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
                  >
                    <a>Bridal Plus</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/left-sidebar"
                    as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
                  >
                    <a>Bridesmaids Collection</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </Col>

          <Col className="footer-single-widget space-mb--50">
            <h5 className="footer-single-widget__title">FOLLOW US ON</h5>
            <nav className="footer-single-widget__nav footer-single-widget__nav--social">
              <ul>
                <li>
                  <a href="https://www.twitter.com">
                    <FaTwitter /> Twitter
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com">
                    <FaFacebookF /> Facebook
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com">
                    <FaInstagram /> Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com">
                    <FaYoutube /> Youtube
                  </a>
                </li>
              </ul>
            </nav>
          </Col> */}

          {/* <Col className="footer-single-widget space-mb--50">
            <div className="footer-subscribe-widget">
              <h2 className="footer-subscribe-widget__title">Subscribe.</h2>
              <p className="footer-subscribe-widget__subtitle">
                Subscribe to our newsletter to receive news on update.
              </p>
              <SubscribeEmailTwo mailchimpUrl="https://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef" />
            </div>
          </Col> */}
        </Row>
      </Container>
      <button
        className={`scroll-top ${scroll > top ? "show" : ""}`}
        onClick={() => scrollToTop()}
      >
        <IoIosArrowRoundUp />
      </button>
    </footer>
  );
};

export default FooterTwo;
