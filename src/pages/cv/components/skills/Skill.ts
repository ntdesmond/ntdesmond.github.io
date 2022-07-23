import styled from 'styled-components';

const Skill = styled.div`
  &::before {
    content: '●';
    position: absolute;
    margin-left: -1em;
  }

  & > &::before {
    content: '○';
  }

  margin: 0.5em 0 0 1.5em;
`;

export default Skill;
