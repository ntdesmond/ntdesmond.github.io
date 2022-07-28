import { useContext } from 'react';
import styled from 'styled-components';
import LanguageContext from '../../contexts/LanguageContext';
import LanguageFragment from '../../types/LanguageFragment';

const StyledName = styled.p`
  font-weight: bold;
`;

const Language = (props: { name: LanguageFragment; level: LanguageFragment }) => {
  const language = useContext(LanguageContext);
  return (
    <div>
      <StyledName>{props.name.get(language)}</StyledName>
      <p>{props.level.get(language)}</p>
    </div>
  );
};

export default Language;
