import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebaseUtils';

import SignUpForm from '../../components/signUpForm/signUpFormComponent';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup  info@thebrandingchamps.com  </button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
