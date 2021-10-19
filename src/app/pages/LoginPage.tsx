import React, { useState } from 'react';
import { Button, Container, FloatingLabel, Form } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { ReturnIfAuthenticated } from '../components/auth/ReturnIfAuthenticated';
import { Jumbotron } from '../components/content/Jumbotron';

const LoginPage = () => {
  const [username, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(username + ' ' + password);
  };

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <ReturnIfAuthenticated />
      <Container className=' py-5'>
        <Jumbotron variant='light'>
          <h1>Login</h1>
          <hr />
          <Form onSubmit={handleLogin}>
            <FloatingLabel
              controlId='emailInput'
              label='Email address'
              className='mb-3'
            >
              <Form.Control
                type='email'
                placeholder='name@domain.com'
                onChange={e => setEmail(e.target.value)}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId='passwordInput'
              label='Password'
              className='mb-3'
            >
              <Form.Control
                type='password'
                placeholder='Password'
                onChange={e => setPassword(e.target.value)}
              />
            </FloatingLabel>
            <Button variant='dark' type='submit'>
              Submit
            </Button>
          </Form>
        </Jumbotron>
      </Container>
    </>
  );
};

export { LoginPage };
