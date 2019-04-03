import React from 'react'
import { connect } from 'react-redux';
import { listOfEcosystems, EnvironmentalCharacterization, State, listOfPhysiognomy, listOfHydrographicRegion } from '../../../../Store';
import { FieldEvent, incrementField, addField, ActionsList } from '../../../../Actions/FacaProjetos';

const EnvironmentalCharacterizationComponent = ( {incrementField, ecosystems, physiognomys, addField}:EnvironmentalCharacterization & ActionsList ) => (
  <div className='environmental-characterization'>
    <div className='row'>
      <div className='col-6'>
        <ul>
          {listOfEcosystems.map( eco =>(
            <li>
              <label>
                <input type="checkbox" name="ecosystems" key={eco} value={eco} onChange={incrementField} checked={ ecosystems ? ecosystems.includes( eco ) : false }/>{eco}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-6">
        <label>Adicionar Fisionomia
          <input style={{display: 'none'}}  type="button" value={'{ "ecosystem": "", "physiognomy": "" }'} data-json={true} name="physiognomys" onClick={incrementField}/>
        </label>
        <div>
          <ul>
            {physiognomys ? physiognomys.map( (physiognomy, index) => (
              <li>
                <label>
                  <select name={`physiognomys.${index}.ecosystem`} onChange={addField}>
                    {ecosystems ? ecosystems.map( ecosystem =>(
                      <option value={ecosystem} selected={physiognomy.ecosystem === ecosystem}>{ecosystem}</option>
                    )): null}
                  </select>
                </label>
                <label>
                  <select name={`physiognomys.${index}.physiognomy`} onChange={addField}>
                  {listOfPhysiognomy.map( physio => (
                    <option value={physio} selected={physiognomy.physiognomy === physio}>{physio}</option>
                  ))}
                  </select>
                </label>
                <label>
                  <input type="button" value='Remover' name="physiognomys-remove" onClick={addField}/>
                </label>
              </li>
            ) ) : null}
          </ul>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-6">
        <h2>Mapa</h2>
      </div>
      <div className="col-6">
        <h2>Regiões Hidrográficas</h2>
        <ul>
        {listOfHydrographicRegion.map( region => (
          <li>
            <label>
              <input type="checkbox" name="hydrographic-region" value={region} onChange={incrementField}/>{region}
            </label>
          </li>
        ) )}
        </ul>
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
    incrementField: ( event: FieldEvent ) => dispatch( incrementField( event.currentTarget.name, event.currentTarget.value, 'makeProjects.form.projectIdentification.environmentalCharacterization', event.currentTarget.dataset ) ),
    addField: ( event: FieldEvent ) => dispatch( addField( event.currentTarget.name, event.currentTarget.value, 'makeProjects.form.projectIdentification.environmentalCharacterization', event.currentTarget.dataset ) )
  }) 
)(EnvironmentalCharacterizationComponent)