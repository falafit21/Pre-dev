import React from 'react';
import apple from '../../assets/apple.png';
import '../../css/App.css';
import bell from '../../assets/bell.jpg';
import pneab from '../../assets/pneab.jpg';
import fit from '../../assets/fit.jpg';
import Carousel from 'react-bootstrap/Carousel';
import {Link} from 'react-router-dom';
// import logo from '../public/assets/logo512.png';


function App() {
  return (
    <div className="App" style={{backgroundColor:'#FFBF00'}}>
      <div class="row" >
            <div class="col-md-6">
                <img src={apple}  alt="apple" className="img"/>
                {/* <img src={logo}  alt="apple" className="img"/> */}
                          
            </div>
            <div class="col-md-6">
                          {/* <span class="vl"></span>  */}
              <div class="name">
                <div>" Sunday </div>
                <div>Mac Plom</div>
                <div>Jeendang "</div>
              </div>
                          
            </div>
          </div>  
      <header className="App-header">
      {/* <Carousel>
        <Carousel.Item> */}
          
        {/* </Carousel.Item>
        
      </Carousel> */}
          {/* <br></br> */}
          <div style={{textAlign: 'center', fontSize: '65px'}}>M E M B E R S</div>
          {/* <Link to='/page1'><a>go to page 1</a></Link> */}
          <hr className="new4"></hr>
          <br></br>
          {/* <hr className="new4"> */}
          {/* <br> */}
           <div className="container">
            <div className="row">
              <div className="col-sm-4 " style={{textAlign:'center'}}>
                <img src={pneab} alt="" id="nimg"/>
                <a href="https://eneabkup.github.io"><h3>Neab Waroon</h3></a>
                <h4 style={{marginBottom: '60px'}}>6110451398</h4>
              </div>
              <div className="col-sm-4" style={{textAlign:'center'}}>
                <img src={bell} alt="" id="bimg"/>
                <a href="https://bellweerin.github.io"><h3>Bell Weerin</h3></a>
                <h4 style={{marginBottom: '60px'}}>6110406228</h4>
        
              </div>
              <div className="col-sm-4 mem" style={{textAlign:'center'}}>
                <img src={fit} alt="" id="fimg"/>
                <Link to='/page1'><a><h3>Fit Phitchayatida</h3></a></Link>
                {/* <a href="./week1.html"><h3>Fit Phitchayatida</h3></a> */}
                <h4 style={{marginBottom: '60px'}}>6110406147</h4>
                {/* <h4></h4> */}
              </div>
            </div>
          </div>

        </header>
    </div>
  );
}

export default App;
