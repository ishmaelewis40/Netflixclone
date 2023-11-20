import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Ensure correct import path
import './Nav.css';
import netflix from '../images/netflix.png';
import avatar from '../images/avatar.png';

function Nav() {
  const [show, handleShow] = useState(false);

  // Ensure correct assignment of useNavigate hook
  const navigate = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && 'nav_bg'}`}>
      <div className="nav_stuff">
        <img onClick={() => navigate('/')}src={netflix} className="nav_logo" />
        <img
          onClick={() => navigate('/profile')}
          src={avatar}
          className="nav_avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
