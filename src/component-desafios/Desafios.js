import React, {Component} from 'react';
import './desafios.css';
import { Container, Row, Button, Col, Image, Form} from 'react-bootstrap';
import Navbar from '../component-navbar/Navbar';


class Desafios extends Component{

    render(){
        return(
            <Container>
                <Row id="desafios-inicio">Logra nuevas habilidades<br></br>¡No tengas miedo!</Row>
                <Container id="container-video">
                
                    <Row id="desafios-form">
                        <Form.Group as={Col} controlId="formGridState" id="desafios-select">
                            <Form.Label id="desafios-textForm">Elige la categoría para recibir ayuda </Form.Label>
                            <Form.Control as="select">
                                <option>Quiero aprender ...</option>
                                <option>Gasfitería</option>
                                <option>Cocinar</option>
                                <option>Mecánica</option>
                                <option>Limpieza del Hogar</option>
                            </Form.Control>
                        </Form.Group>
                    </Row>
                    <Row id="desafios-sugerencia">Te sugerimos ...</Row>
                    <Row>
                        <iframe width="283" height="158" src="https://www.youtube.com/embed/dJV2CXRAnGw" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                        </iframe>
                    </Row>
                    <br></br>
                    <Row>
                        <iframe width="283" height="158" 
                                src="https://www.youtube.com/embed/SdixTKBXKqA" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                        </iframe>
                    </Row>
                    <br></br>
                    <Row>
                        <iframe width="283" height="158" 
                                src="https://www.youtube.com/embed/LkOeJut35KU" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                        </iframe>
                    </Row>
                    <br></br>
                    <Row>
                    <iframe width="283" height="158" 
                            src="https://www.youtube.com/embed/7Na9GyX37wc" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                    </iframe>
                    </Row>
                    <br></br>
                    <Row>
                        <iframe width="283" height="158" 
                                src="https://www.youtube.com/embed/Yr8XD0mZBe8" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                        </iframe>
                    </Row>
                    <br></br>
                </Container>
                <Navbar />
            </Container>

        )
    }
}

export default Desafios;