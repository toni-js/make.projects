import React from 'react'
import { connect } from "react-redux";
import { Route, Switch } from "react-router";
import { ProjectIdentification } from './ProjectIdentification';

const ContainerMakeProjectsComponent = () => (
  <div className='container-make-projects'>
    <Switch>
      <Route path='/make-projects/project-identification' component={ProjectIdentification}/>
      <Route path='/make-projects'/>
    </Switch>
  </div>
)

export const ContainerMakeProjectsContainer = connect()(ContainerMakeProjectsComponent)