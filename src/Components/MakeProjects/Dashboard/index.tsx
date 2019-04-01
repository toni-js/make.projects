import React from 'react'
import { TypeOfDemand, State } from "../../../Store";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const DashboardComponent = ( {typeOfDemand}:{typeOfDemand:TypeOfDemand} ) => (
  <div>
    <ul>
      <li>
        <Link to='/make-projects/project-identification'>Identificação do Projeto</Link>
      </li>
      <li>
        <Link to='/make-projects/project-coordination'>Coordenação do Projeto</Link>
      </li>
      <li>
        <Link to='/make-projects/presentation-of-the-institutions'>Apresentação das Instituições</Link>
      </li>
      <li>
        <Link to='/make-projects/diagnosis'>Diagnóstico</Link>
      </li>
      <li>
        <Link to='/make-projects/justification'>Justificativa</Link>
      </li>
      <li>
        <Link to='/make-projects/population-directly-involved'>População Diretamente Envolvida</Link>
      </li>
      <li>
        <Link to='/make-projects/planning-project'>Planejamenteo do Projeto</Link>
      </li>
      <li>
        <Link to='/make-projects/budget-planning'>Planejamento Orçamentário</Link>
      </li>
      <li>
        <Link to='/make-projects/additional-information'>Informação Adicional</Link>
      </li>
      {
        typeOfDemand === 'Induzida'
          ?
            <li>
              <Link to='/make-projects/call-notice'>Atendimento ao Edital</Link>
            </li>
          : null
      }
    </ul>
  </div>
)

export const DashboardContainer = connect( (state: State) => ({
  typeOfDemand: state.makeProjects.form.projectIdentification.projectCharacterization.typeOfDemand
}) )(DashboardComponent)