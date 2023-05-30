import React from "react";
import "./Title.css"
import Button from 'react-bootstrap/Button';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import avatarImage from './images/avatar.png';
import avatarImage2 from './images/avatar2.jpg';


function CardsProfile() {
  return (

    <Container className="cardsc">
        <TransitionGroup>
            <CSSTransition
            classNames="card-transition"
            timeout={100}
            >   
                <Row >
                    <Col>
                        <Card className="cardJ" style={{ width: '24rem' }}>
                            <Card.Img variant="top" src={avatarImage}  className="profile"/>
                            <Card.Body>
                                <Card.Title>Juan</Card.Title>
                                <Card.Text>
                                    Ingeniero en sistemas. <br></br><br></br>
                                    Breve descripcion de tu persona
                                </Card.Text>
                                
                                <Button variant="primary">Breve descripcion de tu persona jejeje</Button>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Trabajo/Proyecto</ListGroup.Item>
                                <ListGroup.Item>Trabajo/Proyecto</ListGroup.Item>
                                <ListGroup.Item>Trabajo/Proyecto</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="cardA"  style={{ width: '24rem' }}>
                            <Card.Img variant="top" src={avatarImage2}  className="profile"/>
                            <Card.Body>
                                <Card.Title>Anderson</Card.Title>
                                <Card.Text>
                                    Estadistico
                                </Card.Text>
                                <Button variant="primary">Proyectos</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </CSSTransition>
        </TransitionGroup>  
    </Container>
    
  );
}

export default CardsProfile;