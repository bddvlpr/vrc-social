import React from 'react';
import { Button, Container, Image } from 'react-bootstrap';
import { Jumbotron } from '../components/content/Jumbotron';

const HomePage = () => {
  return (
    <>
      <Container className='text-center py-5'>
        <Jumbotron variant='light'>
          <Image src='/logo512.png' rounded width={128} height={128} />
          <h1>Welcome to VRC Social!</h1>
          <hr />
          <p>
            Don't know where to go? Use the quick navigation buttons below to
            start browsing!
          </p>
          <Button variant='outline-dark' className='m-2'>
            Friends
          </Button>
          <Button variant='outline-dark' className='m-2'>
            Avatars
          </Button>
          <Button variant='outline-dark' className='m-2'>
            Explore
          </Button>
        </Jumbotron>
      </Container>
    </>
  );
};

export { HomePage };
