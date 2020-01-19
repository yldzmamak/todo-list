import React from 'react';
import { Switch, withRouter } from 'react-router-dom';

// Components
import { PrivateRoute } from '../components';

// Pages
import Home from './Home/Home';

import { withLayout } from '../hoc';

const Router = () => {
  return (
    <Switch>
      <PrivateRoute path="/" component={withLayout(Home)} exact />
    </Switch>
  );
};

export default withRouter(Router);
