import { Reducer } from 'react';
import { Action } from '../../../types/globals';
import { UserEntity } from '../../../types/response/user.response';

export enum ProfileAction {
  INITIALISE,
  NAME,
  Gender,
  DateOfBirth,
}

export const initialProfileData = {
  date_of_birth: '',
  email: '',
  email_verified: false,
  gender: '',
  name: '',
  phone_number: { code: '+91', number: '' },
};

export const profileReducer: Reducer<
  Omit<UserEntity, 'id'>,
  Action<ProfileAction, any>
> = (state, action) => {
  switch (action.type) {
    case ProfileAction.INITIALISE:
      return { ...action.payload };

    case ProfileAction.NAME:
      return { ...state, name: action.payload };

    case ProfileAction.Gender:
      return { ...state, gender: action.payload };

    case ProfileAction.DateOfBirth:
      return { ...state, date_of_birth: action.payload };

    default:
      return state;
  }
};
