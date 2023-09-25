import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/css/Navbar.css";

const Navigation = () => {
  return (
    <nav className='landingNav'>
      <ul className='landingUl'>
        <li>
          <Link to='/home' className='LandList1'>
            HOME
          </Link>
        </li>
        <li>
          <Link to='/Feed' className='LandList'>
            FEEDBACK
          </Link>
        </li>
        <li>
          <Link to='/' className='LandList'>
            LOGIN
          </Link>
        </li>
        <li>
          <Link to='/Form' className='LandList'>
            FORM
          </Link>
        </li>
        
        <li class="dropdown">
      <div class="LandList">OUR SERVICES</div>
      <div class="dropdown-content">
        <Link to="/Diet">Diet</Link>
        <Link to="/Ecohaven">Eco-Haven</Link>
        <Link to="/Sanitation">Sanitation</Link>
      </div>
    </li>
      </ul>
    </nav>
  );
}

export default Navigation;
