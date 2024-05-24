import styled from "styled-components";

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

const StyledContainer = styled.main`
  max-width: 1024px;
  margin: 32px auto 48px;
  padding: 0 3%;
`;

Container.displayName = "Container";

export default Container;
