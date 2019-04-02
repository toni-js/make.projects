import React from 'react'
import { connect } from 'react-redux';
import { TypeOfDemand, TypeOfProject, CoreTheme, State } from '../../../../Store';
import { FieldEvent, addField } from '../../../../Actions/FacaProjetos'

const ProjectCharacterizationComponent = ( {title, typeOfDemand,typeOfProject,coreTheme,projectNumber,addField}: { title?: string, typeOfDemand?: TypeOfDemand, typeOfProject?: TypeOfProject, coreTheme?: CoreTheme, projectNumber?: string, addField: ( event: FieldEvent ) => void } ) => (
  <div className='project-characterization'>
    <div className="row">
      <div className="col-12">
        <label>Título: 
          <input type="text" name="title" value={title} onChange={addField} />
        </label>
      </div>
    </div>
    <div className="row">
      <div className="col-6">
        <label>
          <input type="radio" name="type-of-demand" value="Induzida" onChange={addField} checked={typeOfDemand === 'Induzida'}/>Induzida
        </label>
      </div>
      <div className="col-6">
        <label>
          <input type="radio" name="type-of-demand" value="Espontânea" onChange={addField} checked={typeOfDemand === 'Espontânea'}/>Espontânea
        </label>
        {typeOfDemand === 'Espontânea' ?
        <label> Núcleo Temático
          <select name="core-theme" onChange={addField}>
            <option value="Gestão Pesqueira Compartilhada" selected={ coreTheme === 'Gestão Pesqueira Compartilhada' }>Gestão Pesqueira Compartilhada</option>
            <option value="Manejo e Conservação da Biodiversidade" selected={ coreTheme === 'Manejo e Conservação da Biodiversidade'}>Manejo e Conservação da Biodiversidade</option>
            <option value="Planejamento e Gestão Territorial" selected={ coreTheme === 'Planejamento e Gestão Territorial'}>Planejamento e Gestão Territorial</option>
            <option value="Qualidade Ambiental" selected={ coreTheme === 'Qualidade Ambiental'}>Qualidade Ambiental</option>
            <option value="Sociedades Sustentáveis" selected={ coreTheme === 'Sociedades Sustentáveis'}>Sociedades Sustentáveis</option>
            <option value="Água e Floresta" selected={ coreTheme === 'Água e Floresta'}>Água e Floresta</option>
          </select>
        </label> 
        : null}
      </div>
    </div>
    <div className="row">
      <div className="col-6">
        <label>
          <input type="radio" name="type-of-project" value="Novo" onChange={addField} checked={ typeOfProject === 'Novo'}/>Novo
        </label>
      </div>
      <div className="col-6">
        <label>
          <input type="radio" name="type-of-project" value="Complementação de projeto solicitada pelo FNMA" onChange={addField} checked={ typeOfProject === 'Complementação de projeto solicitada pelo FNMA'}/>Complementação de projeto solicitada pelo FNMA
        </label>
        {typeOfProject === 'Complementação de projeto solicitada pelo FNMA'
        ? <label>
            <input type="text" name="project-number" value={projectNumber} onChange={addField}/>
          </label>
        : null}
      </div>
    </div>
  </div>
)

export const ProjectCharacterizationContainer = connect( (state: State)=>({
  title: state.makeProjects.form.projectIdentification.projectCharacterization.title,
  typeOfDemand: state.makeProjects.form.projectIdentification.projectCharacterization.typeOfDemand,
  typeOfProject: state.makeProjects.form.projectIdentification.projectCharacterization.typeOfProject,
  coreTheme: state.makeProjects.form.projectIdentification.projectCharacterization.coreTheme,
  projectNumber: state.makeProjects.form.projectIdentification.projectCharacterization.projectNumber
}), (dispatch) => ({
  addField: ( event: FieldEvent ) => dispatch( addField( event.currentTarget.name, event.currentTarget.value, 'makeProjects.form.projectIdentification.projectCharacterization' ) )
}) )(ProjectCharacterizationComponent)