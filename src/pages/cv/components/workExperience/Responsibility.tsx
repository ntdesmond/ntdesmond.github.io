import React from 'react';
import styled from 'styled-components';
import TagList from '../tags/TagList';

const StyledResponsibility = styled.div`
  display: grid;
  grid-template-columns: auto 8em;
  gap: 1em;
`;

const Responsibility = (props: { children: React.ReactNode; tags: string[] }) => (
  <StyledResponsibility>
    <div>{props.children}</div>
    <TagList tags={props.tags} />
  </StyledResponsibility>
);

export default Responsibility;
