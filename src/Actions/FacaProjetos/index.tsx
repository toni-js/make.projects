import { Action, AnyAction } from "redux";
import { ADD_FIELD, INCREMENT_FIELD } from "../../ActionsTypes/FacaProjetos";
import { ChangeEvent, MouseEvent } from "react";
import humps from 'humps'

export type FieldEvent = ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>

export interface AddFieldAction extends Action{path: string,add: {name: string,value: string}}

type options = 'true' | 'false'
type DefaultAction<T = AnyAction> = ( name: string, value: string, path: string, data: { json?: options } ) => T
export interface ActionsList {
  addField?: ( event: FieldEvent )=>void
  incrementField?: ( event: FieldEvent | MouseEvent<HTMLInputElement> )=>void
}
export const addField: DefaultAction<AddFieldAction> = ( name, value, path, { json } = { json: 'false' } ) => {
  let action = {
    type: ADD_FIELD,
    path: path || 'trash',
    add: {
      name: humps.camelize(name),
      value: json === 'true' ? JSON.parse( value ) : value
    }
  }
  return action
}

export const incrementField: DefaultAction<AddFieldAction> = ( name, value, path, { json } = { json: 'false' } ) => {
  let action = {
    type: INCREMENT_FIELD,
    path: path || 'trash',
    add: {
      name: humps.camelize(name),
      value: json === 'true' ? JSON.parse( value ) : value
    }
  }
  return action
}