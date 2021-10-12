import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

class NotFoundPage extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Page not found!</title>
        </Helmet>
        <Container>
          <h1>Page not found!</h1>
          <p>
            You can try returning to the homepage or reporting this issue on the
            GitHub page.
          </p>
          <Link to='/'>
            <Button variant='outline-dark'>Go back</Button>
          </Link>
        </Container>
      </>
    );
  }
}

export { NotFoundPage };
