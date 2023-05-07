import { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../formInput/formInputComponent";

import { signUpStart } from "../../store/user/userAction";
import {
  SignUpContainer,
  Title,
  Span,
  NavLink,
  ButtonWrapper,
} from "./signUpFormStyles";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("User already exists");
      } else {
      }
      console.log("user creation encountered an error", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <Title>Create an Account</Title>
      <Span>Sign Up with Email and Password</Span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
          errorMessage="Please enter a valid display name"
        />

        <FormInput
          label="Email"
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
          errorMessage="Please enter a valid email"
        />

        <FormInput
          label="Password"
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
          errorMessage="Please enter a valid password"
        />

        <FormInput
          label="Confirm Password"
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
          errorMessage="Please enter a valid password"
        />
        <ButtonWrapper>
          <NavLink type="submit">Create Account</NavLink>
        </ButtonWrapper>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
