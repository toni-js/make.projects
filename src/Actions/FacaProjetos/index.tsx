import { ActionCreator, Action, ActionCreatorsMapObject, AnyAction } from "redux";
import { ADD_FIELD, INCREMENT_FIELD, MODIFY_FIELD, MODIFY_DANGEROUS_FIELD } from "../../ActionsTypes/FacaProjetos";
import { ChangeEvent } from "react";
import humps from 'humps'

export type FieldEvent = ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>

export interface AddFieldAction extends Action{
  path: string,
  add: {
    name: string,
    value?: string
  }
  additional?: {
    compareProp?: string
  },
  method?: 'ADD' | 'REMOVE' | 'MODIFY',
  index?: string
}

export const addField: ActionCreator<AddFieldAction> = ( info: FieldEvent | string, value?: string , path?: string  ) =>{
  if( typeof info === 'string' ){
    let action = {
      type: ADD_FIELD,
      path: path || 'trash',
      add: {
        name: humps.camelize(info),
        value: value
      }
    }
    return action
  }else{
    let action = {
      type: ADD_FIELD,
      path: info.currentTarget.dataset.path || 'trash',
      add: {
        name: humps.camelize(info.currentTarget.name),
        value: info.currentTarget.value
      }
    }
    return action
  }
}

export const incrementField: ActionCreator<AddFieldAction> = ( info: FieldEvent | string, value?: string , path?: string ) => {
  if( typeof info === 'string' ){
    let action: AddFieldAction = {
      type: INCREMENT_FIELD,
      path: path || 'trash',
      add: {
        name: humps.camelize(info),
        value: value
      }
    }
    return action
  }else{
    let action: AddFieldAction = {
      type: INCREMENT_FIELD,
      path: value || info.currentTarget.dataset.path || 'trash',
      add: {
        name: humps.camelize(info.currentTarget.name),
        value: info.currentTarget.value
      }
    }
    return action
  }
}
export const modifyDangerousField = (info: FieldEvent | string, value: string , path: string, method: 'ADD' | 'REMOVE' | 'MODIFY', index: string) => {
  if( typeof info === 'string' ){
    let action: AddFieldAction = {
      type: MODIFY_DANGEROUS_FIELD,
      path: path || 'trash',
      add: {
        name: humps.camelize(info),
        value: value
      },
      method: method,
      index: index
    }
    return action
  }else{
    let action: AddFieldAction = {
      type: INCREMENT_FIELD,
      path: value || info.currentTarget.dataset.path || 'trash',
      add: {
        name: humps.camelize(info.currentTarget.name),
        value: value
      },
      method: method,
      index: index
    }
    return action
  }
}