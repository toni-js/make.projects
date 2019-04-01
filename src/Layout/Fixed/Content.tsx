import React from 'react'
import { Switch, Route } from 'react-router';
import { Home } from '../../Components/Home';
import { MakeProjectsComponent } from '../../Components/MakeProjects';

export const Content = () => (
  <Switch>
    <Route path='/' exact={true} component={Home}></Route>
    <Route path='/make-projects' component={MakeProjectsComponent}></Route>
  </Switch>
)