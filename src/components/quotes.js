import React from "react";
import "./Title.css"
import Button from 'react-bootstrap/Button';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Quotes(){


    return(

        <Container>
        <Row xs={1} sm={2} md={3} lg={4}>
          <Col>
            <Card text="light" style={{ width: '18rem', backgroundColor: '#3b212b' }}>
                <Card.Img variant="top" className="mb-2" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
          </Col>
          <Col>
          <Card text="light" style={{ width: '18rem', backgroundColor: '#372743'  }}>
                <Card.Img variant="top" className="mb-2" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
          </Col>
          <Col>
          <Card text="light" style={{ width: '18rem', backgroundColor: '#3f2a22'  }}>
                <Card.Img variant="top" className="mb-2" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </Container>    

        

    )
}

export default Quotes;