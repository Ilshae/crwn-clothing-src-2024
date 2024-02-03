import SignIn from "./SignIn.tsx";
import SignUp from "./SignUp.tsx";
import styled from "styled-components";

const Auth = () => {
  return (
    <Wrapper>
      <SignIn />
      <SignUp />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 900px;
  justify-content: space-between;
  margin: 30px auto;
`;

export default Auth;
