import React from 'react'
import { Switch, Route } from "react-router";
import { ProjectCharacterizationContainer } from "../ProjectCharacterization";
import { GeographicLocationContainer } from '../GeographicLocation';
import { EnvironmentalCharacterizationContainer } from '../EnvironmentalCharacterization';

export const ContentProjectIdentification = () => (
  <div>
    <Switch>
      <Route path='/make-projects/project-identification/project-charactrerization' exact={true} component={ProjectCharacterizationContainer} />
      <Route path='/make-projects/project-identification/geographic-location' exact={true} component={GeographicLocationContainer} />
      <Route path='/make-projects/project-identification/environmental-characterization' exact={true} component={EnvironmentalCharacterizationContainer} />
    </Switch>
  </div>
)