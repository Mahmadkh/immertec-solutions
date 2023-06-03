import React from 'react'
import EastIcon from '@mui/icons-material/East';
import "./Footer.css"


function Footer() {
  return (
    <div className='foot'>   
          
          <div className='foo'>
              <div className='fot'>
              <div className='footNote'>
              Immersive Training & Awareness Platform
          </div>
          <div className='footNot'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae mattis arcu. </div>
          <div className='findOutMore'>
                          <button className='findFoot'>
                              Find out More
                              <EastIcon className='eastIcon' />
                          </button>
                      </div>
          </div>
          <div className='footImg'>
              <img src='6.png' alt='' />
          </div>
          </div>
         
    </div>
  )
}

export default Footer
