import React, { ChangeEvent } from 'react'
import { State, GeographicLocation, listOfEnvironments, mapDetailsToEnvironments, TypesOfEnvironments, federationUnitysCompletes, mapCountiesToFedetalUnitysComplete, FederationUnityComplete } from '../../../../Store';
import { connect } from 'react-redux';
import { FieldEvent, incrementField, addField, ActionsList } from '../../../../Actions/FacaProjetos';
import { BrasilMapContainerForGraphicLocationContainer } from './BrasilMapContainerForGraphicLocation';
const GeographicLocationComponent = ({ typesOfEnvironments, details, incrementField, federationUnity, counties, filter, addField, places, geographicalCoordinates }: GeographicLocation & ActionsList ) => (
  <div className='grographic-location'>
    <h2>Ambiente de Atuação</h2>
    <div className='row'>
      <div className="col-6">
        <h2>Tipos de ambientes</h2>
        <ul>
          {listOfEnvironments.map(env => (
            <li>
              <label>
                <input type="checkbox" key={env} value={env} name="types-of-environments" checked={typesOfEnvironments ? typesOfEnvironments.includes(env) : false} onChange={incrementField} />{env}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-6">
        <h2>Detalhamento</h2>
        <ul>
          {(typesOfEnvironments as TypesOfEnvironments).map(e =>
            mapDetailsToEnvironments[e].map(env => (
              <li>
                <label>
                  <input type="checkbox" key={env} value={env} name="details" checked={details ? details.includes(env) : false} onChange={incrementField} />{env}
                </label>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
    <h2>Localização</h2>
    <div className="row">
      <div className="col-4">
        <BrasilMapContainerForGraphicLocationContainer />
      </div>
      <div className="col-4">
        <h2>UF</h2>
        <ul>
          {federationUnitysCompletes.map(uf => (
            <li>
              <label>
                <input type="checkbox" name="federation-unity" value={uf} key={uf} onChange={incrementField} />{uf}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-4">
        <h2>Municípios</h2>
        <label>
          Filtrar<input type="text" name="filter" value={filter} onChange={addField}/>
        </label>
        <ul>
          {filter 
            ?(federationUnity as Array<FederationUnityComplete>).map(uf => mapCountiesToFedetalUnitysComplete[uf].filter(county => {
              if( new RegExp( filter ).test( county ) )
                return (
                  <li>
                    <label>
                      <input type="checkbox" name="counties" key={county} onChange={incrementField} checked={counties ? counties.includes(county) : false} />{county}
                    </label>
                  </li>
                )
            }))
            :(federationUnity as Array<FederationUnityComplete>).map(uf => mapCountiesToFedetalUnitysComplete[uf].map(county => (
              <li>
                <label>
                  <input type="checkbox" name="counties" key={county} onChange={incrementField} checked={counties ? counties.includes(county) : false} />{county}
                </label>
              </li>
            )))}
        </ul>
        <label>
          Localidades:
          <input type="text" name="places" value={places} onChange={addField}/>
        </label>
        <label>
          Coordenadas Geográficas:
          <input type="text" name="geographical-coordinates" value={geographicalCoordinates} onChange={addField}/>
        </label>
      </div>
    </div>
  </div>
)

export const GeographicLocationContainer = connect(
  (state: State) => ({
    typesOfEnvironments: state.makeProjects.form.projectIdentification.geographicLocation.typesOfEnvironments || [],
    details: state.makeProjects.form.projectIdentification.geographicLocation.details || [],
    federationUnity: state.makeProjects.form.projectIdentification.geographicLocation.federationUnity || [],
    counties: state.makeProjects.form.projectIdentification.geographicLocation.counties || [],
    filter: state.makeProjects.form.projectIdentification.geographicLocation.filter || '',
    places: state.makeProjects.form.projectIdentification.geographicLocation.places || '',
    geographicalCoordinates: state.makeProjects.form.projectIdentification.geographicLocation.geographicalCoordinates || ''
  }),
  dispatch => ({
    incrementField: (event: FieldEvent) => dispatch(incrementField(event.currentTarget.name, event.currentTarget.value, 'makeProjects.form.projectIdentification.geographicLocation')),
    addField: (event: FieldEvent) => dispatch(addField(event.currentTarget.name, event.currentTarget.value, 'makeProjects.form.projectIdentification.geographicLocation')),
  })
)(GeographicLocationComponent)