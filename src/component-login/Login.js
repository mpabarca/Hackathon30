import React, {Component} from 'react';
import fire from '../components-firebase/Fire';
import './login.css';
import logo from '../img/logo.png';
import steven from '../img/steven.png';
import plus from '../img/plus.png';
import user from '../img/user.png';
import arroba from '../img/arroba.png';
import { Container, Row, InputGroup, FormControl, Image, Button} from 'react-bootstrap';

class Login extends Component{

    render(){
        return(
            <div>
                    <Container>
                        <Row><img id="login-logo" src={logo}/></Row>
                        <Row><h4>Partners</h4></Row>
                    </Container>
                    <Container>
                        <Row><h4>Crea tu perfil</h4></Row>
                        <Row className="parent"><div id="double-border"/><Image id="login-steven" src={steven} roundedCircle /></Row>
                        <Row><Image id="login-plus" src={plus} roundedCircle /></Row>
                    </Container>
                    <Container>
                        <Row><InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1"><Image id="login-user" src={user} /></InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                            placeholder="Nombre"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            />
                        </InputGroup></Row>
                        <Row><InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1"><Image id="login-arroba" src={arroba} /></InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                            placeholder="Correo"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            />
                        </InputGroup></Row>
                        <Row ><Button id="login-create" variant="primary">Continuar</Button></Row>
                    </Container>

                </div>

        )
    }
}

export default Login;