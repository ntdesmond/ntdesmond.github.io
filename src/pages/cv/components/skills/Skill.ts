import styled from 'styled-components';

const Skill = styled.div`
  &::before {
    content: '●';
    margin: 0 0.5em;
  }

  & > &::before {
    content: '○';
    margin-left: 1.5em;
  }
`;

export default Skill;
