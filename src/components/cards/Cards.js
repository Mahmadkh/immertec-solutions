import React from 'react'
import "./cards.css"
import EastIcon from '@mui/icons-material/East';


function Cards() {
  return (
      
          <div className='cards'>
          <div className='card'>
              <div className='firstHalf'>
                  <img src='1.png' alt='' />
              </div>
              <div className='secondHalf'>
                  <div className='content'>
                      <div className='vrExp'>VR Experiance</div>

                      <div className='stepIn'>
                          Step inside the OR from anywhere in real-time

                      </div>

                      <div className='flagS'>
                          Our flagship product to give you the best possible experiance for watching surgical procedures remotely
                      </div>

                      <div className='findOutMore'>
                          <button className='findOut'>
                              Find out More
                              <EastIcon className='eastIcon' />
                          </button>
                      </div>

                  </div>
              </div>
          </div>

          <div className='crd'>
              <div className='fistHalf'>
                  <img src='2.png' alt='' />
              </div>
              <div className='secndHalf'>
                  <div className='cntent'>
                      <div className='vrExp'>Immersive 2D Viewer</div>

                      <div className='viewing'>
                          Viewing experience tailor made for healthcare

                      </div>

                      <div className='ourImmer'>
                          Our Immersive 2D Viewer gives was created to ensure viewers won't miss anything important
                      </div>

                      <div className='findOutMore'>
                          <button className='fndOut'>
                              Find out More
                              <EastIcon className='eastIcon' />
                          </button>
                      </div>

                  </div>
              </div>
          </div>

          <div className='cad'>
              <div className='frstHalf'>
                  <img src='3.png' alt='' />
              </div>
              <div className='secodHalf'>
                  <div className='cotent'>
                      <div className='vrExp'>Recording Library</div>

                      <div className='stepInWatch'>
                          Watch recordings on-demand

                      </div>

                      <div className='recordStore'>
                          Record, store and replay surgical procedures on-demand in VR or Immersive 2D with our platform, ensuring optimal viewing experiances.
                      </div>

                      <div className='findOutMore'>
                          <button className='findOutmore'>
                              Find out More
                              <EastIcon className='eastIcon' />
                          </button>
                      </div>

                  </div>
              </div>
          </div>

          <div className='car'>
              <div className='fistHaf'>
                  <img src='4.png' alt='' />
              </div>
              <div className='secndHaf'>
                  <div className='conten'>
                      <div className='vExpData'>Data Analytics</div>

                      <div className='stepInLorem'>
                          Lorem ipsum about Data Analytics like the top two

                      </div>

                      <div className='experiance'>
                      Experience personalized surgical viewing with a 180° panoramic OR perspective and the ability to access up to 4 medical feeds, presentations, or intricate camera angles concurrently.
                      </div>

                      <div className='findOutMore'>
                          <button className='findOutLast'>
                              Find out More
                              <EastIcon className='eastIcon' />
                          </button>
                      </div>

                  </div>
              </div>
          </div>
      </div>
          
      
  )
    
}

export default Cards;
