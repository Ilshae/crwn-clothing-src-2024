import { ChangeEvent, FormEvent, useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../../utils/firebase.ts";
import FormInput from "../../../components/form-input/FormInput.tsx";
import Button from "../../../components/button/Button.tsx";
import { Container, SignUpError } from "./SignUpStyles.ts";
import { AuthError, AuthErrorCodes } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { validateSignUp } from "../validation/validation.ts";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const [errors, setErrors] = useState(defaultFormFields);
  const [signUpError, setSignUpError] = useState("");
  const navigate = useNavigate();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { name, value } = target;
    setFormFields({ ...formFields, [name]: value });
  };

  const validate = () => {
    const errors = validateSignUp(formFields);
    setErrors({ ...errors });
    return Object.values(errors).every((x) => x === "");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (validate()) {
      try {
        const res = await createAuthUserWithEmailAndPassword(email, password);
        if (!res) throw Error();

        await createUserDocumentFromAuth(res?.user, { displayName });
        navigate("/");
      } catch (error) {
        setSignUpError(describeError(error as AuthError));
      }
    }
  };

  return (
    <Container>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form
        onSubmit={async (event) => {
          await handleSubmit(event);
        }}
      >
        <FormInput
          label={"Display Name"}
          required
          type={"text"}
          name={"displayName"}
          value={displayName}
          onChange={(event) => handleChange(event)}
          error={errors.displayName}
        />
        <FormInput
          label={"Email"}
          required
          type={"email"}
          name={"email"}
          value={email}
          onChange={(event) => handleChange(event)}
          error={errors.email}
        />
        <FormInput
          label={"Password"}
          required
          type={"password"}
          name={"password"}
          value={password}
          onChange={(event) => handleChange(event)}
          error={errors.password}
        />
        <FormInput
          label={"Confirm Password"}
          required
          type={"password"}
          name={"confirmPassword"}
          value={confirmPassword}
          onChange={(event) => handleChange(event)}
          error={errors.confirmPassword}
        />

        <Button type={"submit"}>Sign Up</Button>
        {signUpError ? <SignUpError>{signUpError}</SignUpError> : null}
      </form>
    </Container>
  );
};

const describeError = (error: AuthError) => {
  if (error.code === AuthErrorCodes.EMAIL_EXISTS)
    return "There is an user created under that email";
  return "Something went wrong. Try again or contact the administrator";
};

export default SignUp;
