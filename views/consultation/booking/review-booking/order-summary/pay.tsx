import { useRouter } from 'next/router';
import { FC, Fragment, useEffect, useState } from 'react';
import { ImSpinner2 } from 'react-icons/im';
import Portal from '../../../../../components/modal';
import ResponseStatusTag from '../../../../../components/shared/response-status-tag';
import { useAuthContext } from '../../../../../context/auth-context';
import useMessageStatusSetter from '../../../../../hooks/useStatusMessageSetter';
import useWindowResize from '../../../../../hooks/useWindowResize';
import { consultationAPiService } from '../../../../../services/consultation-api.service';
import { loadScript } from '../../../../../utils/helpers';
import { apiErrorParser } from '../../../../../utils/parser';

const PayNow: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const { query } = useRouter();
  const { user } = useAuthContext();
  const { setter, successmessage, errMessage } = useMessageStatusSetter();

  const { width } = useWindowResize(true);

  useEffect(() => {
    loadScript('https://checkout.razorpay.com/v1/checkout.js', 'razor-payment');
  }, []);

  async function handlePay() {
    try {
      if (!query?.['slot'] || !query?.['patient']) {
        return;
      }

      let relative: string | undefined = undefined;
      if (query.patient != user?.id) {
        relative = query.patient as string;
      }
      setLoading(true);
      const { data } = await consultationAPiService.bookScheduledConsultation(
        query?.['slot'] as string,
        relative
      );

      // On Browser close
      addEventListener('beforeunload', (event) => {
        consultationAPiService
          .cancelBookingIfPaymentFailsOrCancel(data.result.appointment_id)
          .then()
          .catch();
      });

      const options = {
        key: 'rzp_test_PkyJGZjEDWqhpk',
        ...data.result,
        handler: async function (response: any) {
          console.log(response);
          setLoading(false);
        },
        theme: {
          color: '#61dafb',
        },
        modal: {
          escape: false,
          ondismiss: async () => {
            try {
              // Make an api call to release the slot
              await consultationAPiService.cancelBookingIfPaymentFailsOrCancel(
                data.result.appointment_id
              );

              setLoading(false);
            } catch (error) {
              setLoading(false);
            }
          },
        },
      };

      // @ts-ignore
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      setLoading(false);
      await setter(
        apiErrorParser<{ errors: { reason: string } }>(error)?.message,
        'error'
      );
    }
  }

  return (
    <Fragment>
      <Portal showModal={width < 640}>
        {width < 640 && (
          <button
            disabled={loading}
            onClick={handlePay}
            className="razzmatazz-to-white py-2 px-5 
            flex items-center rounded-t-md text-center justify-center
            space-x-1 fixed bottom-0 left-0 right-0"
          >
            {loading ? <ImSpinner2 className="animate-spin" /> : ''}
            <span>{loading ? 'Please wait' : 'Pay Now'}</span>
          </button>
        )}
      </Portal>
      <ResponseStatusTag
        successmessage={successmessage}
        errMessage={errMessage}
      />

      <button
        disabled={loading}
        onClick={handlePay}
        className="razzmatazz-to-transparent flex mx-auto py-2 px-5 mt-3 rounded-md text-center items-center space-x-1"
      >
        {loading ? <ImSpinner2 className="animate-spin" /> : ''}

        <span>{loading ? 'Please wait' : 'Pay Now'}</span>
      </button>
    </Fragment>
  );
};

export default PayNow;
