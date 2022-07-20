import styled from 'styled-components';

const Language = styled.p`
  font-weight: bold;
`;

const LanguageEntry = (props: { language: string; level: string }) => (
  <div>
    <Language>{props.language}</Language>
    <p>{props.level}</p>
  </div>
);

export default LanguageEntry;
