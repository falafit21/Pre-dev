import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/page1.css';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import sq from '../../assets/sq.png';
export default function page1() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{backgroundColor: '#FFBF00'}}>
        <a className="navbar-brand" href="./page1">Pre-Dev</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="./page1.js">Week 1 <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Week 2</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Week 3</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Week 4</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Week 5</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Week 6</a>
            </li>
          </ul>
        </div>
      </nav>
      <header className="App-header">
      <div className="container">
         <div className="row">
            <div className="col-6">
                <div className="bg" style={{marginRight: '100px'}}><span style={{fontWeight: '1200',fontSize: '500px'}}>P</span>ROFILE</div>
                {/* <div className="bg1">ME</div> */}
            </div>
            <div classname="col-md-6">
                <div className="card " style={{marginTop: '150px',marginBottom: '150px'}}>
                    <div className="card-body">
                        <img src={sq} alt="" style={{height: '35%',width: '35%'}}/>
                        <br></br>
                      <h2 className="card-title" style={{textAlign: 'center'}}>Fit Phitchayatida</h2>
                      <h4 classname="card-subtitle mb-2 text-muted" style={{textAlign: 'center'}}>- 6110406147 -</h4>
                      <br></br>
                      
                      <h5 className="card-text" style={{textAlign: 'center'}}>Birth Date : 21.05.1999 </h5>
                      <h5 className="card-text" style={{textAlign: 'center'}}>Age : 20 yrs old </h5>
                      <h5 className="card-text" style={{textAlign: 'center'}}>Strength : Fairness & Patience </h5>
                        
                        <span><a href="http://falafit21/falafit21.github.io"id="icon" className="btn btn-social-icon btn-github btn-lg">
                            <span className="fa fa-github"></span>
                          </a></span>
                    </div>
                  </div>
            </div>
            
          </div>
          
      </div>
      </header>
        </div>
    )
}