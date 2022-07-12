import styled from "styled-components";
import FixedMargin from "../../../components/layout/alignment/FixedMargin";
import { SectionHeading } from "../../../components/typography/Headings";

const StyledHeading = styled(SectionHeading)`
  color: #035;
  border-bottom: 0.15em solid #035;
  margin: 0.5rem 0;
`;

export const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <FixedMargin margin="0.5rem 0">
    <StyledHeading>{title}</StyledHeading>
    {children}
  </FixedMargin>
);
