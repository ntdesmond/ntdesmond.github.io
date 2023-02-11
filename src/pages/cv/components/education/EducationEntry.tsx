import { ReactNode } from 'react';
import styled from 'styled-components';
import { InTextHeading } from '../../../../components/typography/Headings';

const StyledSpecialty = styled.p`
  font-weight: 500;
`;

const EducationEntry = (props: {
  specialty: ReactNode;
  organization: ReactNode;
  period: ReactNode;
}) => (
  <div>
    <InTextHeading>{props.organization}</InTextHeading>
    <StyledSpecialty>{props.specialty}</StyledSpecialty>
    <p>{props.period}</p>
  </div>
);

export default EducationEntry;
