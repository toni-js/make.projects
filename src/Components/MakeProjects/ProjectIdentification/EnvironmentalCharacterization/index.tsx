import React from 'react'
import { connect } from 'react-redux';
import { listOfEcosystems, EnvironmentalCharacterization, State, listOfPhysiognomy } from '../../../../Store';
import { FieldEvent, incrementField, modifyDangerousField } from '../../../../Actions/FacaProjetos';

const EnvironmentalCharacterizationComponent = ( { incrementField, ecosystems, physiognomys, modifyDangerousField}:EnvironmentalCharacterization & { incrementField?: () => void, modifyDangerousField?: () => void } ) => (
  <div className='environmental-characterization'>
    <div className='row'>
      <div className='col-6'>
        <ul>
          {listOfEcosystems.map( eco =>(
            <li>
              <label>
                <input type="checkbox" name="ecosystems" key={eco} value={eco} onChange={incrementField} checked={ ecosystems ? ecosystems.includes( eco ) : false }/>
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-6">
        <label>Adicionar Fisionomia
          <input type="button" value={'{ "ecosystem": "", "physiognomy": "" }'} name="physiognomys" onClick={incrementField}/>
        </label>
        <div>
          <ul>
            {physiognomys ? physiognomys.map( (physiognomy, index) => (
              <li>
                <label>
                  <select name="physiognomys-modify" id={index.toString() + '-ecosystem'} onChange={modifyDangerousField}>
                  {ecosystems ? ecosystems.map( ecosystem =>(
                    <option value={ecosystem} selected={physiognomy.ecosystem === ecosystem}>{ecosystem}</option>
                  )): null}
                  </select>
                </label>
                <label>
                  <select name="physiognomys-modify" id={index.toString() + '-physiognomy'} onChange={modifyDangerousField}>
                  {listOfPhysiognomy.map( physio => (
                    <option value={physio} selected={physiognomy.physiognomy === physio}>{physio}</option>
                  ))}
                  </select>
                </label>
                <label>
                  <input type="button" value='Remover' name="physiognomys-remove" id={index.toString()} onClick={modifyDangerousField}/>
                </label>
              </li>
            ) ) : null}
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export const EnvironmentalCharacterizationContainer = connect( 
  (state: State) => ({
  ecosystems: state.makeProjects.form.projectIdentification.environmentalCharacterization.ecosystems || [],
  physiognomys: state.makeProjects.form.projectIdentification.environmentalCharacterization.physiognomys || []
  }),
  dispatch => ({
    incrementField: ( event: FieldEvent ) => dispatch( incrementField( event.currentTarget.name, event.currentTarget.value, 'makeProjects.form.projectIdentification.environmentalCharacterization' ) ),
    modifyDangerousField: ( event: FieldEvent ) => {
      const reallyAction = event.target.name.split( /-/gi )
      dispatch( modifyDangerousField( reallyAction[0], event.target.id ? event.target.value : JSON.parse(event.target.value), 'makeProjects.form.projectIdentification.environmentalCharacterization', (reallyAction[1].toUpperCase() as 'ADD' | 'REMOVE' | 'MODIFY'), event.currentTarget.id ) )
    },
  }) 
)(EnvironmentalCharacterizationComponent)