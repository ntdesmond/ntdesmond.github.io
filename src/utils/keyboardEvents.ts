import { KeyboardEventHandler } from 'react';

export const onlyKey = (key: string | string[]) => (target: () => void) => {
  const wrapper: KeyboardEventHandler = (e) => {
    if (typeof key === 'string' && e.key !== key) {
      return;
    }
    if (key instanceof (Array<String>) && !key.includes(e.key)) {
      return;
    }

    target();
  };

  return wrapper;
};

export const onlyEnter = onlyKey('Enter');
