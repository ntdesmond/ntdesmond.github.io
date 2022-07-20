import styled from 'styled-components';

const FixedMargin = styled.div<{ margin: string }>`
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: ${(p) => p.margin};
  }
`;

export const NoMargin = styled(FixedMargin).attrs({ margin: '0' })``;

export default FixedMargin;
