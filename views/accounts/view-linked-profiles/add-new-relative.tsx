import axios from 'axios';
import { FC, Fragment, useState } from 'react';
import { VscPersonAdd } from 'react-icons/vsc';
import PatientRelativeForm from '../../../components/accounts/linked-profiles/relative-form';
import { RelativeFormDTO } from '../../../types/dto/account.dto';
import { ErrorResponseCallback } from '../../../types/globals';

const AddNewRelative: FC = () => {
  const [showForm, setShowForm] = useState(false);

  async function handleOnSubmit(
    formValues: RelativeFormDTO
  ): Promise<ErrorResponseCallback> {
    await axios.post('/', formValues);

    return { message: 'Added successfully', type: 'success' };
  }

  return (
    <Fragment>
      <div className="my-6 w-full flex justify-end">
        <button
          onClick={(ev) => {
            ev.stopPropagation();
            setShowForm(true);
          }}
          className="zodiac-to-transparent rounded-lg px-6  py-2 flex items-center space-x-1 gap-x-1"
        >
          <VscPersonAdd />
          <span>Add New</span>
        </button>
      </div>
      <PatientRelativeForm
        showModal={showForm}
        setShowModal={(value) => {
          setShowForm(value);
        }}
        heading="Add New Relative"
        btnName="Save"
        onSubmit={handleOnSubmit}
      />
    </Fragment>
  );
};

export default AddNewRelative;
