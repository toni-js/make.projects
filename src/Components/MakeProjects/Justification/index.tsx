import React from 'react'
import { State, Justification } from '../../../Store';
import { connect } from 'react-redux';
import { FieldEvent, addField } from '../../../Actions/FacaProjetos';

const JustificationComponent = ({ justificationForTheDevelopmentOfTheProject, addField }: Justification & { addField?: ()=>void }) => (
  <div>
    <h2>Justificativa</h2>
    <textarea name="justification-for-the-development-of-the-project" style={ { width: '100%', resize: 'none', height: '300px' } } value={justificationForTheDevelopmentOfTheProject} onChange={addField}></textarea>
  </div>
)

export const JustificationContainer = connect(
  (state: State) => ({
    justificationForTheDevelopmentOfTheProject: state.makeProjects.form.justification.justificationForTheDevelopmentOfTheProject
  }),
  dispatch => ({
    addField: ( event: FieldEvent ) => dispatch( addField( event.currentTarget.name, event.currentTarget.value, 'makeProjects.form.justification' ) )
  })
)(JustificationComponent)