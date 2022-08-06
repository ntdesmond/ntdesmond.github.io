import styled from 'styled-components';
import TagsContext from '../../contexts/TagsContext';
import TagList from './TagList';

const StyledTagList = styled(TagList)`
  font-size: 0.8em;
`;

const TagsSection = () => (
  <TagsContext.Consumer>
    {({ tags }) => <StyledTagList tags={Array.from(tags.values()).sort()} print />}
  </TagsContext.Consumer>
);

export default TagsSection;
