import styled from "styled-components";

const StyledLevel = styled.div`
  font-size: 1.2em;
  color: #035;
`;

const Level = (props: { value: number; maxValue: number }) => {
  const diff = props.maxValue - props.value;
  return (
    <StyledLevel>
      {diff < 0 ? (
        <b>error</b>
      ) : (
        <>
          {"●".repeat(props.value)}
          {"○".repeat(diff)}
        </>
      )}
    </StyledLevel>
  );
};

export default Level;
