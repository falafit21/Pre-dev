import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/bell/page1.css';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import sq from '../../assets/cat2.jpg';
import Table from 'react-bootstrap/Table'
import Card from 'react-bootstrap/Card'
export default function page1() {
    return (
       <div> 
      <header className="App-head">
            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#9cedf8'}}>
                <a className="navbar-brand" href="#">PRE DEV CAMP</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="#">Week 1<span class="sr-only">(current)</span></a>
                        {/* <a className="nav-item nav-link" href="index.html">Week 2</a> */}
                        <a className="nav-item nav-link" href="#">Week 3</a>
                        <a className="nav-item nav-link" href="#">Week 4</a>
                        <a className="nav-item nav-link" href="#">Week 5</a>
                    </div>
                </div>
            </nav>
            <div className="container">
                <div className="card">
                    <div className="card-body">
                    <img src={sq} alt="" style={{height: '35%',width: '35%'}}/>
                        {/* <img width="250" height="250"
                            src="cat2.jpg"
                            alt=""> */}
                        <br/>
                        <br/>
                        <table>
                            <tr>
                                <th>Firstname : </th>
                                <td>Weerin</td>
                            </tr>
                            <tr>
                                <th>Lastname : </th>
                                <td>Neamnab</td>
                            </tr>
                            <tr>
                                <th>Nickname : </th>
                                <td>Bell</td>
                            </tr>
                            <tr>
                                <th>Age : </th>
                                <td>20</td>
                            </tr>
                            <tr>
                                <th>Student ID : </th>
                                <td>6110406228</td>
                            </tr>
                            <tr>
                                <th>Strengths : </th>
                                <td>Determined & Focused</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
      </header>
        </div>
    )
}