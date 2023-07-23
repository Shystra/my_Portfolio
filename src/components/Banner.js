import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Developer", "I.T Analyst", ];
  const period = 2000;


 

  const redirecionarParaCurriculo = () => {
    // Coloque o link do seu currículo aqui
    const curriculoLink = 'https://drive.google.com/drive/folders/1uJeH4GF5pbeKZzHcHM7oNagBSopGfP3d';
    window.location.href = curriculoLink;
  };




  // const cV = 'https://drive.google.com/drive/folders/1uJeH4GF5pbeKZzHcHM7oNagBSopGfP3d'

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Lucas`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "I.T Analyst", "" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Hello! I am a technology enthusiast with a strong passion for Front-End development, 
                    backed by two years of experience as an IT analyst. 
                    Throughout this period, I have honed my skills in various technologies, 
                    including JavaScript, CSS, HTML, and Python.

                      Currently, my work revolves around debugging and maintaining code using Google Scripts, 
                      where I create solutions that enhance team efficiency and productivity. Additionally, 
                      I provide technical support to users, ensuring that the 
                      implemented solutions are utilized effectively.</p>
                   
                   
                  <button className='button_cv' onClick={redirecionarParaCurriculo}>Resume <ArrowRightCircle size={25} /></button>
                 
                  {/* <button className="vvd"><span>Let’s Connect</span></button> */}
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
