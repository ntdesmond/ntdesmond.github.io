import { useContext } from 'react';
import styled from 'styled-components';
import FixedMargin from '../../../components/layout/alignment/FixedMargin';
import { SectionHeading } from '../../../components/typography/Headings';
import LanguageContext from '../contexts/LanguageContext';
import LanguageFragment from '../types/LanguageFragment';

const StyledHeading = styled(SectionHeading)`
  color: #035;
  border-bottom: 0.15em solid #035;
  margin: 0.5rem 0;
  white-space: nowrap;
`;

const Section = (
  { title, children, className }: {
    title: LanguageFragment;
    children: React.ReactNode;
    className?: string;
  },
) => (
  <FixedMargin margin="0.5rem 0" className={className}>
    <StyledHeading>{title.get(useContext(LanguageContext))}</StyledHeading>
    {children}
  </FixedMargin>
);

export default Section;
