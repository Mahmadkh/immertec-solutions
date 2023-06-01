import React from 'react'
import "./Blue.css"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Blue() {
  return (
    <div>
      <div className='blueContainer'>
              <div className='quality'>
                  <div className='text'>
                      <h1>"The quality was great, I love the fact that you can pick exactly what's important to you during a case and highlight that"</h1>
                  </div>


                  <div className='qualityFoot'>
                      <div className='pointers'>
                          <ArrowBackIcon className='left' />
                          <div className='oneByThree'>
                              1 / 3
                          </div>

                          <ArrowForwardIcon className='right' />

                      </div>
                      <div className='signature'>
                          Clinical Education Manager
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Blue
