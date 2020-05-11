import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import Page1 from './components/fit/home'
import Page2 from './components/fit/page1'
import page3 from './components/bell/page1'
import page4 from './components/neab/page1'
import './css/App.css';

function App() {
  return (
    <BrowserRouter>
      <Route exact path = "/" component = {Page1}/>
      <Route path="/fit/page1" component = {Page2}/>
      <Route path="/bell/page1" component = {page3}/>
      <Route path="/neab/page1" component = {page4}/>
    </BrowserRouter>  
  );
}

export default App;