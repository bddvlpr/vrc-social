import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { NavigationBar } from './components/navigation/NavigationBar';
import { NotFoundPage } from './pages/system/NotFoundPage';
import { HomePage } from './pages/HomePage';

const App = () => {
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
        <Switch>
          <Route path='/' component={HomePage} exact />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export { App };
