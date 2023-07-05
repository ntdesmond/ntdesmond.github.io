import styled from 'styled-components';
import ExternalURL from '../../UI/ExternalURL';

const StyledFooter = styled.div`
  margin: auto 0 0.5em;
  text-align: center;
  font-size: 0.9em;

  > p {
    margin: 0.3em 0;
  }
`;

const Footer = () => (
  <StyledFooter>
    <p>
      Source code of this website is available at{' '}
      <ExternalURL href={`https://github.com/${import.meta.env.GITHUB_REPO}`}>GitHub</ExternalURL>
    </p>
  </StyledFooter>
);

export default Footer;
