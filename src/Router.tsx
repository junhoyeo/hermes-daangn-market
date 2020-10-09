import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './screens/Home';

const publicRoutes = [
  {
    exact: true,
    path: '/',
    component: () => <Home />,
  },
];

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        {publicRoutes.map(({ exact, path, component, ...otherProps }) => (
          <Route
            key={`public-route-${path}`}
            exact={exact}
            path={path}
            component={component}
            {...otherProps}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
}
