import React from 'react'
import { TitleMakeProjectsContainer } from './Title';
import { DashboardContainer } from './Dashboard';
import { ContainerMakeProjectsContainer } from './Container';

export const MakeProjectsComponent = () => (
  <div>
    <TitleMakeProjectsContainer />
    <DashboardContainer />
    <ContainerMakeProjectsContainer />
  </div>
)