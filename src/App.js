import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import Page1 from './components/fit/home'
import Page2 from './components/fit/page1'
import './css/App.css';

function App() {
  return (
    <BrowserRouter>
      <Route exact path = "/" component = {Page1}/>
      <Route path="/page1" component = {Page2}/>
    </BrowserRouter>  
  );
}

export default App;