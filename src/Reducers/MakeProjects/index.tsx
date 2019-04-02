import { Reducer } from 'redux'
import { ADD_FIELD, INCREMENT_FIELD, MODIFY_FIELD, MODIFY_DANGEROUS_FIELD } from '../../ActionsTypes/FacaProjetos';
import { set, get } from '../../abstract';
import { defaultState, State } from '../../Store';

export const makeProjects: Reducer<State> = ( state = defaultState, action )  => {
  switch (action.type) {
    case ADD_FIELD:
      return set( action.path + '.' + action.add.name, action.add.value, state ) || {}
    case INCREMENT_FIELD:
      let statePropValue = (get( action.path + '.' + action.add.name, state ) as Array<any> | undefined)
      if( statePropValue ){
        if( statePropValue.includes( action.add.value ) )
          return set( action.path + '.' + action.add.name, statePropValue.filter( e => e !== action.add.value ? e : undefined ), state )
        else
          return set( action.path + '.' + action.add.name, Array.of( ...statePropValue, action.add.value ), state )
      }else{
        return set( action.path + '.' + action.add.name, [action.add.value], state )
      }
    case MODIFY_DANGEROUS_FIELD:
      let statePropValueOther = (get( action.path + '.' + action.add.name, state ) as Array<any> | undefined)
      console.warn( action.method )
      if( statePropValueOther ){
        let statePropValue = Array.of( ...statePropValueOther )
        if( action.method === 'ADD' ){
          return set( action.path + '.' + action.add.name, [...statePropValue, action.add.value], state )
        }else if( action.method === 'REMOVE' ){
          return set( action.path + '.' + action.add.name, statePropValue.filter( ( e, index ) => index !== action.index ? e : undefined ), state )
        }else{
          let [ id, name ] = (action.index as string).split( '-', 2 )
          statePropValue[parseInt(id)] = {...statePropValue[parseInt(id)], [name]: action.add.value }
          return set( action.path + '.' + action.add.name, statePropValue, state )
        }
      }else{

      }
    default:
      return state
  }
}