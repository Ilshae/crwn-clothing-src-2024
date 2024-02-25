import { FC, InputHTMLAttributes } from "react";
import { Container, Input, Label } from "./FormInputStyles.ts";

type FormInputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
  return (
    <Container>
      <Input {...otherProps} />
      {label ? (
        <Label
          shrink={Boolean(
            otherProps.value &&
              typeof otherProps.value === "string" &&
              otherProps.value.length,
          )}
        >
          {label}
        </Label>
      ) : null}
    </Container>
  );
};

export default FormInput;
