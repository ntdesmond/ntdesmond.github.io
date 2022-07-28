import styled from 'styled-components';

const OnlyPrint = styled.div`
  display: none;
  @media print {
    display: contents;
  }
`;

export default OnlyPrint;
