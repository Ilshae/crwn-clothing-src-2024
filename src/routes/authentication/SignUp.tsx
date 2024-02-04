import { ChangeEvent, FormEvent, useContext, useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/utils.ts";
import FormInput from "../../common/form-input/FormInput.tsx";
import styled from "styled-components";
import Button from "../../common/button/Button.tsx";
import { UserContext } from "../../contexts/user.tsx";

const defForm = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [form, setForm] = useState(defForm);
  const { displayName, email, password, confirmPassword } = form;

  const { setCurrentUser } = useContext(UserContext);

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

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password,
      );

      setCurrentUser(user);

      await createUserDocumentFromAuth(user, { displayName });
      await resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use")
        alert("Cannot create user, email already in use");

      console.log("error creating the user", error);
    }
  };

  return (
    <Wrapper>
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  h2 {
    margin: 10px 0;
  }
`;

export default SignUp;
