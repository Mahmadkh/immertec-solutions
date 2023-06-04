import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useEffect } from "react";

import "./Solutions.css";
import EastIcon from "@mui/icons-material/East";
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import GroupWorkOutlinedIcon from "@mui/icons-material/GroupWorkOutlined";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import SensorsOutlinedIcon from '@mui/icons-material/SensorsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CopyrightIcon from "@mui/icons-material/Copyright";



const NavBar = () => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    var navBar = document.querySelector(".navBar");
    var mMer = document.querySelector(".mMer");

    var scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
      navBar.classList.add("fixed");
      navBar.classList.add("scrolled");
      mMer.classList.add("scrolled");
    } else {
      navBar.classList.remove("fixed");
      navBar.classList.remove("scrolled");
      mMer.classList.remove("scrolled");
    }
  };
  return (
    <div className="solution">
      <div className="navBar">
        <div className="heroContainer">
          <div className="head">
            <div className="headerLogo">
              <img src="headerlogo.png" alt="" />
              <div className="mMer">Immertec</div>
            </div>
            <div className="nav">
              <Link to="/Solutions" className="linkTo">
                <div className="soltwo">Solutions</div>
              </Link>

              <div class="dropdown">
                <button class="dropbotn">
                  About
                  <ArrowDropDownIcon />
                </button>
                <div class="dropdown-content">
                  <a href="one">Option 1</a>
                  <a href="two">Option 2</a>
                  <a href="three">Option 3</a>
                </div>
              </div>
              <Link to="/Contact" className="linkTo">
                <div>contact</div>
              </Link>

              <div className="demoButton">
                <button className="demo">Request a Demo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tabs">
        <div className="same">
          <img src="tab1.png" alt="" className="tabImage" />
          VR viewer
        </div>
        <div className="same">
          <img src="tab2.png" alt="" className="tabImage" />
          Immersive 2D Viewer
        </div>
        <div className="same">
          <img src="tab3.png" alt="" className="tabImage" />
          Recordings
        </div>
        <div className="same">
          <img src="tab4.png" alt="" className="tabImage" />
          Data Analytics
        </div>
      </div>

      <div className="solutions">
        <div className="viewer">Immersive 2D Viewer</div>
        <div className="secondPagePic">
          <img src="2ndpage.png" alt="" />
        </div>
      </div>
      <div className="cardsSecond">
        <div className="cardSecond">
          <div className="firstHalfSecond">
            <img src="1page2.png" alt="" />
          </div>
          <div className="secondHalfSecond">
            <div className="contentSecond">
              <div className="vrExpSecondPage">Watch live cases from anywhere</div>

              <div className="stepInSecond">
              Stay connected to your surgical training, proctoring, teaching, or learning from a surgeon, whether at home or on-the-go, with the ease of desktop, laptop, or tablet accessibility.
              </div>

              
            </div>
          </div>
        </div>

        <div className="crdSecond">
          <div className="fistHalfSecond">
            <img src="2page2.png" alt="" />
          </div>
          <div className="secondHalfSecond">
            <div className="cntentSecond">
              <div className="vrExpSecondPage">Focus on what matters</div>

              <div className="stepInSecond">
              Experience personalized surgical viewing with a 180° panoramic OR perspective and the ability to access up to 4 medical feeds, presentations, or intricate camera angles concurrently.
              </div>

              
            </div>
          </div>
        </div>

        <div className="cadSecond">
          <div className="frstHalfSecond">
            <img src="3page2.png" alt="" />
          </div>
          <div className="secodHalfSecond">
            <div className="cotentSecond">
              <div className="vrExpSecondPage">Collaborate with peers</div>

              <div className="stepInSecond">Engage in real-time collaboration with OR surgeons and remote colleagues, while utilizing annotation features to highlight crucial information seamlessly.</div>

              
            </div>
          </div>
        </div>

        
      </div>

      <div className="thirdPart">
        <div className="thirdContainer">
          <div className="thirdOne">
            The best viewing experience from anywhere
          </div>
          <div className="thirdTwo">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            ultrices luctus ullamcorper. Nam aliquam sed erat et imperdiet.
            Aenean nec iaculis enim. Mauris accumsan pellentesque tincidunt.
            Duis enim neque, aliquet ut vulputate nec, venenatis id nunc.
          </div>
          <div className="wrap">
            <div className="thirdThree">
              <div className="hassleFree">
                <div className="hassleOne">
                  <WarningAmberRoundedIcon className="WarningAmberRoundedIcon" />
                </div>
                Hassle Free
              </div>
              <div className="bullets">
                <ul>
                  <li>Easy event management and hosting</li>
                  <li>Join events with a simple passcode
                    
                  </li>
                  <li>Dedicated user portal for seamless access</li>
                </ul>
              
                  
               
          
              </div>
            </div>
            <div className="thirdThree">
              <div className="hassleFree">
                <div className="hassleOne">
                  <VisibilityOutlinedIcon />
                </div>
                The best views
              </div>
              <div className="bullets">
                <ul>
                  <li>180° main view of the OR</li>
                </ul>
                <ul>
                  <li>Effortlessly pan and navigate the main view</li>
                </ul>
                <ul>
                  <li>Up to four simultaneous HD medical feeds</li>
                </ul>
              </div>
            </div>
            <div className="thirdThree">
              <div className="hassleFree">
                <div className="hassleOne">
                  <GroupWorkOutlinedIcon />
                </div>
                Collaboration
              </div>
              <div className="bullets">
                <ul>
                  <li>Real-time video communication </li>
                </ul>
                <ul>
                  <li>
                  Annotate medical feeds  
                  </li>
                </ul>
                <ul>
                  <li>
                  Show presentation slides
                  </li>
                </ul>
              </div>
            </div>
            <div className="thirdThree">
              <div className="hassleFree">
                <div className="hassleOne">
                  < LockOutlinedIcon/>
                </div>
                Security
              </div>
              <div className="bullets">
                <ul>
                  <li>
                  SOC2 certification for enhanced security and trust
                   </li>
                </ul>
                <ul>
                  <li>Compliance with privacy policies
</li>
                </ul>
                <ul>
                  <li>Robust authentication to guarantee authorized access</li>
                </ul>
              </div>
            </div>
            <div className="thirdThree">
              <div className="hassleFree">
                <div className="hassleOne">
                  < SettingsOutlinedIcon/>
                </div>
                OR Equipment
              </div>
              <div className="bullets">
                <ul>
                  <li>Connect with any OR equipment (C-Arms, scopes, Ultrasound, etc.) 
</li>
                </ul>
                <ul>
                  <li>Support 3D medical equipment 
</li>
                </ul>
                <ul>
                  <li>Support AR technology from third parties</li>
                </ul>
              </div>
            </div>
            <div className="thirdThree">
              <div className="hassleFree">
                <div className="hassleOne">
                  < SensorsOutlinedIcon/>
                </div>
                Medical feeds
              </div>
              <div className="bullets">
                <ul>
                  <li>Connect with any OR equipment (C-Arms, scopes, Ultrasound, etc.) 
</li>
                </ul>
                <ul>
                  <li>Support 3D medical equipment 
</li>
                </ul>
                <ul>
                  <li>Support AR technology from third parties</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="thirdFour">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            ultrices luctus ullamcorper. Nam aliquam sed erat et imperdiet.
            Aenean nec iaculis enim.
          </div>
          <div className="thirdFive">
            <button className="buttonSecondScreen">
              Request a Demo
              <EastIcon className="eastIcon" />
            </button>
          </div>
        </div>
      </div>
      
      <div className='darkGreyContainer'>
              <div className='qualityTwo'>
                  <div className='text'>
                      <h1>"The quality was great, I love the fact that you can pick exactly what's important to you during a case and highlight that"</h1>
                  </div>


                  <div className='qualityFoot'>
                      <div className='pointers'>
                          <ArrowBackIcon className='leftO' />
                          

                          <ArrowForwardIcon className='rightO' />

                      </div>
                      <div className='signature'>
                          Clinical Education Manager
                      </div>
                  </div>
              </div>
      </div>
      <div className='immersive'>
      <div className='immersiveText'>
        Immersive
Training & Awareness Platform
      </div>
      <div className='relative'>
        <img src='5.png' alt=''className="VRpic"/>
          </div>
      
      </div>
      <div className="footBackGround">
      <div className="foot">
      <div className="foo">
        <div className="fot">
          <div className="footNote">
            Immersive Training & Awareness Platform
          </div>
          <div className="footNot">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae
            mattis arcu.{" "}
          </div>
          <div className="findOutMore">
            <button className="findFoot">
              Find out More
              <EastIcon className="eastIcon" />
            </button>
          </div>
        </div>
        <div className="footImg">
          <img src="6.png" alt="" />
        </div>
      </div>
        </div>
        <div className="fooot">
      <div className="body">
        <div className="immer">
          <div className="logO">
            <img src="Icon.png" alt="" />
            <div className="rtec">Immertec</div>
          </div>

          <div className="follow">Follow Us</div>
          <div className="socialIcons">
            <img src="face.png" alt="" />
            <img src="insta.png" alt="" />
            <img src="tweet.png" alt="" />
            <img src="link.png" alt="" />
          </div>
          <div className="copyRight">
            <CopyrightIcon className="cicon" />
            2022 Immersive Tech Inc. All Rights Reserved.
          </div>
        </div>

        <div className="platform">
          <div className="plat">Platform</div>

          <div className="product">Product</div>
          <div className="science">The Science</div>
        </div>

        <div className="company">
          <div className="comp">Company</div>

          <div className="medical">Medical Advisory board</div>
          <div className="medical">About</div>
          <div className="medical">Careers</div>
          <div className="medical">Contact</div>
        </div>

        <div className="more">
          <div className="mor">More</div>

          <div className="terms">Terms of Service</div>
          <div className="privacy">Privacy Policy</div>
        </div>

        <div className="healthCare">
          Healthcare solutions featuring live streaming of surgical procedures
          in VR and Immersive 2D, on-demand recordings, and data analytics
        </div>
      </div>
    </div>
      </div>
    </div>

    
    
  );
};

export default NavBar;
