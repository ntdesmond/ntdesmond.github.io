import React from 'react';
import styled from 'styled-components';
import { XCentered } from './alignment/CenterAlign';
import Header from './header/Header';

const StyledLayout = styled.main`
  transition: padding 0.2s;
  height: 100%;
  display: grid;
  grid-template:
    'header' 2em
    'main' auto;
  max-width: 1000px;
  padding: 0.5em;
  width: 100%;
  box-sizing: border-box;
`;

const StyledMainSection = styled.section`
  grid-area: main;
`;

const Layout = (props: { children: React.ReactNode; className?: string }) => (
  <XCentered height="100%">
    <StyledLayout className={props.className}>
      <Header />
      <StyledMainSection>{props.children}</StyledMainSection>
    </StyledLayout>
  </XCentered>
);

export default Layout;
