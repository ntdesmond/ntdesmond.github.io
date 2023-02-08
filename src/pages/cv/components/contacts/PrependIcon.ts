import styled from 'styled-components';

const PrependIcon = styled.p<{ icon: string }>`
  ::before {
    content: '';
    padding: 1.5em 0 0 1.5em;
    background: url(${(p) => p.icon}) no-repeat center / contain;
    display: inline-block;
    vertical-align: middle;
    margin-right: 0.5em;

    @media print {
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
    }
  }

  margin: 0.2em 0;
`;

export default PrependIcon;
