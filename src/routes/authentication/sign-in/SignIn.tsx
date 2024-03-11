import { ChangeEvent, FormEvent, useState } from "react";
import FormInput from "../../../components/form-input/FormInput.tsx";
import Button, {
  BUTTON_TYPE_CLASSES,
} from "../../../components/button/Button.tsx";
import { ButtonContainer, Container, SignInError } from "./SignInStyles.ts";
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../../utils/firebase.ts";
import { useNavigate } from "react-router-dom";
import { validateSignIn } from "../validation/validation.ts";
import { AuthError, AuthErrorCodes } from "firebase/auth";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const [errors, setErrors] = useState(defaultFormFields);
  const [signInError, setSignInError] = useState("");
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    navigate("/");
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { name, value } = target;
    setFormFields({ ...formFields, [name]: value });
  };

  const validate = () => {
    const errors = validateSignIn(formFields);
    setErrors({ ...errors });
    return Object.values(errors).every((x) => x === "");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (validate()) {
      try {
        await signInAuthUserWithEmailAndPassword(email, password);
        navigate("/");
      } catch (error) {
        setSignInError(describeError(error as AuthError));
      }
    }
  };

  return (
    <Container>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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

        <ButtonContainer>
          <Button type={"submit"}>Sign In</Button>
          <Button
            type={"button"}
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google sign in
          </Button>
        </ButtonContainer>
        {signInError ? <SignInError>{signInError}</SignInError> : null}
      </form>
    </Container>
  );
};

const describeError = (error: AuthError) => {
  if (error.code === AuthErrorCodes.INVALID_LOGIN_CREDENTIALS)
    return "Invalid login or password";
  return "Something went wrong. Try again or contact the administrator";
};

export default SignIn;
