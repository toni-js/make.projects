import React from 'react'
import { ProjectSummary, State } from '../../../../Store';
import { addField, FieldEvent } from '../../../../Actions/FacaProjetos';
import { connect } from 'react-redux';

const ProjectSummaryComponent = ( { projectSummary, addField }: ProjectSummary & { addField?: () => void } ) => (
  <div className='project-summary'>
    <h2>Resumo do Projeto</h2>
    <textarea style={ { width: '100%', resize: 'none', height: '300px' } } name="project-summary" value={projectSummary} onChange={addField}></textarea>
  </div>
)
export const ProjectSummaryContainer = connect(
  (state: State) => ({
    projectSummary: state.makeProjects.form.projectIdentification.projectSummary.projectSummary || ''
  }),
  dispatch => ({
    addField: ( event: FieldEvent ) => dispatch( addField( event.currentTarget.name, event.currentTarget.value, 'makeProjects.form.projectIdentification.projectSummary' ) )
  })
)(ProjectSummaryComponent)