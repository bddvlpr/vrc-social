import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Jumbotron } from '../components/content/Jumbotron';
import { logOut } from '../features/auth/authSlice';

const LogoutPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  function handleLogout() {
    dispatch(logOut());
    history.push('/');
  }

  return (
    <>
      <Helmet>
        <title>Logout</title>
      </Helmet>
      <Container className=' py-5'>
        <Jumbotron variant='light'>
          <h1>Logout</h1>
          <hr />
          <p>
            Are you sure you want to log out? Click the button below to confirm
            this action and return to the home screen.
          </p>
          <Button variant='dark' onClick={handleLogout}>
            Logout
          </Button>
        </Jumbotron>
      </Container>
    </>
  );
};

export { LogoutPage };
