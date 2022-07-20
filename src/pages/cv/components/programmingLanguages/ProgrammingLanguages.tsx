import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-auto-flow: column;
  column-gap: 2em;
  width: fit-content;
  margin: 0.5em auto;
`;

const ProgrammingLanguages = (props: { children: React.ReactNode }) => (
  <StyledSection>{props.children}</StyledSection>
);

export default ProgrammingLanguages;
