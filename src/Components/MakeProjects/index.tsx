import React from 'react'
import { TitleMakeProjectsContainer } from './Title';
import { DashboardContainer } from './Dashboard';
import { ContainerMakeProjectsContainer } from './Container';
import './index.styl'
export const MakeProjectsComponent = () => (
  <div className="make-projects">
    <TitleMakeProjectsContainer />
    <DashboardContainer />
    <ContainerMakeProjectsContainer />
  </div>
)