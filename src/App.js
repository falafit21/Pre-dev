import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import Page1 from './components/fit/home'
import Page2 from './components/fit/page1'
import page3 from './components/bell/page1'

import neabIndex from './components/neab/index'
import neabWeek1 from './components/neab/week1'
import neabWeek2 from './components/neab/week2'
import neabWeek3 from './components/neab/week3'
import neabWeek4 from './components/neab/week4'
import neabWeek5 from './components/neab/week5'
import neabWeek6 from './components/neab/week6'

import './css/App.css';

function App() {
  return (
    <BrowserRouter>
      <Route exact path = "/" component = {Page1}/>
      <Route path="/fit/page1" component = {Page2}/>
      <Route path="/bell/page1" component = {page3}/>

      <Route path="/neab/index" component = {neabIndex}/>
      <Route path="/neab/week1" component = {neabWeek1}/>
      <Route path="/neab/week2" component = {neabWeek2}/>
      <Route path="/neab/week3" component = {neabWeek3}/>
      <Route path="/neab/week4" component = {neabWeek4}/>
      <Route path="/neab/week5" component = {neabWeek5}/>
      <Route path="/neab/week6" component = {neabWeek6}/>

    </BrowserRouter>  
  );
}

export default App;