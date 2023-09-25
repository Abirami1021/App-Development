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
        
        <li className="dropdown">
          <a className="LandList">OUR SERVICES</a>
          <ul className="dropdown-content">
            <li>
              <Link to='/Diet' className='LandList'>DIET</Link>
            </li>
            <li><a href="/Ecohaven">ECO-HAVEN</a></li>
            <li><a href="show">SANITATION</a></li>
            <li><a href="show">MOBILIZING</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
