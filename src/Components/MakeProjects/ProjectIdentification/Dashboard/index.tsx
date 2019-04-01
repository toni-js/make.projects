import React from 'react'
import { Switch, Route } from "react-router";
import { ProjectCharacterizationComponent } from '../ProjectCharacterization';

export const DashboardComponent = () => (
  <Switch>
    <Route path='/make-projects/project-identification/project-charactrerization' component={ProjectCharacterizationComponent} />
  </Switch>
)