import { motion } from 'framer-motion';
import { FC, FormEvent, useReducer, useRef, useState } from 'react';
import { ImSpinner2 } from 'react-icons/im';
import { IoIosClose } from 'react-icons/io';
import { GendersOptions, RelationshipOptions } from '../../../../constants';
import { relativeUserFormErrors } from '../../../../errors';
import useHandleClose from '../../../../hooks/useHandleClose';
import useMessageStatusSetter from '../../../../hooks/useStatusMessageSetter';
import useWindowResize from '../../../../hooks/useWindowResize';
import { RelativeFormDTO } from '../../../../types/dto/account.dto';
import { ErrorResponseCallback, ModalProps } from '../../../../types/globals';
import { formateDateToISO8601 } from '../../../../utils/date-utils';
import {
  validateEmail,
  validateIndianPhoneNumber,
} from '../../../../utils/validator';
import DatePicker from '../../../date-picker';
import Portal from '../../../modal';
import CommonInput from '../../../shared/inputs/common-input';
import PhoneInput from '../../../shared/inputs/phone-input';
import SelectInput from '../../../shared/inputs/select-input';
import ResponseStatusTag from '../../../shared/response-status-tag';
import {
  initialRelativeFormData,
  RelativeFormActions,
  relativeFormReducer,
} from './relative-form.reducer';

interface PatientRelativeFormProps extends Omit<ModalProps, 'disableScroll'> {
  heading: string;
  btnName: string;
  defaultValue?: RelativeFormDTO;
  onSubmit: (values: RelativeFormDTO) => Promise<ErrorResponseCallback>;
}

