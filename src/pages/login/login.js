import React from 'react'
import { Button, Card, Container, Row, Col, Form, Carousel, ButtonToolbar, Tabs, Tab, Sonnet, Table, FormControl, InputGroup, Modal } from 'react-bootstrap';
import './style.css';
//import { Link } from 'react-router-dom'
//import api from "../../services/api"
import image4 from './logo.png'
import VisitNight from './visitNight/visitNight';
import ForgetPassword from './forgetPassword/forgetPassword'


export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            controlEx: false,
            calendar: ['08:30-09:30', '09:30-10:30', '10:30-11:30', '14:30-15:30', '15:30-16:30', '16:30-17:30', '18:30-19:30', '19:30-20:30', '20:30-21:30']
        };

        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setControlEx = this.setControlEx.bind(this);

    }
    handleChangeEmail(event) {
        this.setState({ email: event.target.value });
    }
    handleChangePassword(event) {
        this.setState({ password: event.target.value });
    }

    async handleSubmit(event) {

    }

    /*componentDidMount(){
      this.loadTasks();
  } */
    setControlEx(event) {
        this.setState({ controlEx: true })
    }

    render() {
        return (<div id='initial'>

            {/*<Modal
                size="lg"
                show={this.state.controlEx}
                onHide={() => this.setState({ controlEx: false })}
                aria-labelledby="example-modal-sizes-title-lg">
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Exposições
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/*
                        <Carousel>
                            <Carousel.Item>
                                <Card>
                                    <Card.Header>Exposição 1</Card.Header>
                                    <Card.Body>
                                        <blockquote className="blockquote mb-0">
                                            <p>
                                                {' '}
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                                erat a ante.{' '}
                                            </p>
                                            <footer className="blockquote-footer">
                                                Someone famous in <cite title="Source Title">Source Title</cite>
                                            </footer>
                                        </blockquote>
                                    </Card.Body>
                                </Card>
                            </Carousel.Item>

                            <Carousel.Item>
                                <Card>
                                    <Card.Header>Exposição 2</Card.Header>
                                    <Card.Body>
                                        <blockquote className="blockquote mb-0">
                                            <p>
                                                {' '}
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                                erat a ante.{' '}
                                            </p>
                                            <footer className="blockquote-footer">
                                                Someone famous in <cite title="Source Title">Source Title</cite>
                                            </footer>
                                        </blockquote>
                                    </Card.Body>
                                </Card>
                            </Carousel.Item>
                        </Carousel>
                    }
                </Modal.Body>

                </Modal> */}

            <div id='form' onSubmit={this.handleSubmit} >
                <img id='image' src={image4} roundedCircle />
                <h1 id='title'>Login</h1>
                {/*<div id='icon'>*/}
                

                {/*</div>*/}
                <Form id='info'>
                    <Form.Label>Usuário</Form.Label>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                        </InputGroup.Prepend>

                        <FormControl
                            placeholder="Email"
                            aria-label="Usuário"
                            aria-describedby="basic-addon1"
                            value = {this.state.email}  onChange = {this.handleChangeEmail}
                        />
                    </InputGroup>
                    <Form.Label>Senha</Form.Label>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">#</InputGroup.Text>
                        </InputGroup.Prepend>

                        <FormControl
                            label='Senha'
                            placeholder="Senha"
                            aria-label="Senha"
                            aria-describedby="basic-addon1"
                            type = 'password'
                            value = {this.state.password}  onChange = {this.handleChangePassword}
                        />
                    </InputGroup>

                </Form>
                <div >

                    {/*<Link to = {`/user/:${this.state.id}`}>*/}
                    <Button id="entrar" variant="outline-success" type="submit" onClick = {this.handleSubmit}>
                        Entrar
                        </Button>
                    { /*</Link>*/}

                    {/*<Link to = {teste()}>*/}
                    <Button id="cadastrar" variant="outline-primary" type="submit">
                        Cadastre-se
                        </Button>
                    {/*</Link>*/}
                </div>
                {/* <a id='forget' href='#'>Esqueceu a senha?</a> */}
                <ForgetPassword/>
            </div>

            {/*<div id='leftside'>
                <div id='buttons'>
                    <VisitNight id = 'visit'/>
                    <Button id='exhibition' variant="primary" onClick={this.setControlEx}>Exposições</Button>
                </div>

                <div id='calendar'>
                    <p id='titleCalendar'>Horários disponíveis para visita</p>
                    <Table id='table' responsive striped>
                        <thead>
                            <tr className='linha1'>
                                <th></th>
                                <th>Segunda</th>
                                <th>Terça</th>
                                <th>Quarta</th>
                                <th>Quinta</th>
                                <th>Sexta</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.calendar.map(item => (
                                <tr>
                                    <td className='linha1' key={item.toString()}>{item}</td>
                                    <td>Disponível</td>
                                    <td>          </td>
                                    <td>Disponível</td>
                                    <td>          </td>
                                    <td>Disponível</td>

                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>*/}
        </div >);
    }
}

