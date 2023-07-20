import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import html_icon from "../assets/img/html_icon.svg";
import oracle from "../assets/img/oracle.svg";
import github from "../assets/img/github.svg";
import mongodb from '../assets/img/mongodb.svg';
import vscode from '../assets/img/vscode.svg';
import node_js from '../assets/img/node_js.svg';
import google_scripts from '../assets/img/google_scripts.svg';
import typescript_icon from '../assets/img/typescript.svg';
import heroku from '../assets/img/heroku.svg';
import amazonS3 from '../assets/img/amazon_s3.svg';
import css_icon from '../assets/img/css_icon.svg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>My expertise lies in various technologies crucial for crafting captivating web experiences.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>ReactDOM</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                              <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Python</h5>
                               </div>
                              <div className="item">
                                  <img src={google_scripts} alt="Image" />
                                  <h5>Google Scripts</h5>
                              </div>
                              <div className="item">
                                  <img src={node_js} alt="Image" />
                                  <h5>NodeJS</h5>
                              </div>
                                <div className="item">
                                    <img src={html_icon} alt="Image" />
                                    <h5>HTML5</h5>
                              </div>
                              <div className="item">
                                  <img src={css_icon} alt="Image" />
                                  <h5>CSS</h5>
                              </div>
                              <div className="item">
                                  <img src={heroku} alt="Image" />
                                  <h5>Heroku</h5>
                              </div>
                              <div className="item">
                                  <img src={github} alt="Image" />
                                  <h5>GitHub</h5>
                              </div>
                              <div className="item">
                                  <img src={vscode} alt="Image" />
                                  <h5>VsCode</h5>
                              </div>
                              <div className="item">
                                  <img src={typescript_icon} alt="Image" />
                                  <h5>TypeScript</h5>
                              </div>
                              <div className="item">
                                  <img src={amazonS3} alt="Image" />
                                  <h5>AmazonS3</h5>
                              </div>
                              <div className="item">
                                  <img src={oracle} alt="Image" />
                                  <h5>Cloud</h5>
                              </div>
                              <div className="item">
                                  <img src={mongodb} alt="Image" />
                                  <h5>MongoDB</h5>
                              </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
