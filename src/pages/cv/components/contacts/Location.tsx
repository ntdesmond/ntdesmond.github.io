import { useContext } from 'react';
import LocationIcon from '../../../../components/icons/location.svg';
import LanguageContext from '../../contexts/LanguageContext';
import LanguageFragment from '../../types/LanguageFragment';
import PrependIcon from './PrependIcon';

const Location = (props: { location: LanguageFragment }) => {
  const language = useContext(LanguageContext);
  return <PrependIcon icon={LocationIcon}>{props.location.get(language)}</PrependIcon>;
};

export default Location;
