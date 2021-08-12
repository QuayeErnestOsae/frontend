import React from "react";
import logo from "./cover.png";
import outreach_logo from './favicon2.ico'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import searchbox from "./Rectangle 50.png";
import searchbox_I from "./Rectangle 51.png";
import design from "./Ellipse 6.png";

import event1 from "./Rectangle 126.png";

function App() {
  return (
//design symbol
        <div className="App">

  <div className="cover">
        <img src={logo} className="cover" alt="logo" />
  </div>
  <div className="design1">
        <img src={design} className="design1" alt="logo1" />
  </div>
  <div className="design2">
        <img src={design} className="design2" alt="logo2" />
  </div>
  <div className="design3">
        <img src={design} className="design3" alt="loog3" />
  </div>
  <div className="design4">
        <img src={design} className="design4" alt="logo4" />
  </div>
  <div className="d_text">
  <h1> REACH 2021 </h1>
  </div>

<div className="emblem">
<img src={outreach_logo} className="emblem" alt=""/>

</div>


  <div className="nav">
  <img src="Rectangle 126.png" className="" alt="" />
  </div>



  <a href="https://www.instagram.com/praise.outreach"
    target="_blank"
    rel="noopener noreferrer"
  >
  <div className="signUp">SIGN UP</div>
   <div className="logIn">LOG IN</div>
</a>



  <div className="Search">
          <img src={searchbox} className="search" alt="logo2" />
  </div>
      <div className="Search_O">
      <h1>Opportunities to serve at Reach 2021</h1>

      </div>


      <div className="Search_I">
      <img src={searchbox_I} className="search_I" alt="logo3" />
        <h2>Search for your city</h2>
      </div>



      <div className="eventL" >
          <img src="event1" className="" alt="" />

      </div>
      <div className="eventLs">
  <img src="Rectangle 126.png" className="" alt="" />
      </div>
      <div className="Egyam">
      <h1>Visit to Egyam Orphanage</h1>
      </div>

      <div className="eventR">
      <img src="Rectangle 126.png" className="" alt="" />
      </div>
      <div className="eventRs">
  <img src="Rectangle 126.png" className="" alt="" />
      </div>
      <div className="Egyam2">
      <h1>Visit to Egyam Orphanage</h1>
      </div>


      <div className="eventL2">
    <img src="Rectangle 126.png" className="" alt="" />
      </div>
      <div className="eventLs2">
      <img src="Rectangle 126.png" className="" alt="" />
      </div>
      <div className="Egyam3">
      <h1>Visit to Egyam Orphanage</h1>
      </div>

      <div className="eventR2">
      <img src="Rectangle 126.png" className="" alt="" />
      </div>
      <div className="eventRs2">
      <img src="Rectangle 126.png" className="" alt="" />
      </div>
      <div className="Egyam31">
      <h1>Visit to Egyam Orphanage</h1>
      </div>


      <div className="eventL3">
    <img src="Rectangle 126.png" className="" alt="" />
      </div>
      <div className="eventLs3">
      <img src="Rectangle 126.png" className="" alt="" />
      </div>
      <div className="Egyam4">
      <h1>Visit to Egyam Orphanage</h1>
      </div>

      <div className="eventR3">
      <img src="Rectangle 126.png" className="" alt="" />
      </div>
      <div className="eventRs3">
      <img src="Rectangle 126.png" className="" alt="" />
      </div>
      <div className="Egyam41">
      <h1>Visit to Egyam Orphanage</h1>
      </div>
</div>

  );
}

export default App;
