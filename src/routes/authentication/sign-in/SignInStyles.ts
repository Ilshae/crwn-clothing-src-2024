import styled from "styled-components";
import { device } from "../../../theme.ts";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    margin: 10px 0;
  }

  @media ${device.laptop} {
    margin: 0 0 60px 0;
    width: 700px;
  }

  @media ${device.tablet} {
    width: 430px;
  }

  @media ${device.mobileL} {
    margin: 0 0 60px 0;
    width: 90%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  white-space: nowrap;

  @media ${device.laptop} {
    flex-direction: column;
  }
`;

export const SignInError = styled.div`
  color: red;
  font-size: 14px;
  margin: 45px 0;
`;
