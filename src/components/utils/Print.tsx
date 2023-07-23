import { Hide, HideProps, Show, ShowProps, forwardRef } from '@chakra-ui/react';

/* eslint-disable react/jsx-props-no-spreading */
export const NoPrint = forwardRef<HideProps, 'div'>((props, _) => (
  <Hide breakpoint="print" {...props} />
));

export const OnlyPrint = forwardRef<ShowProps, 'div'>((props, _) => (
  <Show breakpoint="print" {...props} />
));
