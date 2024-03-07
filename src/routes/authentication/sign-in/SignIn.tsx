import { ChangeEvent, FormEvent, useState } from "react";
import FormInput from "../../../components/form-input/FormInput.tsx";
import Button from "../../../components/button/Button.tsx";
import { ButtonContainer, Container } from "./SignInStyles.ts";
import { signInAuthUserWithEmailAndPassword } from "../../../utils/firebase.ts";
import { useNavigate } from "react-router-dom";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const navigate = useNavigate();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { name, value } = target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      navigate("/");
    } catch (error) {
      console.log("user sign in failed", error);
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
        </ButtonContainer>
      </form>
    </Container>
  );
};

export default SignIn;
