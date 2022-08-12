import { AnimatePresence, motion } from 'framer-motion';
import { FC, useEffect, useMemo, useReducer, useState } from 'react';
import { ImSpinner2 } from 'react-icons/im';
import useSWR from 'swr';
import ProfileDOBInput from '../../../components/accounts/inputs/profile-dob-input';
import ProfileGenderInput from '../../../components/accounts/inputs/profile-gender-input';
import ProfileInput from '../../../components/accounts/inputs/profile-input';
import AccountViewLayout from '../../../components/accounts/layout';
import ResponseStatusTag from '../../../components/shared/response-status-tag';
import { privateRoutes } from '../../../routes/api-routes';
import type { BaseAPiResponse } from '../../../types/response';
import type { UserEntity } from '../../../types/response/user.response';
import { formateDateToISO8601 } from '../../../utils/date-utils';
import {
  initialProfileData,
  ProfileAction,
  profileReducer,
} from './profile.reducer';

const ProfileView: FC = () => {
  const { isValidating, data } = useSWR<BaseAPiResponse<UserEntity>>(
    privateRoutes.User
  );

  const [showEditForm, setShowEditForm] = useState<boolean>(false);

  const [state, dispatch] = useReducer(profileReducer, initialProfileData);

  console.log(data?.result);

  useEffect(() => {
    let isCancelled = false;

    if (data?.result) {
      if (!isCancelled) {
        dispatch({ type: ProfileAction.INITIALISE, payload: data.result });
      }
    }

    return () => {
      isCancelled = true;
    };
  }, [data?.result]);

  useMemo(() => {
    if (data?.result && state) {
      const { result } = data;
      if (
        result.email != state.email ||
        result.date_of_birth != state.date_of_birth ||
        result.gender != state.gender ||
        result.name != state.name ||
        result.phone_number.number != state.phone_number.number
      ) {
        setShowEditForm(true);
      } else {
        setShowEditForm(false);
      }
    }
  }, [data, state]);

  if (isValidating) {
    return (
      <AccountViewLayout option="profile">
        <ImSpinner2 />
      </AccountViewLayout>
    );
  }

  return (
    <AccountViewLayout option="profile">
      <div className="mb-4 mt-6">
        <ProfileInput
          title="Full Name"
          value={state.name}
          onChange={(ev) => {
            dispatch({ payload: ev.target.value, type: ProfileAction.NAME });
          }}
          name="full_name"
          showvalidation
          validation={{
            type: 'error',
            message: state.name.trim() ? '' : 'Name cannot be empty',
          }}
        />
      </div>
      <div className="grid lg:grid-cols-2 gap-4 mb-4">
        <ProfileInput
          title="Mobile Number"
          name="phone_number"
          value={state.phone_number.code + ' ' + state.phone_number.number}
          onChange={() => {}}
        />
        <ProfileInput
          title="Email Address"
          name="email"
          value={state.email}
          onChange={() => {}}
        />
      </div>
      <div className="grid lg:grid-cols-2 gap-4 mb-4">
        <ProfileDOBInput
          setDate={(date) => {
            dispatch({
              payload: formateDateToISO8601(date),
              type: ProfileAction.DateOfBirth,
            });
          }}
          title="Date of Birth"
          date={new Date(state.date_of_birth)}
          name="date_of_birth"
        />
        <ProfileGenderInput
          title="Gender"
          value={state.gender}
          onChange={(ev) => {
            dispatch({
              payload: ev.target.value,
              type: ProfileAction.Gender,
            });
          }}
          showvalidation
          validation={{
            type: 'error',
            message: !state.gender.trim() ? 'Gender cannot be empty' : '',
          }}
          name="gender"
        />
      </div>

      <ResponseStatusTag />
      <AnimatePresence>
        {showEditForm ? (
          <motion.button
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            type="submit"
            className="px-8 rounded-lg py-2 mx-auto block razzmatazz-to-transparent mt-2"
          >
            Save changes
          </motion.button>
        ) : (
          ''
        )}
      </AnimatePresence>
      <div className="h-96"></div>
      <div className="h-96"></div>
      <div className="h-96"></div>
      <div className="h-96"></div>
      <div className="h-96"></div>
      <div className="h-96"></div>
    </AccountViewLayout>
  );
};

export default ProfileView;
