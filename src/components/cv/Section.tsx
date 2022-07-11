import styled from "styled-components";
import { SectionHeading } from "../typography/Headings";

const StyledHeading = styled(SectionHeading)`
  color: #035;
  border-bottom: 0.15em solid #035;
`;

export const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div>
    <StyledHeading>{title}</StyledHeading>
    {children}
  </div>
);
