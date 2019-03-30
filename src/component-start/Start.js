import React, {Component} from 'react';
import './start.css';
import logo from '../img/logo.png';
import { Container, Col, Row, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Start extends Component{

    render(){
        return(
            <div id="start">
                <Container id="start-container">
                    <Row>
                        <Col xs={12} md={12} lg={12} className="img-start">
                        <img id="start-logo" src={logo}/>
                        <h1 className="text-center mt-4 partners">Partners</h1>
                        </Col>
               
                    <Col xs={12} md={12} lg={12} className="img-start"><h6 className="black">¡Comencemos por casa!</h6>
                    </Col>
                    </Row>

                    <Container id="start-button">
                        <Row >
                           <Col xs={12} md={12} lg={12} className="img-start">
                            <Link to="/Login">
                            <Button id="start-login" className="mb-3 mt-5" variant="primary">Inicia Sesión</Button>
                            </Link>

                            <Button id="start-team" variant="secondary">Crear nuevo equipo</Button>
                            </Col>
                            </Row>
                      
                    </Container>
                </Container>
            </div>

        )
    }
}

export default Start;