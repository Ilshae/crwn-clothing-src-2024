import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/utils.ts";
import { ChangeEvent, FormEvent, useState } from "react";
import FormInput from "../../components/form-input/FormInput.tsx";
import Button, {
  BUTTON_TYPE_CLASSES,
} from "../../components/button/Button.tsx";
import styled from "styled-components";

const defForm = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [form, setForm] = useState(defForm);
  const { email, password } = form;

  const resetFormFields = () => {
    setForm(defForm);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      await resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("No user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
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
        />
        <FormInput
          label={"Password"}
          required
          type={"password"}
          name={"password"}
          value={password}
          onChange={(event) => handleChange(event)}
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
      </form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  h2 {
    margin: 10px 0;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default SignIn;
