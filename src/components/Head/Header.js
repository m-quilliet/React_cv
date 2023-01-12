import React from "react";
import "./header.css";
import profil from "../../assets/images/snapchat.png"


export const Header = () => { 
  return (
    <section  id="Home" className="home">
      <div data-aos='fade-right' className="catch-phrase">
        <h1>
          Hi , I am Maibelline <br /> <span>Developpeuse Fullstack Junior</span>
        </h1>
        <p>
          I Design and code beautifully Web Application and <br /> I love what I
          do
        </p>
        <div className="buttons">
          <button className="cv">Télècharger mon CV</button>
          <button className="hire-me">À propos de moi</button>
        </div>
      </div>
      <div  className="profil">
        <img src={profil} alt="" srcset="" />
        {/* <div  data-aos='fade-up' className="developper">
          <div className="check">
            <FaCheck />
          </div>
          <div>
            <h4>Web Developper</h4>
            <p>Creatives Websites for you </p>
          </div>
        </div> */}
        {/* <div  data-aos='fade-down' className="freelancer">
          <div className="check">
            <FaCheck />
          </div>
          <div>
            <h4>Freelancer</h4>
            <p>You can hire me now</p>
          </div>
        </div> */}
      </div> 
    </section>
  );
}