import React from 'react'
import '../../css/neab/page1.css';
import profile from '../../assets/pneab.jpg';
export default function page1() {
    return (
        <div> 
            <header class="header">
	            <div class="brand-box">
		            <span class="brand">Dev Camp</span>
	            </div>
	
	        <div class="text-box">
		        <h1 class="heading-primary">
			        <span class="heading-primary-main">Mr.Waroon Suppakit</span>
			        <span class="heading-primary-sub">My nickname is Neab</span>
                    <span class="heading-primary-sub">Strength : Patience</span>
                    <span class="heading-primary-sub">ID : 6110451398</span>
		        </h1>
		        <a href="#" class="btn btn-white btn-animated">WEEK1</a>
                <a href="#" class="btn btn-white btn-animated">WEEK2</a>
                <a href="#" class="btn btn-white btn-animated">WEEK3</a>
                <a href="#" class="btn btn-white btn-animated">WEEK4</a>
                <a href="#" class="btn btn-white btn-animated">WEEK5</a>
	        </div>
            </header>
        </div>
    )
}