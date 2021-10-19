import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface NavigationLinkProps {
  text: string;
  to: string;
}

const NavigationLink: React.FC<NavigationLinkProps> = props => {
  return (
    <>
      <Nav.Link as={Link} to={props.to}>
        {props.text}
      </Nav.Link>
    </>
  );
};

export { NavigationLink };
