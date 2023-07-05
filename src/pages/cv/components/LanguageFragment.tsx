import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { defaultLanguage, DefaultLanguageValue, Language } from '../types/Language';

export type LanguageFragmentProps = {
  language?: Language;
} & {
  [x in Language]?: ReactNode;
} & DefaultLanguageValue<ReactNode>;

const LanguageFragment = (props: LanguageFragmentProps) => {
  const { search } = useLocation();
  const language =
    props.language || (new URLSearchParams(search).get('language') as Language) || defaultLanguage;

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{props[language] ?? props[defaultLanguage]}</>;
};

export default LanguageFragment;
