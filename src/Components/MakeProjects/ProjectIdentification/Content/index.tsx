import React from 'react'
import { Switch, Route } from "react-router";
import { ProjectCharacterizationContainer } from "../ProjectCharacterization";
import { GeographicLocationContainer } from '../GeographicLocation';
import { EnvironmentalCharacterizationContainer } from '../EnvironmentalCharacterization';
import { ProjectSummaryContainer } from '../ProjectSummary';
import { ClarificationsContainer } from '../Clarifications';
import './index.styl'
export const ContentProjectIdentification = () => (
  <div className="content-of-project-identification">
    <Switch>
      <Route path='/make-projects/project-identification/project-charactrerization' exact={true} component={ProjectCharacterizationContainer} />
      <Route path='/make-projects/project-identification/geographic-location' exact={true} component={GeographicLocationContainer} />
      <Route path='/make-projects/project-identification/environmental-characterization' exact={true} component={EnvironmentalCharacterizationContainer} />
      <Route path='/make-projects/project-identification/project-summary' exact={true} component={ProjectSummaryContainer} />
      <Route path='/make-projects/project-identification/clarifications' exact={true} component={ClarificationsContainer} />
    </Switch>
  </div>
)