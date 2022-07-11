import React from "react";
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

const Layout = ({ children }: { children: React.ReactNode }) => (
  <StyledLayout>
    <Header />
    <StyledMain>{children}</StyledMain>
  </StyledLayout>
);

export default Layout;
