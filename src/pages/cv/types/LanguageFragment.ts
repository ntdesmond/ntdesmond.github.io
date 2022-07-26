import { ReactNode } from 'react';
import Language from './Language';

type LanguageFragments = {
  [lang in Exclude<Language, 'en'>]?: ReactNode;
} & {
  en: ReactNode;
};

class LanguageFragment {
  strings: LanguageFragments;

  constructor(strings: LanguageFragments) {
    this.strings = strings;
  }

  get(language: Language) {
    return this.strings[language] || this.strings.en;
  }
}

export default LanguageFragment;
