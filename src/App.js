import React from 'react';
import Title from './components/titulo';
import CardsProfile from './components/Cards';
import {NavBar} from './components/NavBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Title.css'

function App() {

  return (
    <div className='app' >
        <div className='bgr'>
          <NavBar/>
          <div className='cards'>

            <Row>
              <Col sm></Col>
              <Col sm><CardsProfile/></Col>
              <Col sm></Col>
            </Row>

          

          </div>
        </div>

    </div>
    
  );
}

export default App;
