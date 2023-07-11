import { Hide, HideProps, Show, ShowProps, forwardRef } from '@chakra-ui/react';

export const NoPrint = forwardRef<HideProps, 'div'>((props, _) => (
  <Hide
    breakpoint="print"
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
));

export const OnlyPrint = forwardRef<ShowProps, 'div'>((props, _) => (
  <Show
    breakpoint="print"
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
));
