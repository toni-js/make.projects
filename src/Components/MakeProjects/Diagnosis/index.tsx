import React from 'react'
import { Diagnosis, State } from '../../../Store';
import { connect } from 'react-redux';
import { FieldEvent, addField } from '../../../Actions/FacaProjetos';

const DiagnosisComponent = ({ diagnosis, addField }: Diagnosis & { addField?: ()=>void }) => (
  <div>
    <h2>Diagnostico</h2>
    <textarea name="diagnosis" style={ { width: '100%', resize: 'none', height: '300px' } } onChange={addField}></textarea>
  </div>
)

export const DiagnosisContainer = connect(
  (state: State) => ({
    diagnosis: state.makeProjects.form.diagnosis.diagnosis || ''
  }),
  dispatch => ({
    addField: ( event: FieldEvent ) => dispatch( addField( event.currentTarget.name, event.currentTarget.value, 'makeProjects.form.diagnosis' ) )
  })
)(DiagnosisComponent)