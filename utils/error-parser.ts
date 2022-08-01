import { AuthError } from '@firebase/auth';

const errorParser = (error: any) => {};

function firebaseError(error: AuthError) {
  try {
    return error.message;
  } catch (e) {
    return 'Something went Wrong';
  }
}

export { firebaseError, errorParser };
