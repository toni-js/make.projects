import React from 'react'
import { connect } from 'react-redux';
import { State, defaultState } from '../../Store';

const TitleMakeProjectsComponent = ( { title }: { title: string } ) => (
  <h1>{title}</h1>
)
export const TitleMakeProjectsContainer = connect( (state: State = defaultState) => {
  console.log( state )
  return ( {
    title: state.makeProjects.form.projectIdentification.projectCharacterization.title
  } )
} )( TitleMakeProjectsComponent )