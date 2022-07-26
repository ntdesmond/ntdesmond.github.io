import React from 'react';

const useRefFactory = <T>(): [React.RefObject<T>[], () => React.RefObject<T>] => {
  const createdRefs: React.RefObject<T>[] = [];
  const newRef = () => {
    const ref = React.createRef<T>();
    createdRefs.push(ref);
    return ref;
  };

  return [createdRefs, newRef];
};

export default useRefFactory;
