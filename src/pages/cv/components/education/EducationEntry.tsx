import { useContext } from 'react';
import styled from 'styled-components';
import LanguageContext from '../../contexts/LanguageContext';
import LanguageFragment from '../../types/LanguageFragment';

const Organization = styled.p`
  font-style: italic;
`;

const EducationEntry = (props: {
  speciality: LanguageFragment;
  organization: LanguageFragment;
  period: LanguageFragment;
}) => {
  const language = useContext(LanguageContext);
  return (
    <div>
      <p>{props.speciality.get(language)}</p>
      <Organization>{props.organization.get(language)}</Organization>
      <p>{props.period.get(language)}</p>
    </div>
  );
};

export default EducationEntry;
