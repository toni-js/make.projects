import React from 'react'
import { Link } from 'react-router-dom';

export const DashboardProjectIdentificationComponent = () => (
  <div className='dashboard-project-identification'>
    <ul>
      <li>
        <Link to='/make-projects/project-identification/project-charactrerization'>Caracterização do projeto</Link>
      </li>
      <li>
        <Link to='/make-projects/project-identification/geographic-location'>Localização Geográfica</Link>
      </li>
      <li>
        <Link to='/make-projects/project-identification/environmental-characterization'>Caracterização Ambiental</Link>
      </li>
      <li>
        <Link to='/make-projects/project-identification/project-summary'>Resumo do Projeto</Link>
      </li>
      <li>
        <Link to='/make-projects/project-identification/clarifications'>Esclarecimentos</Link>
      </li>
    </ul>
  </div>
)