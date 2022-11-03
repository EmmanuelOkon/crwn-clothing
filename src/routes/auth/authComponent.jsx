import SignUpForm from '../../components/signUpForm/signUpFormComponent';
import SignInForm from '../../components/signInForm/signInFormComponent';
import "./authComponentStyles.scss"

const Auth = () => {
  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Auth;
