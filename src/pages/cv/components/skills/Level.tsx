import styled from 'styled-components';

const StyledLevelBar = styled.div`
  height: 0.8em;
  max-width: 10em;
  background-color: #abd;
  border-radius: 0.4em;
  overflow: clip;
`;

const StyledValueBar = styled.div<{ width: number }>`
  height: 100%;
  width: ${(p) => p.width * 100}%;
  background-color: #035;
`;

const Level = (props: { value: number }) => (
  <StyledLevelBar>
    {props.value > 1 ? <b>error</b> : <StyledValueBar width={props.value} />}
  </StyledLevelBar>
);

export default Level;
