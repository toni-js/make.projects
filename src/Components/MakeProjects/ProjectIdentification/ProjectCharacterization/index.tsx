import React from 'react'
import { connect } from 'react-redux';
import { TypeOfDemand, TypeOfProject, CoreTheme, State } from '../../../../Store';
import { FieldEvent, addField } from '../../../../Actions/FacaProjetos'
const ProjectCharacterizationComponent = ( {title, typeOfDemand,typeOfProject,coreTheme,projectNumber,path,addField}: { title: string, typeOfDemand: TypeOfDemand, typeOfProject: TypeOfProject, coreTheme: CoreTheme, projectNumber: string, path: string, addField: ( event: FieldEvent ) => void } ) => (
  <div>
    <div>
      <input type="text" name="title" value={title} onChange={addField} data-path={path}/>
    </div>
  </div>
)

export const ProjectCharacterizationContainer = connect( (state: State)=>({
  title: state.makeProjects.form.projectIdentification.projectCharacterization.title,
  typeOfDemand: state.makeProjects.form.projectIdentification.projectCharacterization.typeOfDemand,
  typeOfProject: state.makeProjects.form.projectIdentification.projectCharacterization.typeOfProject,
  coreTheme: state.makeProjects.form.projectIdentification.projectCharacterization.coreTheme,
  projectNumber: state.makeProjects.form.projectIdentification.projectCharacterization.projectNumber,
  path: 'makeProjects.form.projectIdentification.projectCharacterization'
}), (dispatch) => ({
  addField: ( event: FieldEvent ) => dispatch( addField( event ) )
}) )(ProjectCharacterizationComponent)