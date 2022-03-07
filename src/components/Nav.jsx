import React, { useState, useEffect } from 'react';
import './Nav.css';

// const Nav = () => {
//   return (
//     <div className='nav'>
//         <img className="nav__logo" src="/images/netflix-logo.png" alt="Netflix logo" />
          
//         <img className="nav__avatar" src="/images/netflix-profile.jpg" alt="Netflix profile" />   
//     </div>
//   );
// };

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
      window.addEventListener('scroll', () => {
          if(window.scrollY > 100) {
              handleShow(true);
          } else handleShow(false);
      });
      return () => {
          window.removeEventListener('scroll');
      };
  }, []);

  return (
      <div className={`nav ${show && "nav__black"}`}>
          <img 
          className="nav__logo"
          src="/images/netflix-logo.png" alt="Netflix Logo" />

          <img 
          className="nav__avatar"
          src="/images/netflix-profile.jpg" alt="Netflix profile" />
      </div>
  )
}

export default Nav