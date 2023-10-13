import React from 'react';
import '../assets/css/Home.css'; 
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import img3 from '../assets/img/img1.png';
import eld from '../assets/img/eld.jpeg';
import thatha from '../assets/img/thatha.jpeg'


function ImageSlider() {
  const items = [
    <img src={eld} alt="Image 1" />,
    <img src={thatha} alt="Image 2" />,
    <img src={img3} alt="Image 3" />,
  ];

  const responsive = {
    0: { items: 1 },
    768: { items: 2 },
    1024: { items: 3 },
  };

  return (
    <div className="image-slider">
      <AliceCarousel
        items={items}
        responsive={responsive}
        autoPlay={false}
      />
    </div>
  );
}

export default ImageSlider;