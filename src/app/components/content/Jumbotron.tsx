import React from 'react';

interface JumbotronProps {
  variant: 'light' | 'dark';
}

const Jumbotron: React.FC<JumbotronProps> = props => {
  return (
    <>
      <div className={`p-5 m-4 rounded-3 bg-${props.variant}`}>
        {props.children}
      </div>
    </>
  );
};

export { Jumbotron };
