import { Message } from "./ErrorMessage.style";
import PropsTypes from "prop-types";

const ErrorMessage = ({ errors, name }) => {
  const error = errors[name];

  return (
    <>
      <Message>{error && error.message}</Message>
    </>
  );
};

ErrorMessage.propsTypes = {
  errors: PropsTypes.object,
  name: PropsTypes.string,
};

export default ErrorMessage;
