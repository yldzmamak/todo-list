import React from 'react';
import { Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...otherProps }) => {
  return <Route {...otherProps} render={props => <Component {...props} />} />;
};

export default PrivateRoute;
