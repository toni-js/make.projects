import React from 'react'
import { connect } from "react-redux";
import { Route, Switch } from "react-router";
import { ProjectCharacterizationContainer } from './ProjectIdentification/ProjectCharacterization';

const ContainerMakeProjectsComponent = () => (
  <Switch>
    <Route path='/make-projects/project-identification' component={ProjectCharacterizationContainer}></Route>
    <Route path='/make-projects/'></Route>
    {/** <Route path='/make-projects/'></Route>
    <Route path='/make-projects/'></Route>
    <Route path='/make-projects/'></Route>
    <Route path='/make-projects/'></Route>
    <Route path='/make-projects/'></Route>
    <Route path='/make-projects/'></Route>
    <Route path='/make-projects/'></Route>
    <Route path='/make-projects/'></Route>
    <Route path='/make-projects/'></Route>
    <Route path='/make-projects/'></Route>
    <Route path='/make-projects/'></Route>
    <Route path='/make-projects/'></Route>
    <Route path='/make-projects/'></Route>
    <Route path='/make-projects/'></Route>
    <Route path='/make-projects/'></Route>
    <Route path='/make-projects/'></Route>
    <Route path='/make-projects/'></Route>
    <Route path='/make-projects/'></Route>*/}
  </Switch>
)

export const ContainerMakeProjectsContainer = connect()(ContainerMakeProjectsComponent)