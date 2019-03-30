import React, {Component} from 'react';
import './premios.css';
import { Container, Row, Image, Button} from 'react-bootstrap';
import connie from '../img/connie.png';

class Premios extends Component{

    render(){
        return(
            <Container>
                <Row id="premios-inicio">¡Ganador de la semana!</Row>
                <Row id="parent"><div id="double-border"/><Image id="login-connie" src={connie} roundedCircle /></Row>
                <Row id="premios-connie">Connie</Row>
                <Row id="premios-punto">65 pts</Row>
                <br></br>
                <Row id="premios-elegir">Elige tu premio</Row>
                <br></br>
                <Row ><Button id="login-pelicula" variant="primary">Elegir una película</Button></Row>
                <br></br>
                <Row ><Button id="login-cenar" variant="primary">Decidir que cenamos</Button></Row>
                <br></br>
                <Row ><Button id="login-cocinar" variant="primary">Hoy no cocino</Button></Row>
                <br></br>
                <Row ><Button id="login-invitar" variant="primary">Hoy tú invitas</Button></Row>
                <br></br>

            </Container>
        )
    }
}

export default Premios;