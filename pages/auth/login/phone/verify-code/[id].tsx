import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import FadePageTransition from '../../../../../components/animations/fade-page-transition';
import { PhoneType } from '../../../../../types/response';
import VerifyPasscodeView from '../../../../../views/auth/verify-passcode';

const VerifyPhoneLoginCodePage: NextPage = () => {
  const { query } = useRouter();
  const [phoneNumber, setPhoneNumber] = useState<PhoneType | null>(null);

  useEffect(() => {
    if (query?.['id']) {
      const { code, number } = parsePhoneCode(atob(query?.['id'] as string));

      if (code && number) {
        setPhoneNumber({ code, number });
      }
    }
  }, [query]);

  return (
    <FadePageTransition>
      <Head>
        <title>Get Med Go | Login | Verify Code</title>
      </Head>
      {phoneNumber ? (
        <VerifyPasscodeView
          phoneNumber={phoneNumber}
          verifyId={query?.['id'] as string}
        />
      ) : (
        ''
      )}
    </FadePageTransition>
  );
};

export default VerifyPhoneLoginCodePage;

const parsePhoneCode = (verifyId: string) => {
  const params = new URLSearchParams(verifyId);

  return {
    code: params.get('phone_code'),
    number: params.get('phone_number'),
  };
};
