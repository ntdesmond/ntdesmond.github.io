export type Language = 'en' | 'ru';

export const defaultLanguage: Language = 'en';

export type DefaultLanguageValue<T> = {
  [defaultLanguage]: T;
};
