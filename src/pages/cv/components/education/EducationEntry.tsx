import { ReactNode } from 'react';
import styled from 'styled-components';

const Organization = styled.p`
  font-style: italic;
`;

const EducationEntry = (props: {
  speciality: ReactNode;
  organization: ReactNode;
  period: ReactNode;
}) => (
  <div>
    <p>{props.speciality}</p>
    <Organization>{props.organization}</Organization>
    <p>{props.period}</p>
  </div>
);

export default EducationEntry;
