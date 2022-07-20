import React from 'react';

const TagsContext = React.createContext<{ tags: Set<string>; pushTag: (tag: string) => void }>({
  tags: new Set(),
  pushTag: () => {},
});

export default TagsContext;
