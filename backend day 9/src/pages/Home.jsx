import React, { useState } from 'react';
import '../assets/css/Home.css'; // Import the common styles
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Link } from 'react-router-dom'; // Assuming you are using React Router
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import img1 from '../assets/img/img1.jpg';
import img2 from '../assets/img/img2.jpg';
import img3 from '../assets/img/img3.jpg';
import img4 from '../assets/img/img4.jpg';
import Navigation from './Navbar';
import Footer from './Footer';
import Social from './Social';
import CustomChatbot from './ChatbotComponent';

function Home() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };
  
  const items = [
    <div className='card-slider'>    
    <div className="card" key="img1">
      <img src={img1} alt="Image 1" className="card-image" />
      <div className="card-content">
        <h2 className="card-title">Diet</h2>
        <p className="card-description">Ageless melody of nourishment, eat healthy
        </p>
        <Link to="/diet" className="read-more-link">
          Read More
        </Link>
      </div>
    </div>
    </div>
,
<div className='card-slider'>
    <div className="card" key="img2">
      <img src={img2} alt="Image 2" className="card-image" />
      <div className="card-content">
        <h2 className="card-title">Eco-Haven</h2>
        <p className="card-description">In embracing nature, seniors find well-being.</p>
        <Link to="/ecohaven" className="read-more-link">
          Read More
        </Link>
      </div>
    </div>
    </div>,
    <div className='card-slider'>
    <div className="card" key="img3">
      <img src={img3} alt="Image 3" className="card-image" />
      <div className="card-content">
        <h2 className="card-title">Sanitation</h2>
        <p className="card-description">Cleanliness and hygiene for a healthy environment</p>
        <Link to="/sanitation" className="read-more-link">
          Read More
        </Link>
      </div>
    </div>
    </div>,
    <div className='card-slider'>
    <div className="card" key="img4">
      <img src={img4} alt="Image 4" className="card-image" />
      <div className="card-content">
        <h2 className="card-title">Empowering</h2>
        <p className="card-description">Mobilizing senior citizens and reshaping life</p>
        <Link to="/mobilizing" className="read-more-link">
          Read More
        </Link>
      </div>
      </div>
      </div>,
  ];

  const responsive = {
    0: { items: 1 },
    768: { items: 2 },
    1024: { items: 3 },
  };

  const renderNextButton = () => null;
  const renderPrevButton = () => null;
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  return (
    <>
        <Navigation/>
        <Social/>
    <div className="home-container">
    <header>
    <div className="marquee-container">
      <p className="marquee">CARING FOR THE ONE'S WHO ONCE CARED FOR US</p>
    </div>
    </header>
    <main>
   
      <section className="features">
     
        <div className="feature">
  <h2 className='janice' onClick={() => setIsPopUpOpen(!isPopUpOpen)}>Find Care Services</h2>
  <p>Search for a variety of care services for your loved ones.</p>
  {isPopUpOpen && (
    <div className="janice-pop-up">
      <h2>Find Care Services</h2>
      <p>This is the pop-up content for Find Care Services.</p>
      {/* Ydfghjou can add more content or components here */}
    </div>
  )}
</div>
        <div className="feature">
          <h2 className='janice'>Provider Directory</h2>
          <p>Explore a directory of trusted care providers in your area.</p>
        </div>
        <div className="feature">
          <h2 className='janice'>Community Support</h2>
          <p>Join our community to share experiences and get support.</p>
        </div>
      </section>
      </main>
    
    <div className="home">
      <AliceCarousel
        items={items}
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        autoPlayInterval={1800}
        renderNextButton={renderNextButton}
        renderPrevButton={renderPrevButton}
      />
    </div>
    </div>
    
      <CustomChatbot/>

        <Footer/>
    </>

  );
}

export default Home;
