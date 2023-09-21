import React from 'react';
import '../assets/css/Home.css'; 
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import img3 from '../assets/css/img/img1.png';
import img4 from '../assets/css/img/img2.png';
import eld from '../assets/css/img/eld.jpeg';
import thatha from '../assets/css/img/thatha.jpeg'

function ImageSlider() {
  const items = [
    <img src={eld} alt="Image 1" />,
    <img src={thatha} alt="Image 2" />,
    <img src={img4} alt="Image 3" />,
  ];

  const responsive = {
    0: { items: 1 },
    7: { items: 2 },
    1: { items: 3 },
  };

  const renderNextButton = () => null;
  const renderPrevButton = () => null; 

  return (
    <div className="image-slider">
      <AliceCarousel
        items={items}
        responsive={responsive}
        autoPlayInterval={160}
        renderNextButton={renderNextButton}
        renderPrevButton={renderPrevButton}
      />
    </div>
  );
}

export default ImageSlider;
