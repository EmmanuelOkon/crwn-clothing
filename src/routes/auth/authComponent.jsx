import SignInForm from "../../components/signInForm/signInFormComponent";
import { AuthenticationContainer } from "./authComponentStyles";

const Auth = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
    </AuthenticationContainer>
  );
};

export default Auth;
