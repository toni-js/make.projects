import { AnyAction, ActionCreator, Action } from "redux";
import { ADD_FIELD } from "../../ActionsTypes/FacaProjetos";
import { ChangeEvent } from "react";

export type FieldEvent = ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>

export interface AddFieldAction extends Action{
  path: string,
  add: {
    name: string,
    value: string | number
  }
}

export const addField: ActionCreator<AddFieldAction> = ( info: FieldEvent | string, value?: string , path?: string  ) =>{
  if( typeof info === 'string' ){
    let action = {
      type: ADD_FIELD,
      path: path || 'facaProjetos.form.trash',
      add: {
        name: info || 'trashable',
        value: value || 'trashable'
      }
    }
    return action
  }
  else {
    let action = {
      type: ADD_FIELD,
      path: info.currentTarget.dataset.path || 'facaProjetos.form.trash',
      add: {
        name: info.currentTarget.name || 'trashable',
        value: info.currentTarget.value || 'trashable'
      }
    }
    return action
  }
}