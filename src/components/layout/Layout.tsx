import React from 'react';
import styled from 'styled-components';
import { XCentered } from './alignment/CenterAlign';
import Footer from './footer/Footer';
import Header from './header/Header';

const StyledLayout = styled.main`
  transition: padding 0.2s;
  height: 100%;
  display: grid;
  grid-template-rows:
    2em
    auto
    min-content;
  max-width: 1100px;
  padding: 0.5em;
  width: 100%;
  box-sizing: border-box;
`;

const Layout = (props: { children: React.ReactNode; className?: string }) => (
  <XCentered height="100%">
    <StyledLayout className={props.className}>
      <Header />
      <section>{props.children}</section>
      <Footer />
    </StyledLayout>
  </XCentered>
);

export default Layout;