const PatientRelativeForm: FC<PatientRelativeFormProps> = ({
  showModal,
  setShowModal = () => {},
  heading,
  btnName,
  defaultValue,
  onSubmit,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowResize(true);
  const [showValidation, setShowValidation] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { setter, successmessage, errMessage } = useMessageStatusSetter();

  const [state, dispatch] = useReducer(
    relativeFormReducer,
    defaultValue || initialRelativeFormData
  );

  useHandleClose(() => {
    setShowModal(false);
  }, containerRef);

  async function handleOnSubmit(ev: FormEvent) {
    ev.preventDefault();
    setShowValidation(true);

    const formKeys = Object.keys(state);
    // @ts-ignore
    if (formKeys.some((key: string) => state?.[key] == '')) {
      return;
    }
    setLoading(true);
    setShowValidation(false);
    const { message, type } = await onSubmit(state);
    if (type === 'error') {
      await setter(message, 'error');
    } else {
      await setter(message, 'success');
      dispatch({ type: RelativeFormActions.Reset, payload: null });
    }

    setLoading(false);
  }

  return (
    <Portal showModal={showModal} disableScroll={true}>
      <motion.div
        ref={containerRef}
        initial={width > 640 ? { x: '200%' } : { y: '100%' }}
        animate={width > 640 ? { x: 0 } : { y: 0 }}
        exit={width > 640 ? { x: '200%' } : { y: '100%' }}
        transition={{ duration: 0.5, damping: '0' }}
        className="sm:w-96 w-full sm:top-0  right-0 bottom-0 bg-gray-50 rounded-l-xl shadow-2xl fixed p-2 border overflow-y-auto"
      >
        <div className="h-full w-full border border-blue-zodiac rounded-xl  min-h-[570px]">
          <div className="flex items-center justify-between bg-gray-100 p-2 rounded-t-xl drop-shadow-xl border-b mb-4">
            <h2 className="font-semibold text-xl">{heading}</h2>
            <IoIosClose
              fontSize={24}
              className="cursor-pointer bg-razzmatazz rounded-full text-gray-50
              border border-razzmatazz hover:bg-transparent hover:text-blue-zodiac/70 smooth-animate"
              role="button"
              onClick={() => setShowModal(false)}
            />
          </div>

          <form
            onSubmit={handleOnSubmit}
            className="p-2 grid grid-cols-1 gap-0.5"
          >
            <CommonInput
              placeholder="Enter your relative's full name"
              className="w-full p-2 rounded-md"
              showvalidation={showValidation}
              disabled={loading}
              name="name"
              value={state.name}
              onChange={(ev) => {
                dispatch({
                  payload: ev.target.value,
                  type: RelativeFormActions.Name,
                });
              }}
              validation={{
                type: 'error',
                message: state.name.trim() ? '' : relativeUserFormErrors.name,
              }}
            />
            <CommonInput
              placeholder="Enter your relative's email address"
              className="w-full p-2 rounded-md"
              showvalidation={showValidation}
              disabled={loading}
              validation={{
                type: 'error',
                message: state.email
                  ? validateEmail(state.email)
                    ? ''
                    : relativeUserFormErrors.email.invalid
                  : relativeUserFormErrors.email.required,
              }}
              value={state.email}
              onChange={(ev) => {
                dispatch({
                  payload: ev.target.value,
                  type: RelativeFormActions.Email,
                });
              }}
            />
            <PhoneInput
              placeholder="Enter your relative's mobile number"
              className="w-full p-2 pl-11 rounded-md"
              phonecodeclassname="p-2"
              showvalidation={showValidation}
              disabled={loading}
              validation={{
                type: 'error',
                message: !state.phone_number.trim()
                  ? relativeUserFormErrors.phone.required
                  : validateIndianPhoneNumber(state.phone_number)
                  ? ''
                  : relativeUserFormErrors.phone.invalid,
              }}
              value={state.phone_number}
              maxLength={10}
              onChange={(ev) => {
                dispatch({
                  payload: ev.target.value,
                  type: RelativeFormActions.PhoneNumer,
                });
              }}
            />
            <DatePicker
              onChange={(date) => {
                dispatch({
                  payload: formateDateToISO8601(date),
                  type: RelativeFormActions.DateOfBirth,
                });
              }}
              placeholder="Select your relative's date of birth"
              className="w-full p-2 rounded-md"
              btnClass="absolute right-0 top-0 h-10"
              disabled={loading}
              maxDate={new Date()}
              date={
                state.date_of_birth ? new Date(state.date_of_birth) : undefined
              }
              showvalidation={showValidation}
              validation={{
                type: 'error',
                message: !state.date_of_birth
                  ? relativeUserFormErrors.dateOfBirth
                  : '',
              }}
            />
            <SelectInput
              name="gender"
              className="w-full p-2 rounded-md"
              showvalidation={showValidation}
              disabled={loading}
              validation={{
                type: 'error',
                message: !state.gender ? relativeUserFormErrors.gender : '',
              }}
              value={state.gender}
              onChange={(ev) => {
                dispatch({
                  payload: ev.target.value,
                  type: RelativeFormActions.Gender,
                });
              }}
            >
              <option value="">Choose your gender</option>
              {GendersOptions.map(({ label, value }) => {
                return (
                  <option value={value} key={value}>
                    {label}
                  </option>
                );
              })}
            </SelectInput>

            <SelectInput
              name="relationship"
              className="w-full rounded-md p-2"
              showvalidation={showValidation}
              disabled={loading}
              value={state.relation}
              validation={{
                type: 'error',
                message: !state.relation.trim()
                  ? relativeUserFormErrors.relationship
                  : '',
              }}
              onChange={(ev) => {
                dispatch({
                  payload: ev.target.value,
                  type: RelativeFormActions.Relation,
                });
              }}
            >
              <option value="">Choose your relationship</option>
              {RelationshipOptions.map(({ label, value }) => {
                return (
                  <option value={value} key={value}>
                    {label}
                  </option>
                );
              })}
            </SelectInput>

            <ResponseStatusTag
              successmessage={successmessage}
              errMessage={errMessage}
            />
            <button
              disabled={loading}
              type="submit"
              className="razzmatazz-to-transparent px-6 py-2 rounded-lg  mx-auto mb-5 flex space-x-2 gap-x-2 items-center"
            >
              {loading ? <ImSpinner2 className="animate-spin" /> : ''}
              <span>{btnName}</span>
            </button>
          </form>
        </div>
      </motion.div>
    </Portal>
  );
};

export default PatientRelativeForm;
