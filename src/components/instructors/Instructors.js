import React from 'react'
import "./Instructors.css"

function Instructors() {
  return (
    <div className='instructors'>
          <div className='meet'>
              Meet Our Instructors
          </div>
          <div className='instructorGrid'>
              <div className='docOne'>
                  <div className='heart'>
                      <img src='heart.png' alt='' />
                  </div>
                  <div className='jihad'>
                      Craig Walker, MD, FACC, FACA, FACP, FSCAI, FASCI, FCCP, FICA
                  </div>
                  <div className='endo'>Endovascular</div>
                  <img src='inst1.png' alt='' class="instOne"/>
              </div>
              
              <div className='docOne'>
                  <div className='heart'>
                      <img src='heart.png' alt='' />
                  </div>
                  <div className='jihad'>
                      Jihad A. Mustapha, MD, FACC, FSCAI
                  </div>
                  <div className='endo'>Endovascular</div>

                  <img src='inst2.png' alt=''/>
              </div>
              <div className='docOne'>
                  <div className='heart'>
                      <img src='heart.png' alt='' />
                  </div>
                  <div className='jihad'>
                      M. Laiq Raja, MD, FACC, FSCAI
                  </div>
                  <div className='endo'>Endovascular</div>
                  <img src='inst3.png' alt=''/>
              </div>
              
              
              
          </div>
    </div>
  )
}

export default Instructors
