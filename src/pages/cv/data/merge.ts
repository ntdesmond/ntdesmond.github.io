import { Language } from '../types/Language';

export type MergeInput<TKey extends string, TValue> = {
  en: Record<TKey, TValue>;
} & Record<Language, Record<TKey, Partial<TValue>>>;

/**
 * Merge `en` and `ru` keys of the object
 * @param obj object where `en` contains full `TValue` values and `ru` may omit some fields
 * @returns object with missing `ru` `TValue` fields filled from `en`
 */
const merge = <TKey extends string, TValue>({
  en,
  ru,
}: MergeInput<TKey, TValue>): Record<Language, Record<TKey, TValue>> => ({
  en,
  ru: (Object.entries(en) as [TKey, TValue][]).reduce(
    (all, [id, value]) => ({ ...all, [id]: { ...value, ...ru[id] } }),
    {} as typeof en,
  ),
});

export default merge;
