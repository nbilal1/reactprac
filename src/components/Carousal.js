import Carousel from 'react-bootstrap/Carousel';
import er from '../er.jpg'
import imge from'../imge.jpg'
function Carousal() {
  return (
    <Carousel fade >
      <Carousel.Item>
          <img src={er} className="d-block w-100" id="carousal"/>
        
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={imge}className="d-block w-100"/>

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
       
      
    </Carousel>
  );
}

export default Carousal;