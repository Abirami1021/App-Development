import React from 'react';
import '../assets/css/Home.css';
import 'react-alice-carousel/lib/alice-carousel.css';
import ImageSlider from './Slider';
import Navigation from './Navbar';
import Footer from './Footer';
function Home() {
    
  return (
    <>
   <Navigation/>
    <div className="home-container">
      <header>
      <p className="marquee">.....CARING FOR THE ONE'S WHO ONCE CARED FOR US.....</p>
      </header>
      <main>
     
        <section className="features">
       
          <div className="feature">
            <h2 className='abi'>Find Care Services</h2>
            <p> SEARCH FOR A VARIETY OF CARE SERVICES FOR YOUR LOVED ONES.</p>
          </div>
          <div className="feature">
            <h2 className='abi'>Provider Directory</h2>
            <p>EXPLORE A DIRECTORY OF TRUSTED CARE PROVIDERS IN YOUR AREA.</p>
          </div>
          <div className="feature">
            <h2 className='abi'>Community Support</h2>
            <p>JOIN OUR COMMUNITY TO SHARE EXPERIENCES AND GET SUPPORT.</p>
          </div>
        </section>
        <ImageSlider /> 
      </main>
    </div>
    <Footer />
    </>
  );
}

export default Home;