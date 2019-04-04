import React from 'react'
import { connect } from 'react-redux';
import { State, defaultState } from '../../Store';

const TitleMakeProjectsComponent = ( { title }: { title?: string } ) => (
  <div className="title-project">
    <h1>{title ? `Título do Projeto: ${title}` : 'Projeto sem Título'}</h1>
  </div>
)
export const TitleMakeProjectsContainer = connect( (state: State = defaultState) => {
  console.log( state )
  return ( {
    title: state.makeProjects.form.projectIdentification.projectCharacterization.title
  } )
} )( TitleMakeProjectsComponent )