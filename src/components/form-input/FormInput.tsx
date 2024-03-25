import { FC, InputHTMLAttributes } from "react";
import { Container, ErrorText, Input, Label } from "./FormInputStyles.ts";

type FormInputProps = {
  label: string;
  error: string;
  dataCy?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({
  label,
  error,
  dataCy,
  ...otherProps
}) => {
  return (
    <Container>
      <Input data-cy={dataCy} {...otherProps} />
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
