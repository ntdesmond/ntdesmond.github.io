import TelegramIcon from '../../../../components/icons/tg.svg';
import PrependIcon from './PrependIcon';

const TelegramLink = (props: { path: string }) => (
  <PrependIcon icon={TelegramIcon}>
    <a href={`https://t.me/${props.path}`}>@{props.path}</a>
  </PrependIcon>
);

export default TelegramLink;
