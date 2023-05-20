import React from 'react';
import Title from './components/titulo';
import {NavBar} from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Title.css'

function App() {
  return (
    <div >
      <NavBar/>
      <div className='title-style'><Title/></div>
    </div>
  );
}

export default App;
