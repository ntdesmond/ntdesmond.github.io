import { ReactNode } from 'react';
import styled from 'styled-components';
import FixedMargin from '../../../components/layout/alignment/FixedMargin';
import { SectionHeading } from '../../../components/typography/Headings';

const StyledHeading = styled(SectionHeading)`
  color: #035;
  border-bottom: 0.15em solid #035;
  margin: 0.5rem 0;
  white-space: nowrap;
`;

const Section = (
  { title, children, className }: {
    title: ReactNode;
    children: ReactNode;
    className?: string;
  },
) => (
  <FixedMargin margin="0.5rem 0" className={className}>
    <StyledHeading>{title}</StyledHeading>
    {children}
  </FixedMargin>
);

export default Section;
