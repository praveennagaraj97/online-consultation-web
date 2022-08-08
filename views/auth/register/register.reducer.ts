import type { Reducer } from 'react';
import type { RegisterDTO } from '../../../types/dto/auth.dto';
import type { Action } from '../../../types/globals';

export enum RegisterActions {
  NAME,
  EMAIL,
  PHONE_CODE,
  PHONE_NUMBER,
  DATE_OF_BIRTH,
  GENDER,
  VERIFICATION_ID,
}

export const initialRegisterFormData: RegisterDTO = {
  date_of_birth: undefined,
  email: '',
  gender: '',
  name: '',
  phone_code: '+91',
  phone_number: '',
  verification_id: '',
};

export const registerFormReducer: Reducer<
  RegisterDTO,
  Action<RegisterActions, any>
> = (state, action) => {
  switch (action.type) {
    case RegisterActions.NAME:
      return { ...state, name: action.payload };

    case RegisterActions.EMAIL:
      return { ...state, email: action.payload };

    case RegisterActions.DATE_OF_BIRTH:
      return { ...state, date_of_birth: action.payload };

    case RegisterActions.GENDER:
      return { ...state, gender: action.payload };

    case RegisterActions.PHONE_NUMBER:
      return { ...state, phone_number: action.payload };

    case RegisterActions.VERIFICATION_ID:
      return { ...state, verification_id: action.payload };

    default:
      return state;
  }
};
