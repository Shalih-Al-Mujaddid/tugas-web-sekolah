import { Carousel } from "react-bootstrap";
import  hero1 from './assets/hero.jpg';
import  hero2 from './assets/hero (2).png';

const Hero = ()=> {
    return(
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={hero1}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h5>First slide label</h5>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={hero2}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h5>Second slide label</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              
            </Carousel>
          );
        }

export default Hero;