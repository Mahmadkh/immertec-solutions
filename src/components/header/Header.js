import "./Header.css"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import EastIcon from '@mui/icons-material/East';
import React, { useEffect } from 'react';



const NavBar = () => {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
      var navBar = document.querySelector('.navBar');
        var mMer = document.querySelector('.mMer');

    var scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
    navBar.classList.add('fixed');
    navBar.classList.add('scrolled');
    mMer.classList.add('scrolled'); 
        
  } else {
    navBar.classList.remove('fixed');
    navBar.classList.remove('scrolled');
    mMer.classList.remove('scrolled'); 
  }
  };
   

    
  
  return (
      <div className='main'>
          
           <div className="navBar">
          <div className="heroContainer">
             
                  <div className='head'>
              <div className='headerLogo'>
              <img src='headerlogo.png' alt='' />
                          <div className="mMer">
                              Immertec
                          </div>

              </div>
              <div className='nav'>
                  <div className='sol'>
                      Solutions
                  </div>
                <div class="dropdown">
                      <button class="dropbtn">
                          About
                          <ArrowDropDownIcon />
                      </button>
                    <div class="dropdown-content">
                      <a href="one">Option 1</a>
                      <a href="two">Option 2</a>
                      <a href="three">Option 3</a>
                    </div>
                      
                </div>
                      <div>
                          contact
                      </div>
                  <div className='demoButton'>
                      <button className='demo'>
                          Request a Demo
                      </button>
                      </div>
                  </div>
              </div>
          
              
                  
                  
          </div>
          </div>
          <div className='headText'>
              <div className='mertec'>
              Immertec 
          </div>
          <div className='solu'>
              Solutions
          </div>  
          </div>
          <div className='footText'>
              <div className='foText'>
                   A technology enabled Healthcare platform that covers all the need of Healthcare Professionals and Medical Device Companies 
             </div>
          </div>
          <div className='demoBut'>
              <div className=''>
                      <button className='dem'>
                      Request a Demo
                      <EastIcon className='eastIcon' />
                      </button>
                      
                  </div>
          </div>
          
          
      </div>
  )
}


export default NavBar;