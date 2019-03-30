import React, {Component} from 'react';
import './navbar.css';
import { Container, Row, Button, Col, Image} from 'react-bootstrap';
import desafio from '../img/equipoGris.png';
import premio from '../img/premiosGris.png';
import tareas from '../img/tareasGris.png';

class Navbar extends Component{

    render(){
        return(
            <Container id="footer">
                <Row id="navbar-row">
                    <Col><Button id="button-desafio"><Image id="navbar-desafio" src={desafio} /></Button></Col>
                    <Col><Button id="button-premio"><Image id="navbar-premio" src={premio} /></Button></Col>
                    <Col><Button id="button-tareas"><Image id="navbar-tareas" src={tareas} /></Button></Col>
                </Row>
            </Container>
        )
    }
}

export default Navbar;
