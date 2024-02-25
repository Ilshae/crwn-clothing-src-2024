import SignIn from "../sign-in/SignIn.tsx";
import SignUp from "../sign-up/SignUp.tsx";
import { Container } from "./AuthStyles.ts";

const Auth = () => {
  return (
    <Container>
      <SignIn />
      <SignUp />
    </Container>
  );
};

export default Auth;
