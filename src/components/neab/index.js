import React from 'react'
import '../../css/neab/week1.css';
import { Link } from 'react-router-dom';
export default function index() {
    return (
        <div> 
            <header class="header">
	            <div class="brand-box">
		            <Link to="/" ><span class="brand">Dev Camp</span></Link>
	            </div>
	        <div class="text-box">
		        <h1 class="heading-primary">
                    <span class="heading-primary-main">PRE DEV CAMP</span>
			        <span class="heading-primary-sub">2020</span>
		        </h1>
                <a href="/neab/week1" class="btn btn-white btn-animated">WEEK1</a>
                <a href="/neab/week2" class="btn btn-white btn-animated">WEEK2</a>
                <a href="/neab/week3" class="btn btn-white btn-animated">WEEK3</a>
                <a href="/neab/week4" class="btn btn-white btn-animated">WEEK4</a>
                <a href="/neab/week5" class="btn btn-white btn-animated">WEEK5</a>
	        </div>
            </header>
        </div>
    )
}