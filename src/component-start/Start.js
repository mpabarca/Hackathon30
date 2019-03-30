import React, {Component} from 'react';
import './start.css';
import logo from '../img/logo.png';
import { Container, Row, Button} from 'react-bootstrap';

class Start extends Component{

    render(){
        return(
            <div id="start">
                <Container id="start-container">
                    <Row ><img id="start-logo" src={logo}/></Row>
                    <Row><h3>Partners</h3></Row>
                    <Row><h6>¡Seamos un equipo!</h6></Row>
                    <Container id="start-button">
                        <Row ><Button id="start-login" variant="primary">Inicia Sesión</Button></Row>
                        <Row ><Button id="start-team" variant="secondary">Crear nuevo equipo</Button></Row>
                    </Container>
                </Container>
            </div>

        )
    }
}

export default Start;