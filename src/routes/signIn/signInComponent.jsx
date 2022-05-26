import {
  signInWithGooglePopup,
  // createUserProfileDocument,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebaseUtils';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    // console.log(response);
    const userDocRef = await createUserDocumentFromAuth(user);
    // createUserProfileDocument(response);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  );
};

export default SignIn;
