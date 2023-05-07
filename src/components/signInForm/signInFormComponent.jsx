import { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../formInput/formInputComponent";
import Button, { BUTTON_TYPE_CLASSES } from "../button/buttonComponent";

import {
  SignInContainer,
  Title,
  Span,
  ButtonsContainer,
  NavLink,
  SignUpContainer,
} from "./signInFormStyles";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/userAction";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      console.log("user sign in failed", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <Title>Already have an account?</Title>
      <Span>Sign in with Email and Password</Span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
          errorMessage="Please enter a valid email"
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
          errorMessage="Please enter a valid password"
        />
        <ButtonsContainer>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={signInWithGoogle}
          >
            Sign In With Google
          </Button>
          <Button type="submit">Sign In</Button>
        </ButtonsContainer>
      </form>
      <SignUpContainer>
        <Title>Don't have an account?</Title>
        <Span>Create an account with Email and Password</Span>
        <NavLink to="/signup">Sign Up</NavLink>
      </SignUpContainer>
    </SignInContainer>
  );
};

export default SignInForm;
