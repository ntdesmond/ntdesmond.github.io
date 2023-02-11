import { ReactNode } from 'react';
import styled from 'styled-components';

const StyledName = styled.span`
  font-weight: bold;
`;

const Language = (props: { name: ReactNode; level: ReactNode }) => (
  <p>
    <StyledName>{props.name}</StyledName>: <span>{props.level}</span>
  </p>
);

export default Language;
