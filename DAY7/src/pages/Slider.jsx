import React from 'react';
import '../assets/css/Home.css'; // Import the common styles
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import img1 from '../assets/img/img1.png';
import img2 from '../assets/img/img2.png';
import img3 from '../assets/img/img3.png';
import img4 from '../assets/img/img4.png';

function ImageSlider() {
  const items = [
    <img src={img1} alt="Image 1" />,
    <img src={img2} alt="Image 2" />,
    <img src={img3} alt="Image 3" />,
    <img src={img4} alt="Image 4" />,
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
