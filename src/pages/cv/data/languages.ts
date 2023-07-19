import { Language } from '../types/Language';
import merge from './merge';

export interface LanguageProficiency {
  language: string;
  level: string;
}

const languages = merge<Language, LanguageProficiency>({
  en: {
    en: {
      language: 'English',
      level: 'Advanced',
    },
    ru: {
      language: 'Russian',
      level: 'Native',
    },
  },
  ru: {
    en: {
      language: 'Английский',
      level: 'Продвинутый',
    },
    ru: {
      language: 'Русский',
      level: 'Родной',
    },
  },
});

export default languages;
