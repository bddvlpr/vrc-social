import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { NavigationBar } from './components/navigation/NavigationBar';

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Helmet
            titleTemplate='%s - VRChat Social'
            defaultTitle='VRChat Social'
            htmlAttributes={{ lang: 'en' }}
          >
            <meta
              name='description'
              content='A VRChat social manager made by the community, for the community.'
            />
          </Helmet>

          <NavigationBar />
          <Switch>{/* Handle routing */}</Switch>
        </BrowserRouter>
      </>
    );
  }
}

export { App };
