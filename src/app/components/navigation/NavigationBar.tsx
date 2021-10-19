import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../store/rootReducer';
import { NavigationLink } from './NavigationLink';

const NavigationBar = () => {
  const authSelector = useSelector((state: RootState) => state.authSlice);
  return (
    <>
      <Navbar bg='dark' variant='dark' sticky='top' className='mb-2'>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            <img
              alt='Logo'
              src='/logo512.png'
              width='32'
              height='32'
              className='d-inline-block align-top'
            />
            {' VRC Social'}
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className='justify-content-end'>
            <Nav>
              {authSelector.accessToken ? (
                <NavigationLink text='Logout' to='/logout' />
              ) : (
                <NavigationLink text='Login' to='/login' />
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export { NavigationBar };
