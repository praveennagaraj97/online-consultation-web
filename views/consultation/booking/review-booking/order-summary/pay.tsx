import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { ImSpinner2 } from 'react-icons/im';
import { loadScript } from '../../../../../utils/helpers';

const PayNow: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const { query } = useRouter();

  useEffect(() => {
    loadScript('https://checkout.razorpay.com/v1/checkout.js', 'razor-payment');
  }, []);

  function handlePay() {
    try {
    } catch (error) {}
  }

  return (
    <button
      disabled={loading}
      className="razzmatazz-to-transparent flex mx-auto py-2 px-5 rounded-md sm:mt-10 mt-6 text-center items-center space-x-1"
    >
      {loading ? <ImSpinner2 className="animate-spin" /> : ''}

      <span>{loading ? 'Please wait' : 'Pay Now'}</span>
    </button>
  );
};

export default PayNow;
