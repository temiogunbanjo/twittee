import React from 'react';
import Header from '../layout/Header';
import DashboardMain from '../layout/DashboardMain';
//
import { Switch, Route } from 'react-router-dom';

const Dashboard = (props: any) => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/dashboard' component={DashboardMain} />
        <Route path='/dashboard/merchant' component={DashboardMain} />
        <Route path='/dashboard/buyers' component={DashboardMain} />
        <Route path='/dashboard/messages' component={DashboardMain} />
        <Route path='/dashboard/products' component={DashboardMain} />
      </Switch>
    </div>
  );
};

export default Dashboard;
