import SignUpForm from "../../components/signUpForm/signUpFormComponent";

import { AuthenticationContainer } from "./authComponentStyles";

const SignUp = () => {
  return (
    <AuthenticationContainer>
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default SignUp;
