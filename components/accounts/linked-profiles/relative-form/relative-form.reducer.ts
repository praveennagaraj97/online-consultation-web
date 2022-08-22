import { Reducer } from 'react';
import { RelativeFormDTO } from '../../../../types/dto/account.dto';
import { Action } from '../../../../types/globals';

export enum RelativeFormActions {
  Name,
  Email,
  PhoneNumer,
  Relation,
  Gender,
  DateOfBirth,
  Reset,
  InitDefaultValues,
}

export const initialRelativeFormData: RelativeFormDTO = {
  date_of_birth: '',
  email: '',
  gender: '',
  name: '',
  phone_code: '+91',
  phone_number: '',
  relation: '',
};

export const relativeFormReducer: Reducer<
  RelativeFormDTO,
  Action<RelativeFormActions, any>
> = (state = initialRelativeFormData, action) => {
  switch (action.type) {
    case RelativeFormActions.Name:
      return { ...state, name: action.payload };

    case RelativeFormActions.Email:
      return { ...state, email: action.payload };

    case RelativeFormActions.Gender:
      return { ...state, gender: action.payload };

    case RelativeFormActions.Relation:
      return { ...state, relation: action.payload };

    case RelativeFormActions.PhoneNumer:
      return { ...state, phone_number: action.payload };

    case RelativeFormActions.DateOfBirth:
      return { ...state, date_of_birth: action.payload };

    case RelativeFormActions.Reset:
      return initialRelativeFormData;

    case RelativeFormActions.InitDefaultValues:
      return { ...state, ...action.payload };

    default:
      return initialRelativeFormData;
  }
};
