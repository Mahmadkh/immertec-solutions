import React from 'react'
import "./Foot.css"
import CopyrightIcon from '@mui/icons-material/Copyright';

function Foot() {
  return (
      <div className='fooot'>
          
          <div className='body'>
              
              <div className='immer'>
          <div className='logO'>
              <img src='Icon.png' alt='' />
              <div className='rtec'>
               Immertec
          </div>
          </div>

          
          <div className='follow'>
              Follow Us
          </div>
          <div className='socialIcons'>
              <img src='face.png' alt='' />
              <img src='insta.png' alt='' />
              <img src='tweet.png' alt='' />
              <img src='link.png' alt='' />
          </div>
          <div className='copyRight'>
              < CopyrightIcon className='cicon'/>
              2022 Immersive Tech Inc. All Rights Reserved.
          </div>
              </div>

          <div className='platform'>
          
              <div className='plat'>
               Platform
         
          </div>

          
          <div className='product'>
              Product
          </div>
          <div className='science'>
              The Science
          </div>
         
          </div>

          <div className='company'>
          <div className='comp'>
             
               Company
         
          </div>

          
          <div className='medical'>
              Medical Advisory board
              </div>
              <div className='medical'>
             About
              </div>
              <div className='medical'>
                  Careers
              </div>
              <div className='medical'>
              Contact
          </div>
         
          </div>

          <div className='more'>
          <div className='mor'>
         More
          </div>

          
          <div className='terms'>
            Terms of Service
              </div>
              <div className='privacy'>
                  Privacy Policy
              </div>
      
          </div>

          <div className='healthCare'>
            Healthcare solutions featuring live streaming of surgical procedures in VR and Immersive 2D, on-demand recordings, and data analytics
    
          </div>
          </div>
          
          
    </div>
  )
}

export default Foot
