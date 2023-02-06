import styled from 'styled-components';

const BulletPoint = styled.div`
  &::before {
    content: '•';
    font-size: 2em;
    line-height: 0.7em;
    position: absolute;
    left: -0.5em;
  }

  & > &::before {
    content: '◦';
  }

  margin: 0.5em 0 0 1.5em;
  position: relative;

  @media print {
    margin: 0.1em 0 0 1.5em;
  }
`;

export default BulletPoint;
