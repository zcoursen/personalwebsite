import React from "react";
import codePhoto from "../Assets/Img/codeing_ul_li.jpg";
import t_Station from "../Assets/Img/Boston_T-Station.jpg"

const Home = () => (
  <div className="group">
    <div className="container">
      <div className="main-header" >
      </div>
      <div className="body-home">
      <h1 className ="header-title">Zachary Coursen</h1>

      <div className="part-one">
          <h2 className="main-header-two">Who I Am?</h2>
          <p className="openingstatement">I am a Developer, currently working in Boston area.</p>
           
           <img src={codePhoto} className="code-photo" alt="code in sublime" />
           <img src={t_Station} className="t-station" alt="photo of boston" />
        </div>
        <div className="bottom-margin">
        </div>
      </div>
    </div>
      
    <footer className="main-footer">
      <h6>Made by Zachary Coursen</h6>
    </footer>
    </div>
);

export default Home;