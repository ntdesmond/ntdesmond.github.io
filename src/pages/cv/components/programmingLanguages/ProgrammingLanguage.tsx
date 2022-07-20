import { YCentered } from '../../../../components/layout/alignment/CenterAlign';
import Tag from '../tags/Tag';
import Level from './Level';

const ProgrammingLanguage = (props: {
  name: string;
  tagSlug?: string;
  value: number;
  maxValue?: number;
}) => (
  <YCentered justify="flex-end" gap="1em">
    <Tag slug={props.tagSlug || props.name} name={props.name} />
    <Level value={props.value} maxValue={props.maxValue || 5} />
  </YCentered>
);

export default ProgrammingLanguage;
