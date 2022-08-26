import axios from 'axios';
import { FC, Fragment, useState } from 'react';
import useSWR, { mutate } from 'swr';
import AccountViewLayout from '../../../components/accounts/layout';
import LinkedProfileCard from '../../../components/accounts/linked-profiles/card';
import NoRelativesFound from '../../../components/accounts/linked-profiles/no-relatives-found';
import PatientRelativeForm from '../../../components/accounts/linked-profiles/relative-form';
import ConfirmModal from '../../../components/modal/confirm-modal';
import ResponseStatusTag from '../../../components/shared/response-status-tag';
import LinkedProfileCardSkeleton from '../../../components/skeletons/accounts/linked-profile-card';
import useMessageStatusSetter from '../../../hooks/useStatusMessageSetter';
import { privateRoutes } from '../../../routes/api-routes';
import { RelativeFormDTO } from '../../../types/dto/account.dto';
import { ErrorResponseCallback } from '../../../types/globals';
import { PaginatedBaseAPiResponse } from '../../../types/response';
import { RelativeEntity } from '../../../types/response/user.response';
import { requestOptions } from '../../../utils/fetchOptions';
import { apiErrorParser } from '../../../utils/parser';
import AddNewRelative from './add-new-relative';

const LinkedProfilesView: FC = () => {
  const { data, isValidating } = useSWR<
    PaginatedBaseAPiResponse<RelativeEntity[]>
  >(privateRoutes.Relative);
  const [showEditForm, setShowEditForm] = useState<boolean>(false);
  const [editData, setEditData] = useState<RelativeEntity>();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<boolean>(false);
  const { errMessage, setter, successmessage } = useMessageStatusSetter();
  const [deleteId, setDeleteId] = useState<string>();

  async function handleEdit(
    formValues: RelativeFormDTO
  ): Promise<ErrorResponseCallback<RelativeFormDTO | null>> {
    console.log(formValues);

    const formData = new FormData();

    if (editData?.email != formValues.email) {
      formData.append('email', formValues.email);
    }

    if (editData?.name != formValues.name) {
      formData.append('name', formValues.name);
    }

    if (editData?.gender != formValues.gender) {
      formData.append('gender', formValues.gender);
    }

    if (editData?.date_of_birth != formValues.date_of_birth) {
      formData.append('date_of_birth', formValues.date_of_birth);
    }

    if (editData?.relation != formValues.relation) {
      formData.append('relation', formValues.relation);
    }

    if (editData?.phone.number != formValues.phone_number) {
      formData.append('phone_number', formValues.phone_number);
    }

    try {
      await axios.patch(privateRoutes.Relative + `/${editData?.id}`, formData, {
        ...requestOptions(),
      });
      await mutate(privateRoutes.Relative);
      return {
        message: 'Relative profile edited successfully',
        type: 'success',
      };
    } catch (error) {
      const errs = apiErrorParser<RelativeFormDTO>(error);

      return {
        message: errs?.message || '',
        type: 'error',
        errors: errs?.errors,
      };
    }
  }

  async function handleDelete() {
    try {
      await axios.delete(privateRoutes.Relative + '/' + deleteId, {
        ...requestOptions(),
      });
      await setter('Relative profile deleted successfully', 'error');
      await mutate(privateRoutes.Relative);
      setDeleteId(undefined);
      setShowDeleteConfirm(false);
    } catch (error) {
      setter(apiErrorParser(error)?.message || '', 'error');
    }
  }

  if (!isValidating && !data?.count) {
    return (
      <AccountViewLayout option="linkedProfiles">
        <AddNewRelative />
        <NoRelativesFound />
      </AccountViewLayout>
    );
  }

  return (
    <AccountViewLayout option="linkedProfiles">
      <AddNewRelative />
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6 p-4 mb-8">
        {isValidating ? (
          new Array(6).fill('').map((_, idx) => {
            return <LinkedProfileCardSkeleton key={idx} />;
          })
        ) : (
          <Fragment>
            {data?.results?.map((relative) => {
              return (
                <LinkedProfileCard
                  key={relative.id}
                  {...relative}
                  onEditClick={(ev) => {
                    ev.stopPropagation();
                    setEditData(relative);
                    setShowEditForm(true);
                  }}
                  onDeleteClick={(ev) => {
                    ev.stopPropagation();
                    setShowDeleteConfirm(true);
                    setDeleteId(relative.id);
                  }}
                />
              );
            })}
          </Fragment>
        )}
      </div>
      <PatientRelativeForm
        btnName="Save Changes"
        heading="Edit relative profile"
        onClose={() => {
          setEditData(undefined);
        }}
        onSubmit={handleEdit}
        defaultValue={editData}
        showModal={showEditForm}
        setShowModal={(value) => {
          setShowEditForm(value);
        }}
      />
      <ConfirmModal
        onCancel={() => {
          setShowDeleteConfirm(false);
        }}
        responseMsgChildren={
          <ResponseStatusTag
            errMessage={errMessage}
            successmessage={successmessage}
          />
        }
        onConfirm={handleDelete}
        showModal={showDeleteConfirm}
        isAsync
        content={{
          heading: 'Are you sure?',
          description:
            'Deleting relative profile will result in loosing all the consulations assocaited with it.',
        }}
      />
    </AccountViewLayout>
  );
};

export default LinkedProfilesView;
