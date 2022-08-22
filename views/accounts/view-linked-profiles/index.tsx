import axios from 'axios';
import { FC, useState } from 'react';
import useSWR, { mutate } from 'swr';
import AccountViewLayout from '../../../components/accounts/layout';
import LinkedProfileCard from '../../../components/accounts/linked-profiles/card';
import PatientRelativeForm from '../../../components/accounts/linked-profiles/relative-form';
import ConfirmModal from '../../../components/modal/confirm-modal';
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

  return (
    <AccountViewLayout option="linkedProfiles">
      <AddNewRelative />
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6 p-4">
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
              }}
            />
          );
        })}
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
        onConfirm={() => {}}
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
