import { FC } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import AnchorTwist from '../../../components/animations/anchor-tag-twist';
import { useAuthContext } from '../../../context/auth-context';

const AuthNavLink: FC<{ isRootPage: boolean }> = ({ isRootPage }) => {
  const { isLogged } = useAuthContext();

  return (
    <AnchorTwist
      href={isLogged ? '/account/profile' : '/auth/login/phone'}
      className="mr-2 flex items-center cursor-pointer  hover:text-pink-500 text-sm"
    >
      <AiOutlineUser
        size={14}
        className={!isRootPage ? 'text-razzmatazz' : ''}
      />
      <span className="ml-1 ">{isLogged ? 'Account' : 'Login'}</span>
    </AnchorTwist>
  );
};

export default AuthNavLink;
