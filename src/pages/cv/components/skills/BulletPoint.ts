import styled from 'styled-components';

const BulletPoint = styled.div`
  &::before {
    content: '●';
    position: absolute;
    left: -1em;
  }

  & > &::before {
    content: '○';
  }

  margin: 0.5em 0 0 1.5em;
  position: relative;

  @media print {
    margin: 0.1em 0 0 1.5em;
  }
`;

export default BulletPoint;
