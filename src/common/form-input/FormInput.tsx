import { FC } from "react";
import styled, { css } from "styled-components";

const FormInput: FC<{ label: string; [x: string]: string }> = ({
  label,
  ...otherProps
}) => {
  return (
    <Wrapper>
      <Input {...otherProps} />
      {label ? (
        <Label $shrink={otherProps.value.length > 0}>{label}</Label>
      ) : null}
    </Wrapper>
  );
};

const subColor = "grey";
const mainColor = "black";

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

const Wrapper = styled.div`
  position: relative;
  margin: 45px 0;

  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;

const Label = styled.label<{ $shrink: boolean }>`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  ${({ $shrink }) => $shrink && shrinkLabelStyles};
`;

const Input = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${Label} {
    ${shrinkLabelStyles};
  }
`;
export default FormInput;
