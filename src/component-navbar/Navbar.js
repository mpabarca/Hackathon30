import React, {Component} from 'react';
import './navbar.css';
import { Container, Row, Button, Col, Image} from 'react-bootstrap';
import desafio from '../img/equipoGris.png';
import premio from '../img/premiosGris.png';
import tareas from '../img/tareasGris.png';
import { Link } from 'react-router-dom';

class Navbar extends Component{

    render(){
        return(
            <Container id="footer">
                <Row>
                    <Col className="box-img">
                    <Link to="/desafios"><Button id="button-desafio"><Image id="navbar-desafio" src={desafio} /><p className="txt-btn">Desafio</p></Button></Link>

                    <Link to="/todo"><Button id="button-tareas"><Image id="navbar-tareas" src={tareas} /><p className="txt-btn">Tareas</p></Button></Link>
                    
                    <Link to="/premios"><Button id="button-premio"><Image id="navbar-premio" src={premio} /><p className="txt-btn">Premios</p></Button></Link>
                    
                   
                    
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Navbar;
