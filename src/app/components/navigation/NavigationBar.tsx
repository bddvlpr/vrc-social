import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NavigationBar extends React.Component {
  render() {
    return (
      <>
        <Navbar bg='dark' variant='dark' sticky='top'>
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
          </Container>
        </Navbar>
      </>
    );
  }
}

export { NavigationBar };
