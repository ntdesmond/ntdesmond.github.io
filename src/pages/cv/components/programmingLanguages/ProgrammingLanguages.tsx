import styled from "styled-components";
import { YCentered } from "../../../../components/layout/alignment/CenterAlign";
import Level from "./Level";

const StyledSection = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-auto-flow: column;
  column-gap: 2em;
  width: fit-content;
  margin: 0.5em auto;
`;

const ProgrammingLanguages = (props: {
  entries: { [language: string]: number };
  maxValue?: number;
}) => (
  <StyledSection>
    {Object.entries(props.entries).map(([name, value]) => (
      <YCentered justify="flex-end" gap="1em">
        <div>{name}</div>
        <Level value={value} maxValue={props.maxValue || 5} />
      </YCentered>
    ))}
  </StyledSection>
);

export default ProgrammingLanguages;
