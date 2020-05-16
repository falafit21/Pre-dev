import React from 'react'
import '../../css/neab/mainStyle.css';
import profile from '../../assets/pneab.jpg';
import { Link } from 'react-router-dom';

export default function index() {
    return (
        <div> 
            <header class="header">
	            <div class="brand-box">
		            <Link to="/neab/index" ><span class="brand">Home</span></Link>
	            </div>
	        <div class="text-box">
                <h1 class="heading-primary">
			        <span class="heading-primary-main">profile</span>
		        </h1>
                <h1>
                    <img src={profile} alt="" style={{height: '35%',width: '35%'}}/>
                </h1>
		        <h1 class="heading-primary">
			        <span class="heading-primary-main">Mr.Waroon Suppakit</span>
			        <span class="heading-primary-sub">My nickname is Neab</span>
                    <span class="heading-primary-sub">Strength : Patience</span>
                    <span class="heading-primary-sub">ID : 6110451398</span>
		        </h1>
                <a href="/neab/week1" class="btn btn-white btn-animated">WEEK1</a>
                <a href="/neab/week2" class="btn btn-white btn-animated">WEEK2</a>
                <a href="/neab/week3" class="btn btn-white btn-animated">WEEK3</a>
                <a href="/neab/week4" class="btn btn-white btn-animated">WEEK4</a>
                <a href="/neab/week5" class="btn btn-white btn-animated">WEEK5</a>
                <a href="/neab/week6" class="btn btn-white btn-animated">WEEK6</a>
	        </div>
            </header>
        </div>
    )
}