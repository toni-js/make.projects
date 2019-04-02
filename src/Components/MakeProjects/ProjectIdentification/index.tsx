import React from 'react'
import { DashboardProjectIdentificationComponent } from './Dashboard';
import { ContentProjectIdentification } from './Content';

export const ProjectIdentification = () => (
  <div className="project-identification">
    <DashboardProjectIdentificationComponent />
    <ContentProjectIdentification />
  </div>
)