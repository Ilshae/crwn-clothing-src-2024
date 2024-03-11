export const validateSignIn = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const temp = {
    email: "",
    password: "",
  };

  temp.email = isValidEmail(email);
  temp.password = regularValidation(password);

  return temp;
};

export const validateSignUp = ({
  displayName,
  email,
  password,
  confirmPassword,
}: {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}) => {
  const temp = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  temp.displayName = regularValidation(displayName);
  temp.email = isValidEmail(email);
  temp.password = regularValidation(password);
  temp.confirmPassword = samePassword(confirmPassword, password);

  return temp;
};

const regularValidation = (value: string) => {
  return !value
    ? requiredFieldText
    : containsIllegalChars(value)
      ? illegalCharsText
      : "";
};

const samePassword = (confirmPassword: string, password: string) => {
  return !confirmPassword
    ? requiredFieldText
    : containsIllegalChars(confirmPassword)
      ? illegalCharsText
      : confirmPassword !== password
        ? notSamePassword
        : "";
};

//eslint-disable-next-line
const illegalChars = ["`", "!", ";", '"', "'", ",", "\u00b4"];

const isValidEmail = (value: string) => {
  if (
    value.match(
      /* eslint-disable-next-line no-useless-escape */
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    )
  )
    return "";
  return badEmail;
};

const containsIllegalChars = (value: string) => {
  const chars = illegalChars.join("");
  const regex = new RegExp(`[${chars}]`);
  return regex.test(value);
};

const requiredFieldText = "This field is required";
const badEmail = "Incorrect email";
const illegalCharsText = "This field contains invalid characters";
const notSamePassword = "Passwords don't match";
