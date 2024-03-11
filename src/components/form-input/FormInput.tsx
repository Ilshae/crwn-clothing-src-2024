import { FC, InputHTMLAttributes } from "react";
import { Container, ErrorText, Input, Label } from "./FormInputStyles.ts";

type FormInputProps = {
  label: string;
  error: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, error, ...otherProps }) => {
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
      {error ? <ErrorText>{error}</ErrorText> : null}
    </Container>
  );
};

export default FormInput;
