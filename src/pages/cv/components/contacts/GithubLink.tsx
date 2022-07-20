import GithubIcon from '../../../../components/icons/gh.svg';
import PrependIcon from './PrependIcon';

const GithubLink = (props: { path: string }) => (
  <PrependIcon icon={GithubIcon}>
    <a href={`https://github.com/${props.path}`}>github.com/{props.path}</a>
  </PrependIcon>
);

export default GithubLink;
