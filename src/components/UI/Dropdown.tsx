import React, { Key, MouseEventHandler, useEffect, useState } from 'react';
import styled from 'styled-components';
import { onlyEnter, onlyKey } from '../../utils/keyboardEvents';
import useRefFactory from '../../utils/refFactory';
import ArrowDownIcon from '../icons/arrowDown.svg';
import { FlexRow } from '../layout/alignment/Flex';

const StyledDropdown = styled(FlexRow)`
  position: relative;
  padding: 0.3em;
  width: max-content;
  border: 0.1em solid #777;
  border-radius: 0.3em;
  user-select: none;

  ::after {
    margin-left: 0.5em;
    align-self: center;
    content: url(${ArrowDownIcon});
  }
`;

const StyledDrawer = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;
  top: calc(100% + 0.1em);
  width: 100%;
  outline: 0.1em solid #777;
  overflow: clip;
  border-radius: 0.3em;
  display: flex;
  flex-direction: column;
  gap: 0.1em;
  background-color: #333;
`;

const StyledItem = styled.div`
  padding: 0.3em;
  background-color: #fff;

  :hover {
    background-color: #bbb;
  }

  :focus {
    background-color: #aaa;
  }
`;

const Dropdown = (props: {
  children: React.ReactNode[];
  initialState: React.Key;
  onChange: (item: React.Key) => void;
  className?: string;
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const [selected, setSelected] = useState(props.initialState);
  const [focused, setFocused] = useState<number | null>(null);

  const [itemRefs, newItemRef] = useRefFactory<HTMLDivElement>();
  const parentRef = React.createRef<HTMLDivElement>();

  // Focus list items using keyboard
  useEffect(() => {
    if (focused !== null) {
      itemRefs[focused].current?.focus();
    }
  }, [focused, itemRefs]);

  const close = () => {
    setIsOpened(false);

    if (focused !== null) {
      setFocused(null);
      parentRef.current?.focus();
    }
  };
  const toggleIsOpened = () => setIsOpened(!isOpened);

  const focusNext = () => {
    let newIndex = (focused ?? -1) + 1;
    if (newIndex >= props.children.length) {
      newIndex = 0;
    }
    setFocused(newIndex);
  };

  const focusPrevious = () => {
    let newIndex = (focused ?? props.children.length) - 1;
    if (newIndex < 0) {
      newIndex = props.children.length - 1;
    }
    setFocused(newIndex);
  };

  const selectItem = (i: number) => {
    close();
    setSelected((props.children[i] as React.ReactElement).key as Key);
  };

  // Open/close on field (aka header) click
  const handleHeaderClick: MouseEventHandler = (e) => {
    e.stopPropagation();
    toggleIsOpened();
  };

  // Close if clicked outside the component
  useEffect(() => {
    (async () =>
      isOpened
        ? window.addEventListener('click', close)
        : window.removeEventListener('click', close))();
  });

  // Notify parent on state change
  useEffect(() => {
    props.onChange(selected);
  }, [props, selected]);

  const styledChildren = props.children.map((item, i) => {
    const itemRef = newItemRef();
    return (
      <StyledItem
        tabIndex={-1}
        onClick={() => selectItem(i)}
        onKeyDown={onlyEnter(() => selectItem(i))}
        key={(item as React.ReactElement).key}
        ref={itemRef}
      >
        {item}
      </StyledItem>
    );
  });

  return (
    <StyledDropdown
      className={props.className}
      onClick={handleHeaderClick}
      onKeyDown={(e) => {
        onlyEnter(toggleIsOpened)(e);
        onlyKey('Tab')(close)(e);
        onlyKey('ArrowDown')(focusNext)(e);
        onlyKey('ArrowUp')(focusPrevious)(e);
      }}
      role="button"
      tabIndex={0}
      ref={parentRef}
    >
      <div>{props.children.find((item) => (item as React.ReactElement).key === selected)}</div>
      {isOpened && <StyledDrawer>{styledChildren}</StyledDrawer>}
    </StyledDropdown>
  );
};

export default Dropdown;
