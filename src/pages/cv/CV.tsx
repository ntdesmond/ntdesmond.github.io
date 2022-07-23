import styled from 'styled-components';
import Layout from '../../components/layout/Layout';

const StyledInnerDocument = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const StyledLayout = styled(Layout)`
  /* Dirty fix for 4px scroll */
  overflow: hidden;
`;

const CV = () => (
  <StyledLayout>
    <StyledInnerDocument title="CV" src="/cv.html" />
  </StyledLayout>
);

export default CV;
