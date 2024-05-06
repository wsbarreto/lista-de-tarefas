import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

// import { Redirect } from 'react-router';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Icone from '../assets/react.svg';
import Home from './Home';

export default function Login(){
    const container = {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingTop: '2', 
        paddingBottom: '2', 
        height: '40vh'
    };

    const divForm = {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    };

    const formCss = {
        width: '30%',
        color: '#7d83b9'
    };

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Aqui você faria a solicitação HTTP para o servidor para autenticar o usuário
        try {
            if (username === 'admin@admin' && password === 'admin') 
            {
                console.log('entrou no if');

                // Redirecionar para a página após o login bem-sucedido
                console.log('criou o objeto navigateTo');
                navigate('/home');
                console.log('xablau');
              } 
              else 
              {
                setError('Credenciais inválidas. Por favor, tente novamente.');
              }
            // // Exemplo de solicitação fictícia
            // const response = await fetch('/api/login', {
            //     method: 'POST',
            //     headers: {
            //     'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({ username, password }),
            // });

            // if (response.ok) {
            //     // Sucesso: redirecionar ou exibir mensagem de sucesso
            //     console.log('Login bem-sucedido!');
            // } else {
            //     // Erro: exibir mensagem de erro
            //     setError('Credenciais inválidas. Por favor, tente novamente.');
            // }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            setError('Ocorreu um erro ao fazer login. Por favor, tente novamente mais tarde.');
        }
    };
    
    return(
        <div>
            <div style={container}>
                <img src={Icone} alt="" width={300} />
            </div>
            <div style={divForm}>
                <Form style={formCss} onSubmit={handleSubmit}>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                            Email
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="email" placeholder="Email" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                            Password
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </Col>
                    </Form.Group>

                    {/* <fieldset>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label as="legend" column sm={2}>
                                Radios
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Check type="radio" label="first radio" name="formHorizontalRadios" id="formHorizontalRadios1" />
                                <Form.Check type="radio" label="second radio" name="formHorizontalRadios" id="formHorizontalRadios2" />
                                <Form.Check type="radio" label="third radio" name="formHorizontalRadios" id="formHorizontalRadios3" />
                            </Col>
                        </Form.Group>
                    </fieldset> */}

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Form.Check label="Remember me" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="submit">Sign in</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        </div>
    )};
