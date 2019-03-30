import React, {Component} from 'react';
import './start.css';
import logo from '../img/logo.png';
import { Container, Row, Button} from 'react-bootstrap';

class Start extends Component{

    render(){
        return(
            <Container id="start">
                <Row id="start-logo"><img src={logo} id="app-logo"/></Row>
                <div id="start-button">
                    <Row id="start-login"><Button variant="primary">Inicia Sesión</Button></Row>
                    <Row id="start-team"><Button variant="secondary">Crear nuevo equipo</Button></Row>
                </div>
            </Container>

        )
    }
}

export default Start;