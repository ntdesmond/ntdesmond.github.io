import { Language } from '../types/Language';

type ValueOrRecord<T> = T | { [key: string]: ValueOrRecord<T> };

const isRecord = (item: unknown): item is Record<string, unknown> =>
  !!item && typeof item === 'object' && !Array.isArray(item);

type NestedObject = Record<string, ValueOrRecord<string | number | string[]>>;

const merge = (strings: Record<Language, NestedObject>): Record<Language, NestedObject> => {
  const merge_nested = (en: NestedObject, ru: NestedObject) =>
    Object.entries(ru).reduce(
      (all, [key, value]): NestedObject => {
        const nested_ru = value;
        const nested_en = all[key];
        if (isRecord(nested_en) && isRecord(nested_ru)) {
          return { ...all, [key]: merge_nested(nested_en, nested_ru) };
        }
        return { ...all, [key]: value };
      },
      { ...en },
    );

  return { en: strings.en, ru: merge_nested(strings.en, strings.ru) };
};

export default merge;
