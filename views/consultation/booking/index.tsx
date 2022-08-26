import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import useSWR from 'swr';
import PatientRelativeForm from '../../../components/accounts/linked-profiles/relative-form';
import Consultants from '../../../components/consultation/consultants';
import ViewContainer from '../../../components/container/view-container';
import NotAuthorised from '../../../components/shared/not-authorized';
import { useAuthContext } from '../../../context/auth-context';
import { privateRoutes } from '../../../routes/api-routes';
import { accountAPiService } from '../../../services/accounts-api.service';
import { RelativeFormDTO } from '../../../types/dto/account.dto';
import { ErrorResponseCallback } from '../../../types/globals';
import { PaginatedBaseAPiResponse } from '../../../types/response';
import { RelativeEntity } from '../../../types/response/user.response';
import { apiErrorParser } from '../../../utils/parser';

const BookAppointmentForConsultationView: FC = () => {
  const { isLogged, user } = useAuthContext();
  const { isValidating, data } = useSWR<
    PaginatedBaseAPiResponse<RelativeEntity[]>
  >(isLogged ? privateRoutes.Relative : '');
  const [showAddNewRelative, setShowAddNewRelative] = useState(false);
  const { push } = useRouter();

  async function handleOnSubmit(
    formValues: RelativeFormDTO
  ): Promise<ErrorResponseCallback<RelativeFormDTO | null>> {
    try {
      const { data } = await accountAPiService.addNewRelative(formValues);

      return {
        message: 'Profile created successfully',
        type: 'success',
        callback: () => {
          push({
            pathname: `/consultation/book-appointment/choose-speciality`,
            query: {
              patient: data.result.id,
            },
          });
        },
      };
    } catch (error) {
      const errs = apiErrorParser<RelativeFormDTO>(error);

      return {
        message: errs?.message,
        type: 'error',
        errors: errs?.errors,
      };
    }
  }

  if (!isLogged) {
    return <NotAuthorised />;
  }

  return (
    <ViewContainer>
      <div className="container  mx-auto my-14">
        <div className="rounded-xl lg:border-t  drop-shadow-xl shadow-xl">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="bg-blue-zodiac  w-full h-full rounded-xl rounded-r-none  lg:flex flex-col justify-center hidden">
              <div>
                <Image
                  src={'/assets/illustrate/book-appointment.svg'}
                  alt=""
                  layout="responsive"
                  width={220}
                  height={130}
                  unoptimized={true}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="/assets/blur-data/login_bg.png"
                />
              </div>
            </div>

            <div className="px-2 xl:px-12 lg:px-10 md:px-14 py-10 mx-auto w-full h-full flex flex-col justify-between">
              <div>
                <div className="text-center mb-9">
                  <h1 className=" text-blue-zodiac text-2xl">
                    Book Appointment
                  </h1>
                  <p>Get started now</p>
                </div>
                <h2 className="text-lg text-razzmatazz mb-2">
                  Welcome, {user?.name}
                </h2>
                <p>Please help us know who this consultation is for</p>
              </div>
              <Consultants
                pathName="/consultation/book-appointment/choose-speciality"
                selfCard={
                  <Link
                    href={{
                      pathname: `/consultation/book-appointment/choose-speciality`,
                      query: {
                        patient: user?.id,
                      },
                    }}
                  >
                    <a>
                      <button
                        role="button"
                        className="shadow-md shadow-razzmatazz/40
                      hover:bg-razzmatazz hover:text-gray-50
                      transform transition-colors duration-300
                      border border-razzmatazz lg:px-8 px-4 sm:py-3  py-2 rounded-3xl"
                      >
                        {user?.name}
                      </button>
                    </a>
                  </Link>
                }
                loading={isValidating}
                users={data?.results || []}
                newCard={
                  <button
                    onClick={(ev) => {
                      ev.stopPropagation();
                      setShowAddNewRelative(true);
                    }}
                    className="shadow-md shadow-razzmatazz/40
              hover:bg-razzmatazz hover:text-gray-50
              transform transition-colors duration-300
              border border-razzmatazz lg:px-8 px-4 sm:py-3  py-2 rounded-3xl"
                  >
                    Someone else
                  </button>
                }
              />
            </div>
          </div>
        </div>
      </div>
      <PatientRelativeForm
        btnName="Click to proceed"
        heading="Book appointment"
        description={`Fill the form below to book this appointment for someone else!.
You can also view this user under relatives section later.`}
        onSubmit={handleOnSubmit}
        showModal={showAddNewRelative}
        onClose={() => {
          setShowAddNewRelative(false);
        }}
        setShowModal={(value) => {
          setShowAddNewRelative(value);
        }}
      />
    </ViewContainer>
  );
};

export default BookAppointmentForConsultationView;
