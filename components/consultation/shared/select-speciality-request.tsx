/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { FC, ReactNode } from 'react';
import FadePageTransition from '../../animations/fade-page-transition';
import ViewContainer from '../../container/view-container';

const SpecialityNotSelected: FC<{ children?: ReactNode }> = ({ children }) => {
  const { query } = useRouter();

  return (
    <FadePageTransition>
      <ViewContainer>
        <div className="grid shadow-2xl border max-w-5xl mx-auto lg:grid-cols-2 grid-cols-1 rounded-xl sm:mt-8 mt-12 py-8 place-items-center">
          <img src="/assets/illustrate/logged-in.png" alt="..." />
          <div className="place-self-center px-3 py-4">
            {children || (
              <div className="my-8">
                <h2 className="text-xl font-semibold ">Access denied</h2>
                <p>You are not allowed to access this page.</p>
                <p>Please select speciality to view this page.</p>
              </div>
            )}

            <Link
              href={{
                pathname: '/consultation/book-appointment/choose-speciality/',
                query,
              }}
            >
              <a
                role="button"
                className="razzmatazz-to-white py-2 px-5 inline-block rounded-full "
              >
                View specialities
              </a>
            </Link>
          </div>
        </div>
      </ViewContainer>
    </FadePageTransition>
  );
};

export default SpecialityNotSelected;
