import styled from 'styled-components';

const NoPrint = styled.div`
  display: contents;
  @media print {
    display: none;
  }
`;

export default NoPrint;
