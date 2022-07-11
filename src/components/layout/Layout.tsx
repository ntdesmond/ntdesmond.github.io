import styled from "styled-components";
import Header from "./header/Header";

const StyledLayout = styled.div`
  height: 100%;
  display: grid;
  grid-template:
    "header" 2em
    "main" auto;
`;

const StyledMain = styled.section`
  grid-area: main;
`;

const Layout = ({
  isHome = false,
  children,
}: React.PropsWithChildren<{ isHome?: boolean }>) => (
  <StyledLayout>
    <Header isHome={isHome} />
    <StyledMain>{children}</StyledMain>
  </StyledLayout>
);

export default Layout;
