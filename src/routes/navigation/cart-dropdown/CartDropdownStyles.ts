import styled from "styled-components";
import CustomButton from "../../../components/button/Button.tsx";
import { device } from "../../../theme.ts";

export const Container = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  @media ${device.mobileM} {
    width: 200px;
    height: 300px;
  }
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Button = styled(CustomButton)`
  margin-top: auto;
  text-transform: uppercase;

  @media ${device.mobileM} {
    font-size: 14px;
    white-space: nowrap;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;
