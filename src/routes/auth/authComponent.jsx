import SignUpForm from "../../components/signUpForm/signUpFormComponent";
import SignInForm from "../../components/signInForm/signInFormComponent";
import { AuthenticationContainer } from "./authComponentStyles";

const Auth = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Auth;
