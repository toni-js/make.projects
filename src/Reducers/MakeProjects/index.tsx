import { Reducer } from 'redux'
import { ADD_FIELD } from '../../ActionsTypes/FacaProjetos';
import { set } from '../../abstract';
import { defaultState, State } from '../../Store';

// @ts-ignore
export const makeProjects: Reducer<State> = ( state = defaultState, action )  => {
  switch (action.type) {
    case ADD_FIELD:
      return set( action.path + '.' + action.add.name, action.add.value, state ) || {}
    default:
      return state
  }
}