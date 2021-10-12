import React from 'react';

interface JumbotronProps {
  variant: 'light' | 'dark';
}

class Jumbotron extends React.Component<JumbotronProps> {
  render() {
    return (
      <>
        <div className={`p-5 m-4 rounded-3 bg-${this.props.variant}`}>
          {this.props.children}
        </div>
      </>
    );
  }
}

export { Jumbotron };
