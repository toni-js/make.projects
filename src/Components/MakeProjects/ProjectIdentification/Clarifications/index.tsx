import React from 'react'
import { ProjectClarifications, State } from '../../../../Store';
import { connect } from 'react-redux';
import { FieldEvent, addField, ActionsList } from '../../../../Actions/FacaProjetos';

const ClarificationsComponent = ({ clarificationsOfTheInstitution, addField }: ProjectClarifications & ActionsList) => (
  <div className='clarifications'>
    <h2>Esclarecimentos</h2>
    <textarea style={ { width: '100%', resize: 'none', height: '300px' } } name="clarifications-of-the-institution" value={clarificationsOfTheInstitution} onChange={addField}></textarea>
  </div>
)

export const ClarificationsContainer = connect(
  (state: State) => ({
    clarificationsOfTheInstitution: state.makeProjects.form.projectIdentification.clarifications.clarificationsOfTheInstitution || ''
  }),
  dispatch => ({
    addField: ( event: FieldEvent ) => dispatch( addField( event.currentTarget.name, event.currentTarget.value, 'makeProjects.form.projectIdentification.clarifications' ) )
  })
)(ClarificationsComponent)