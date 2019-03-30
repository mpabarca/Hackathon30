import React, {Component} from 'react';
import fire from '../components-firebase/Fire';
import { Link } from 'react-router-dom';
import './login.css';
import logo from '../img/logo.png';
import steven from '../img/steven.png';
import plus from '../img/plus.png';
import user from '../img/user.png';
import arroba from '../img/arroba.png';
import { Container, Col, Row, InputGroup, FormControl, Image, Button} from 'react-bootstrap';

class Login extends Component{

    render(){
        return(
            <div>
                    <Container>
                        <Row>
                        <Col xs={12} md={12} lg={12} className="img-login mt-5">
                        <img className="login-logo" src={logo}/>
                        <h4 className="text-center mt-4 partners">Partners</h4>
                        </Col>
                        </Row>
                        
                    </Container>
                    <Container>
                        <Row>
                        <Col xs={12} md={12} lg={12} className="img-login">
                        <div className="linea"></div>
                        <p className="perfil-txt mt-5">Crea tu perfil</p> 
                        <div className="parent"><div id="double-border"/><Image id="login-steven" src={steven} roundedCircle /></div>
                        <Image className="mt-5 mb-3" id="login-plus" src={plus} roundedCircle />
                       </Col>
                        </Row>
                   
                        <Row>
                            <Col xs={12} md={12} lg={12} className="img-login ">
                        <InputGroup className="mb-3 pl-4 pr-4">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1"><Image id="login-user" src={user} /></InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                            placeholder="Nombre"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            />
                             </InputGroup>
                             </Col>
                             <Col xs={12} md={12} lg={12} className="img-login">
                             <InputGroup className="mb-3 pl-4 pr-4">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1"><Image id="login-arroba" src={arroba} /></InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                            placeholder="Correo"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            />
                        </InputGroup>

                        <Link to="/todo"><Button className="btn-continue" id="login-create" variant="primary">Continuar</Button></Link>
                        </Col>
                        
                        </Row>
                    </Container>

                </div>

        )
    }
}

export default Login;