import styled from "styled-components";
import { ellipsisStyle } from "../styles/utils";

const FormField = ({ render, name, message, ...props }) => {
  return render({
    ...props,
    id: name,
    name,
    htmlFor: name,
    message: message[name]?.[0],
  });
};

FormField.displayName = "FormField";

const FormMessage = ({ message = "" }) => {
  return <StyledMessage>{message}</StyledMessage>;
};

FormMessage.displayName = "FormMessage";

const StyledMessage = styled.div`
  margin-top: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: var(--color-destructive);
  ${ellipsisStyle(1)};
`;

export { FormField, FormMessage };
