import axios from 'axios';
import { AnimatePresence, motion } from 'framer-motion';
import { FC, FormEvent, useEffect, useMemo, useReducer, useState } from 'react';
import { ImSpinner2 } from 'react-icons/im';
import useSWR from 'swr';
import ProfileDOBInput from '../../../components/accounts/inputs/profile-dob-input';
import ProfileGenderInput from '../../../components/accounts/inputs/profile-gender-input';
import ProfileInput from '../../../components/accounts/inputs/profile-input';
import AccountViewLayout from '../../../components/accounts/layout';
import ResponseStatusTag from '../../../components/shared/response-status-tag';
import ProfileSkeleton from '../../../components/skeletons/accounts/profile-skeleton';
import useMessageStatusSetter from '../../../hooks/useStatusMessageSetter';
import { privateRoutes } from '../../../routes/api-routes';
import type { BaseAPiResponse } from '../../../types/response';
import type { UserEntity } from '../../../types/response/user.response';
import { formateDateToISO8601 } from '../../../utils/date-utils';
import { requestOptions } from '../../../utils/fetchOptions';
import { apiErrorParser } from '../../../utils/parser';
import ProfileEmailInput from './email-field';
import ProfilePhoneField from './phone-field';
import {
  initialProfileData,
  ProfileAction,
  profileReducer,
} from './profile.reducer';

const ProfileView: FC = () => {
  const { isValidating, data, mutate } = useSWR<BaseAPiResponse<UserEntity>>(
    privateRoutes.User
  );

  const [showEditForm, setShowEditForm] = useState<boolean>(false);
  const [showvalidation, setShowValidation] = useState<boolean>(false);

  const [state, dispatch] = useReducer(profileReducer, initialProfileData);
  const [loading, setLoading] = useState<boolean>(false);
  const { setter, successmessage, errMessage } = useMessageStatusSetter();

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
        <ProfileSkeleton />
      </AccountViewLayout>
    );
  }

  async function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    try {
      setShowValidation(true);
      if (
        !state.date_of_birth ||
        !state.email ||
        !state.gender ||
        !state.name ||
        !state.phone_number.number
      ) {
        return;
      }

      setLoading(true);
      const formData = new FormData();
      const profileData = data?.result;
      if (profileData?.name != state.name) {
        formData.append('name', state.name);
      }

      if (profileData?.gender != state.gender) {
        formData.append('gender', state.gender);
      }

      if (profileData?.date_of_birth != state.date_of_birth) {
        formData.append('date_of_birth', state.date_of_birth);
      }

      await axios.patch(privateRoutes.User, formData, { ...requestOptions() });

      await mutate();
      setLoading(false);
      setShowValidation(false);
      await setter('Profile details updated successfully', 'success');
    } catch (error) {
      await setter(apiErrorParser(error)?.message, 'error');
      setLoading(false);
    }
  }

  return (
    <AccountViewLayout option="profile">
      <form onSubmit={handleSubmit}>
        <div className="lg:mb-4 mt-6">
          <ProfileInput
            title="Full Name"
            value={state.name}
            disabled={loading}
            onChange={(ev) => {
              dispatch({ payload: ev.target.value, type: ProfileAction.NAME });
            }}
            name="full_name"
            showvalidation={showvalidation}
            validation={{
              type: 'error',
              message: state.name.trim() ? '' : 'Name cannot be empty',
            }}
          />
        </div>

        <div className="grid lg:grid-cols-2 lg:gap-4 mb-4">
          <ProfilePhoneField
            phone={state.phone_number}
            showValidation={showvalidation}
          />
          <ProfileEmailInput
            email={state.email}
            isVerified={state.email_verified}
          />
        </div>

        <div className="grid lg:grid-cols-2 lg:gap-4 mb-4">
          <ProfileDOBInput
            setDate={(date) => {
              dispatch({
                payload: formateDateToISO8601(date),
                type: ProfileAction.DateOfBirth,
              });
            }}
            disabled={loading}
            title="Date of Birth"
            date={new Date(state.date_of_birth)}
            name="date_of_birth"
            showvalidation={showvalidation}
            validation={{
              type: 'error',
              message: state.date_of_birth.trim()
                ? ''
                : 'Date of birth cannot be empty',
            }}
          />
          <ProfileGenderInput
            title="Gender"
            value={state.gender}
            disabled={loading}
            onChange={(ev) => {
              dispatch({
                payload: ev.target.value,
                type: ProfileAction.Gender,
              });
            }}
            showvalidation={showvalidation}
            validation={{
              type: 'error',
              message: !state.gender.trim() ? 'Gender cannot be empty' : '',
            }}
            name="gender"
          />
        </div>

        <ResponseStatusTag
          errMessage={errMessage}
          successmessage={successmessage}
        />
        <AnimatePresence>
          {showEditForm ? (
            <motion.button
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              type="submit"
              className="px-8 rounded-lg py-2 mx-auto razzmatazz-to-transparent mt-4 flex items-center space-x-2"
            >
              {loading ? <ImSpinner2 className="animate-spin" /> : ''}
              <span>Save changes</span>
            </motion.button>
          ) : (
            ''
          )}
        </AnimatePresence>
      </form>
    </AccountViewLayout>
  );
};

export default ProfileView;
