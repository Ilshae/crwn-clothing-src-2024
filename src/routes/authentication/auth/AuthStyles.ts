import styled from "styled-components";
import { device } from "../../../theme.ts";

export const Container = styled.div`
  display: flex;
  max-width: 900px;
  width: 100%;
  justify-content: space-between;
  margin: 30px auto;

  @media ${device.laptop} {
    flex-direction: column;
    align-items: center;
  }
`;
