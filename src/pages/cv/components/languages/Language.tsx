import { ReactNode } from 'react';
import styled from 'styled-components';

const StyledName = styled.p`
  font-weight: bold;
`;

const Language = (props: { name: ReactNode; level: ReactNode }) => (
  <div>
    <StyledName>{props.name}</StyledName>
    <p>{props.level}</p>
  </div>
);

export default Language;
