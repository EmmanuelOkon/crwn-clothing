import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebaseUtils';
import SignUpForm from '../../components/signUpForm/signUpFormComponent';
import Button from '../../components/button/buttonComponent';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <Button onClick={logGoogleUser}>Sign in with Google Popup</Button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
