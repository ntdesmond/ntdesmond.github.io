import LocationIcon from '../../../../components/icons/location.svg';
import PrependIcon from './PrependIcon';

const Location = (props: { location: string }) => (
  <PrependIcon icon={LocationIcon}>{props.location}</PrependIcon>
);

export default Location;
