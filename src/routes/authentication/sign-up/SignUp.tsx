import { ChangeEvent, FormEvent, useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../../utils/firebase.ts";
import FormInput from "../../../components/form-input/FormInput.tsx";
import Button from "../../../components/button/Button.tsx";
import { Container } from "./SignUpStyles.ts";
import { AuthError, AuthErrorCodes } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const navigate = useNavigate();

  // const resetFormFields = () => {
  //   setFormFields(defaultFormFields);
  // };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { name, value } = target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const res = await createAuthUserWithEmailAndPassword(email, password);
      if (!res) throw Error();

      await createUserDocumentFromAuth(res?.user, { displayName });
      navigate("/");
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
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
        />
        <FormInput
          label={"Email"}
          required
          type={"email"}
          name={"email"}
          value={email}
          onChange={(event) => handleChange(event)}
        />
        <FormInput
          label={"Password"}
          required
          type={"password"}
          name={"password"}
          value={password}
          onChange={(event) => handleChange(event)}
        />
        <FormInput
          label={"Confirm Password"}
          required
          type={"password"}
          name={"confirmPassword"}
          value={confirmPassword}
          onChange={(event) => handleChange(event)}
        />

        <Button type={"submit"}>Sign Up</Button>
      </form>
    </Container>
  );
};

export default SignUp;
