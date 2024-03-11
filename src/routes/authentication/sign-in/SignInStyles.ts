import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  h2 {
    margin: 10px 0;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SignInError = styled.div`
  color: red;
  font-size: 14px;
  margin: 45px 0;
`;
