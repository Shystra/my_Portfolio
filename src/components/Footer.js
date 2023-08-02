import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import {AiFillGithub, AiOutlineInstagram, AiOutlineLinkedin} from 'react-icons/ai';

export const Footer = () => {
  const urlInstagram = "https://www.instagram.com/httpsluucas/";
  const urlGithub = 'https://github.com/Shystra';
  const linkDin = 'https://www.linkedin.com/in/jo%C3%A3o-lucas-souza-a94193229/';



  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img  src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              {/* <a href={linkDin}><img src={navIcon1} alt="Icon" /></a> */}
              <a href={linkDin}><AiOutlineLinkedin/></a>


              <a href={urlGithub}><AiFillGithub alt='Icon' /></a>


              {/* <a href={urlInstagram}><img src={navIcon3} alt="Icon" /></a> */}
              <a href={urlInstagram}>< AiOutlineInstagram/></a>

            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
